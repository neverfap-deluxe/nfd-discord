require('dotenv').config()

// Libraries
const Koa = require('koa');
const Discord = require('discord.js');
const Winston = require('winston');
const cron = require('node-cron');
const cors = require('@koa/cors');
// const nodemailer = require("nodemailer");
// const aws = require('aws-sdk');

// Functions
const onReady = require('./events/onReady');
const onMessage = require('./events/onMessage');
// const onMessageUpdate = require('./events/onMessageUpdate');
const onMessageReactionAdd = require('./events/onMessageReactionAdd');
const onGuildMemberAdd = require('./events/onGuildMemberAdd');
const { configureLogger, configureEmail, generateDelayValues } = require('./util/util');
// const { configureTwitter, configureReddit, configureFacebook } = require('./social/configureSocial');
const { onIntervalTenMinutes, onIntervalOneHour, onIntervalFourHours, onIntervalFiveHours, onIntervalDayHalf, onIntervalDay, onIntervalWeek } = require('./events/onInterval');
const { onIntervalTenMinutesDelay, onIntervalOneHourDelay, onIntervalThreeHoursDelay, onIntervalFourHoursDelay, onIntervalDayHalfDelay, onIntervalDayDelay, onIntervalWeekDelay} = generateDelayValues(process.env.MODE);

// CRON Functions
const theseUsersPostedToday = require('./events/cron/theseUsersPostedToday');
const accountabilityTallyCountdown = require('./events/cron/accountabilityTallyCountdown');

// GraphQL Server
const graphqlServer = require('./graphql/server');

// Application Setup
const app = new Koa();
const client = new Discord.Client();
const logger = configureLogger(Winston);
const router = require('./routes');
// const email = configureEmail(aws, nodemailer);

// Handle Middleware
const views = require('koa-views');
const serve = require('koa-static');
app.use(cors());
app.use(serve(__dirname + '/views/css'));
app.use(views(__dirname + '/views', {
  extension: 'mustache'
}));
app.use(router.routes())

// Incoming Events
client.on('ready', onReady(client, logger));
client.on('message', onMessage(client, logger, twitterClient, redditClient));
// client.on('messageUpdate', onMessageUpdate(client));
client.on('messageReactionAdd', onMessageReactionAdd(client, logger));
client.on('guildMemberAdd', onGuildMemberAdd(client, logger));
client.on('error', logger.error);

// Automated Events
client.setInterval(onIntervalTenMinutes(client, logger), onIntervalTenMinutesDelay);
client.setInterval(onIntervalOneHour(client, logger), onIntervalOneHourDelay);
client.setInterval(onIntervalFourHours(client, logger), onIntervalThreeHoursDelay);
client.setInterval(onIntervalFiveHours(client, logger), onIntervalFourHoursDelay);
client.setInterval(onIntervalDayHalf(client, logger), onIntervalDayHalfDelay);
client.setInterval(onIntervalDay(client, logger), onIntervalDayDelay);
client.setInterval(onIntervalWeek(client, logger), onIntervalWeekDelay);

// CRON
cron.schedule('0 12 * * *', async () => {
  const juliusReade = await client.fetchUser(process.env.JULIUS_READE_ID);
  theseUsersPostedToday(client, logger, juliusReade);
});
cron.schedule('59 11 * * *', async () => {
  const juliusReade = await client.fetchUser(process.env.JULIUS_READE_ID);
  accountabilityTallyCountdown(client, logger, juliusReade, "oneMinuteBeforeMessage");
});
cron.schedule('55 11 * * *', async () => {
  const juliusReade = await client.fetchUser(process.env.JULIUS_READE_ID);
  accountabilityTallyCountdown(client, logger, juliusReade, "fiveMinutesBeforeMessage");
});
cron.schedule('30 11 * * *', async () => {
  const juliusReade = await client.fetchUser(process.env.JULIUS_READE_ID);
  accountabilityTallyCountdown(client, logger, juliusReade, "thirtyMinutesBeforeMessage");
});
cron.schedule('0 11 * * *', async () => {
  const juliusReade = await client.fetchUser(process.env.JULIUS_READE_ID);
  accountabilityTallyCountdown(client, logger, juliusReade, "oneHourBeforeMessage");
});
cron.schedule('0 10 * * *', async () => {
  const juliusReade = await client.fetchUser(process.env.JULIUS_READE_ID);
  accountabilityTallyCountdown(client, logger, juliusReade, "oneTwoHoursBeforeMessage");
});
cron.schedule('0 8 * * *', async () => {
  const juliusReade = await client.fetchUser(process.env.JULIUS_READE_ID);
  accountabilityTallyCountdown(client, logger, juliusReade, "oneFourHoursBeforeMessage");
});
cron.schedule('0 0 * * *', async () => {
  const juliusReade = await client.fetchUser(process.env.JULIUS_READE_ID);
  accountabilityTallyCountdown(client, logger, juliusReade, "twelveHoursBeforeMessage");
});

// GraphQL Server
const options = {
  port: 2001,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
  cors: {
    credentials: true,
    preflightContinue: true,
    origin: ["https://league.neverfapdeluxe.com", "http://localhost:3000"] // your frontend url.
  }
};

graphqlServer.start(options, () => console.log(`GraphQL Server is running on localhost:${options.port}`))

// Login Bot
client.login(process.env.DISCORD_NFD_BOT_TOKEN);

// Start Koa Server
app.listen(2000);