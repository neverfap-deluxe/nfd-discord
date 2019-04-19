const _ = require('lodash');
const moment = require('moment');
const uuidv4 = require('uuid/v4');
const knex = require('../db/knex');

const {
  RULES_COMMAND,
  HELP_COMMAND,
  COMMANDS_COMMAND,
  CHANNELS_COMMAND,
  ACCOUNTABILITY_COMMAND,
  ACCOUNTABILITY_EXAMPLE_COMMAND,
  CHEATSHEET_COMMAND,
  ANTI_CHEATSHEET_COMMAND,
  EMERGENCY_COMMAND,
  // PROGRESS_COMMAND,
} = require('../const/COMMAND');

const {
  rulesMessage,
  commandListMessage,
  channelListMessage,
  cheatsheetMessage,
  antiCheatsheetMessage,
  accountabilityMessage,
  accountabilityExampleMessage,
  emergencyMessage,
} = require('../const/MESSAGE');

const {
  isAccountabilityMessage,
} = require('../util/util');

const validateAccountabilityPost = require('./onMessage/validateAccountabilityPost');
const insertAccountabilityMessage = require('./onMessage/insertAccountabilityMessage');

const onMessage = (client, logger, twitterClient, redditClient) => {
  return async function (message) {
    const channel = _.get(message, 'channel');
    const messageContent = _.get(message, 'content');
    const discordUser = _.get(message, 'author');

    if (channel && discordUser && discordUser.id !== process.env.NEVERFAP_DELUXE_BOT_ID) {
      try {
        const dbUser = await knex('db_users').where('discord_id', discordUser.id).first();

        if (dbUser) {
          accountabilityChannelActions(client, logger, dbUser, discordUser, channel, message, twitterClient, redditClient);
          neverFapDeluxeBotCommands(client, logger, channel, messageContent);
        } else {
          const primary_id = uuidv4();
          const createdDbUser = await knex('db_users').returning('*').insert({ id: primary_id, discord_id: discordUser.id, username: discordUser.username });
          accountabilityChannelActions(client, logger, createdDbUser[0], discordUser, channel, message, twitterClient, redditClient);
          neverFapDeluxeBotCommands(client, logger, channel, messageContent);
        }
      } catch(error) {
        logger.error(`onMessage - ${error}`);
        throw new Error(`onMessage - ${error}`);
      }  
    }
  }
}

const accountabilityChannelActions = async (client, logger, db_user, discordUser, channel, message, twitterClient, redditClient) => {
  if (channel.id === process.env.ACCOUNTABILITY_CHANNEL_ID) {
    if (isAccountabilityMessage(message.content)) {
      const today = moment().format();
      const twelveHoursBefore =  process.env.MODE === 'dev' ? (
        moment().subtract(10, 'seconds')
      ) : (
        moment().subtract(12, 'hours')
      );
    
      const reccentAccountabilityMessages = await knex('accountability_messages').where('db_users_id', db_user.id).whereBetween('created_at', [twelveHoursBefore, today]);
      const juliusReade = await client.fetchUser(process.env.JULIUS_READE_ID);

      if (reccentAccountabilityMessages.length === 0) {
        validateAccountabilityPost(client, logger, db_user, discordUser, channel, message, twitterClient, redditClient);
        insertAccountabilityMessage(client, logger, db_user, discordUser, message, twitterClient, redditClient, juliusReade);
      } else {
        logger.error(`posted in accountability too soon, so didn't go into database - ${discordUser.username}`);
        await juliusReade.send(`posted in accountability too soon, so didn't go into database - ${discordUser.username}`);
      }
    }
  }
}

const neverFapDeluxeBotCommands = async (client, logger, channel, messageContent) => {
  try {
    const accountabilityChannel = client.channels.get(process.env.ACCOUNTABILITY_CHANNEL_ID);

    if (messageContent.substring(0, 1) == '!') {
      const args = messageContent.substring(1).split(' ');
      const cmd = args[0];
    
      switch(cmd) {
        case RULES_COMMAND: {
          const msg = await channel.send(rulesMessage(accountabilityChannel));
          logger.info(`Sent channel message: ${msg.id} - neverFapDeluxeBotCommands`);
          break;
        }
        case HELP_COMMAND:
        case COMMANDS_COMMAND: {
          const msg = await channel.send(commandListMessage);
          logger.info(`Sent channel message: ${msg.id} - neverFapDeluxeBotCommands`);
          break;
        }
        case CHANNELS_COMMAND: {
          const msg = await channel.send(channelListMessage);
          logger.info(`Sent channel message: ${msg.id} - neverFapDeluxeBotCommands`);
          break;
        }
        case ACCOUNTABILITY_COMMAND: {
          const msg = await channel.send(accountabilityMessage(accountabilityChannel));
          logger.info(`Sent channel message: ${msg.id} - neverFapDeluxeBotCommands`);
          break;
        }
        case ACCOUNTABILITY_EXAMPLE_COMMAND: {
          const msg = await channel.send(accountabilityExampleMessage(accountabilityChannel));
          logger.info(`Sent channel message: ${msg.id} - neverFapDeluxeBotCommands`);
          break;
        }
        case CHEATSHEET_COMMAND: {
          const msg = await channel.send(cheatsheetMessage);
          logger.info(`Sent channel message: ${msg.id} - neverFapDeluxeBotCommands`);
          break;
        }
        case ANTI_CHEATSHEET_COMMAND: {
          const msg = await channel.send(antiCheatsheetMessage);
          logger.info(`Sent channel message: ${msg.id} - neverFapDeluxeBotCommands`);
          break;
        }
        case EMERGENCY_COMMAND: {
          const msg = await channel.send(emergencyMessage);
          logger.info(`Sent channel message: ${msg.id} - neverFapDeluxeBotCommands`);
          break;
        }
        case 'disboard': break;
        default: {
          const msg = await channel.send("Sorry, the command doesn't exist (perhaps you put a space inbetween the `!` and the `command`). Please type `!commands` to show all available commands.");
          logger.info(`Sent channel message: ${msg.id} - neverFapDeluxeBotCommands`);
          break;
        }
      }
    }
  } catch(error) {
    logger.error(`neverFapDeluxeBotCommands - ${error}`);
    throw new Error(`neverFapDeluxeBotCommands - ${error}`);
  }
}


module.exports = onMessage;