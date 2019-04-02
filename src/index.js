require('dotenv').config()

// Libraries
const Koa = require('koa');
const Discord = require('discord.js');
const logger = require('winston');


// Functions
const { configureLogger } = require('./util/util');
const onReady = require('./events/onReady');
const onMessage = require('./events/onMessage');
const onGuildMemberAdd = require('./events/onGuildMemberAdd');
const { onIntervalOneHour, onIntervalTwoHours } = require('./events/onInterval');
const onIntervalOneHourDelay = 1000 * 60 * 60 * 1; // every hour
const onIntervalTwoHoursDelay = 1000 * 60 * 60 * 2; // every 2 hours
// const knex = require('./db/knex');

const app = new Koa();
const client = new Discord.Client();

configureLogger(logger);

// incoming events
client.on('ready', onReady(client, logger));
client.on('message', onMessage(client));
client.on('guildMemberAdd', onGuildMemberAdd(client));

// automated events
client.setInterval(onIntervalOneHour, onIntervalOneHourDelay);
client.setInterval(onIntervalTwoHours, onIntervalTwoHoursDelay);

// login bot
client.login(process.env.DISCORD_NFD_BOT_TOKEN);
 
app.listen(2000);