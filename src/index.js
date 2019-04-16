require('dotenv').config()

// Libraries
const Koa = require('koa');
const Discord = require('discord.js');
const Winston = require('winston');
const Twit = require('twit');
const SnooWrap = require('snoowrap');

// Functions
const onReady = require('./events/onReady');
const onMessage = require('./events/onMessage');
// const onMessageUpdate = require('./events/onMessageUpdate');
// const onMessageReactionAdd = require('./events/onMessageReactionAdd');
const onGuildMemberAdd = require('./events/onGuildMemberAdd');
const { configureLogger, configureTwitter, configureReddit, generateDelayValues } = require('./util/util');
const { onIntervalTenMinutes, onIntervalFourHours, onIntervalFiveHours, onIntervalDayHalf, onIntervalDay, onIntervalWeek } = require('./events/onInterval');
const { onIntervalTenMinutesDelay, onIntervalThreeHoursDelay, onIntervalFourHoursDelay, onIntervalDayHalfDelay, onIntervalDayDelay, onIntervalWeekDelay} = generateDelayValues(process.env.MODE);

// Application Setup
const app = new Koa();
const client = new Discord.Client();
const logger = configureLogger(Winston);
const twitterClient = configureTwitter(Twit); 
const redditClient = configureReddit(SnooWrap); 

// Incoming Events
client.on('ready', onReady(client, logger));
client.on('message', onMessage(client, logger, twitterClient, redditClient));
// client.on('messageUpdate', onMessageUpdate(client));
// client.on('messageReactionAdd', messageReactionAdd(client));
client.on('guildMemberAdd', onGuildMemberAdd(client, logger));
client.on('error', console.log);

// Automated Events
client.setInterval(onIntervalTenMinutes(client, logger), onIntervalTenMinutesDelay);
client.setInterval(onIntervalFourHours(client, logger), onIntervalThreeHoursDelay);
client.setInterval(onIntervalFiveHours(client, logger), onIntervalFourHoursDelay);
client.setInterval(onIntervalDayHalf(client, logger), onIntervalDayHalfDelay);
client.setInterval(onIntervalDay(client, logger), onIntervalDayDelay);
client.setInterval(onIntervalWeek(client, logger), onIntervalWeekDelay);

// Login Bot
client.login(process.env.DISCORD_NFD_BOT_TOKEN);
 
app.listen(2000);