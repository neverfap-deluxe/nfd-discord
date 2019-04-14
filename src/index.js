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
client.on('message', onMessage(client, twitterClient, redditClient));
// client.on('messageUpdate', onMessageUpdate(client));
client.on('guildMemberAdd', onGuildMemberAdd(client));

// Automated Events
client.setInterval(onIntervalTenMinutes(client), onIntervalTenMinutesDelay);
client.setInterval(onIntervalFourHours(client), onIntervalThreeHoursDelay);
client.setInterval(onIntervalFiveHours(client), onIntervalFourHoursDelay);
client.setInterval(onIntervalDayHalf(client), onIntervalDayHalfDelay);
client.setInterval(onIntervalDay(client), onIntervalDayDelay);
client.setInterval(onIntervalWeek(client), onIntervalWeekDelay);

// Login Bot
client.login(process.env.DISCORD_NFD_BOT_TOKEN);
 
app.listen(2000);