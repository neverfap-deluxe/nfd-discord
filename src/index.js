require('dotenv').config()

// Libraries
const Koa = require('koa');
const Discord = require('discord.js');
const logger = require('winston');
const cron = require('node-cron');

// Functions
const { configureLogger } = require('./util/util');
const onReady = require('./events/onReady');
const onMessage = require('./events/onMessage');
const onGuildMemberAdd = require('./events/onGuildMemberAdd');

// const knex = require('./db/knex');

const app = new Koa();
const client = new Discord.Client();

configureLogger(logger);

client.on('ready', onReady(client, logger));
client.on('message', onMessage(client));
client.on('guildMemberAdd', onGuildMemberAdd(client));
client.login(process.env.DISCORD_NFD_BOT_TOKEN);
 
// cron.schedule('* * * * *', () => {
//   console.log('running a task every minute');
// });

app.listen(2000);