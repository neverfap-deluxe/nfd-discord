import path from 'path';
import { config } from 'dotenv-flow';
config({ path: path.resolve(__dirname, '..', 'deployment', 'environment') });

// Libraries
import Koa from 'koa';
import Discord, { Client } from 'discord.js';
import SnooWrap from 'snoowrap';

// Functions
import onReady from './events/onReady';
import onMessage from './events/onMessage';
import onMessageReactionAdd from './events/onMessageReactionAdd';
import onGuildMemberAdd from './events/onGuildMemberAdd';
import onGuildMemberRemove from './events/onGuildMemberRemove';

import setupCron from './events/cron';
import logger from './util/logger';
import { generateDelayValues } from './util/util';
import startGraphqlServer from './graphql/server';
// import redditAccountabilityMain from './redditAccountability/main';


import { onIntervalTenMinutes, onIntervalOneHour, onIntervalThreeHours, onIntervalFourHours, onIntervalFiveHours, onIntervalDayHalf } from './events/onInterval';
const { onIntervalTenMinutesDelay, onIntervalOneHourDelay, onIntervalThreeHoursDelay, onIntervalFourHoursDelay, onIntervalFiveHoursDelay, onIntervalDayHalfDelay } = generateDelayValues();

const clientReady = (client: Client) => new Promise(resolve => client.once('ready', onReady(client, resolve)));

const main = async () => {
  // Application Setup
  const app: Koa = new Koa();
  const client: Client = new Discord.Client({
    messageCacheMaxSize: 2000, // 200 default
    messageCacheLifetime: 7200, // Allow cached messages to live for 2 hours. default 0
    messageSweepInterval: 600 // every 10 minutes, remove all cached messages older than 2 hours. default 0
  });

  const redditClient = new SnooWrap({
    userAgent:  process.env.REDDIT_API_USER_AGENT as string,
    clientId: process.env.REDDIT_API_KEY as string,
    clientSecret: process.env.REDDIT_API_KEY_SECRET as string,
    refreshToken: process.env.REDDIT_API_REFRESH_TOKEN as string,
  });

  client.login(process.env.DISCORD_NFD_BOT_TOKEN);

  // Incoming Events
  await clientReady(client);

  client.on('message', onMessage(client));
  client.on('messageReactionAdd', onMessageReactionAdd(client));
  client.on('guildMemberRemove', onGuildMemberRemove(client));
  client.on('guildMemberAdd', onGuildMemberAdd(client));
  client.on('error', logger.error);

  // TODO for accountability program.
  // client.on('messageUpdate', messageUpdate(client));

  // Automated Events
  client.setInterval(onIntervalTenMinutes(client), onIntervalTenMinutesDelay);
  client.setInterval(onIntervalOneHour(client), onIntervalOneHourDelay);
  client.setInterval(onIntervalThreeHours(client), onIntervalThreeHoursDelay);
  client.setInterval(onIntervalFourHours(client), onIntervalFourHoursDelay);
  client.setInterval(onIntervalFiveHours(client), onIntervalFiveHoursDelay);
  client.setInterval(onIntervalDayHalf(client), onIntervalDayHalfDelay);

  await setupCron(client, redditClient);
  // await redditAccountabilityThreadPoolCommentsEventListener(client, redditClient);

  startGraphqlServer();
  app.listen(2000);
}

main();
