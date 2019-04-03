require('dotenv').config()

// Libraries
const Koa = require('koa');
const Discord = require('discord.js');
const logger = require('winston');

// Functions
const onReady = require('./events/onReady');
const onMessage = require('./events/onMessage');
const onGuildMemberAdd = require('./events/onGuildMemberAdd');
const { configureLogger } = require('./util/util');
const { onIntervalTenMinutes, onIntervalOneHour, onIntervalTwoHours, onIntervalDay } = require('./events/onInterval');
// const onIntervalTenMinutesDelay = 1000 * 60 * 10 * 1; // every ten minutes
// const onIntervalOneHourDelay = 1000 * 60 * 60 * 1; // every hour
// const onIntervalTwoHoursDelay = 1000 * 60 * 60 * 2; // every 2 hours
// const onIntervalDayDelay = 1000 * 60 * 60 * 24; // every 24 hours

const onIntervalTenMinutesDelay = 1000 * 1 * 1; // every 1 seconds
const onIntervalOneHourDelay = 1000 * 5 * 1; // every 5 seconds
const onIntervalTwoHoursDelay = 1000 * 60 * 2; // every 2 minutes
const onIntervalDayDelay = 1000 * 60 * 60 * 5; // every 5 minutes


// const knex = require('./db/knex');

// Application Setup
const app = new Koa();
const client = new Discord.Client();

configureLogger(logger);

// incoming events
client.on('ready', onReady(client, logger));
client.on('message', onMessage(client));
client.on('guildMemberAdd', onGuildMemberAdd(client));

// automated events
client.setInterval(onIntervalTenMinutes(client), onIntervalTenMinutesDelay);
client.setInterval(onIntervalOneHour(client), onIntervalOneHourDelay);
// client.setInterval(onIntervalTwoHours(client), onIntervalTwoHoursDelay);
// client.setInterval(onIntervalDay(client), onIntervalDayDelay);

// login bot
client.login(process.env.DISCORD_NFD_BOT_TOKEN);
 
app.listen(2000);