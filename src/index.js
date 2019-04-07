require('dotenv').config()

// Libraries
const Koa = require('koa');
const Discord = require('discord.js');
const logger = require('winston');

// Functions
const onReady = require('./events/onReady');
const onMessage = require('./events/onMessage');
const onGuildMemberAdd = require('./events/onGuildMemberAdd');
const { configureLogger, generateDelayValues } = require('./util/util');
const { onIntervalFiveMinutes, onIntervalSixHours, onIntervalTenHours, onIntervalDay, onIntervalWeek } = require('./events/onInterval');
const { onIntervalFiveMinutesDelay, onIntervalSixHoursDelay, onIntervalTenHoursDelay, onIntervalDayDelay, onIntervalWeekDelay} = generateDelayValues(process.env.MODE);

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
client.setInterval(onIntervalFiveMinutes(client), onIntervalFiveMinutesDelay);
client.setInterval(onIntervalSixHours(client), onIntervalSixHoursDelay);
client.setInterval(onIntervalTenHours(client), onIntervalTenHoursDelay);
client.setInterval(onIntervalDay(client), onIntervalDayDelay);
client.setInterval(onIntervalWeek(client), onIntervalWeekDelay);

// login bot
client.login(process.env.DISCORD_NFD_BOT_TOKEN);
 
app.listen(2000);