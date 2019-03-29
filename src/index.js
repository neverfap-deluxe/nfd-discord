require('dotenv').config()

const Koa = require('koa');
const Discord = require('discord.js');
const logger = require('winston');
const cron = require('node-cron');

const { configureLogger } = require('./util/util');
const onReady = require('./events/onReady');
const onMessage = require('./events/onMessage');

const app = new Koa();
const client = new Discord.Client();

configureLogger(logger);

app.use(async ctx => {
  ctx.body = 'Hello World';
});

client.on('ready', onReady(client, logger));
client.on('message', onMessage(client));
client.on('guildMemberAdd', onGuildMemberAdd(client));
client.login(process.env.DISCORD_API_KEY);

// CRONS
 
cron.schedule('* * * * *', () => {
  console.log('running a task every minute');
});

app.listen(2000);
