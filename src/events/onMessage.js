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
  // EMERGENCY_COMMAND,
  // PROGRESS_COMMAND,
} = require('../const/COMMAND');

const {
  rulesMessage,
  commandListMessage,
  channelListMessage,
  cheatsheetMessage,
  accountabilityMessage,
  accountabilityExampleMessage,
  // emergencyMessage,
} = require('../const/MESSAGE');

const {
  sendMessageHelper,
  isAccountabilityMessage,
} = require('../util/util');

const validateAccountabilityPost = require('./onMessage/validateAccountabilityPost');
const insertAccountabilityMessage = require('./onMessage/insertAccountabilityMessage');

const onMessage = (client, twitterClient, redditClient) => {
  return async function (message) {
    const channel = _.get(message, 'channel');
    const messageContent = _.get(message, 'content');
    const discordUser = _.get(message, 'author');

    if (channel && discordUser) {
      try {
        const dbUser = await knex('db_users').where('discord_id', discordUser.id).first();

        if (dbUser) {
          accountabilityChannelActions(client, dbUser, discordUser, channel, message, twitterClient, redditClient);
          neverFapDeluxeBotCommands(client, channel, messageContent);
        } else {
          const primary_id = uuidv4();
          const createdDbUser = await knex('db_users').returning('*').insert({ id: primary_id, discord_id: discordUser.id });
          accountabilityChannelActions(client, createdDbUser[0], discordUser, channel, message, twitterClient, redditClient);
          neverFapDeluxeBotCommands(client, channel, messageContent);
        }
      } catch(error) {
        throw new Error(`onMessage - ${error}`);
      }  
    }
  }
}

const accountabilityChannelActions = async (client, db_user, discordUser, channel, message, twitterClient, redditClient) => {
  if (channel.id === process.env.ACCOUNTABILITY_CHANNEL_ID) {
    if (isAccountabilityMessage(message.content)) {
      const today = moment().format();
      const sixteenHoursBefore =  process.env.MODE === 'dev' ? (
        moment().subtract(100, 'seconds')
      ) : (
        moment().subtract(16, 'hours')
      );
    
      const lastAccountabilityMessage = await knex('accountability_messages').where('db_users_id', db_user.id).whereBetween('created_at', [sixteenHoursBefore, today]);
      
      if (lastAccountabilityMessage.length === 0) {
        // NOTE: I still need to figure out how to co-incide this exactly with
        validateAccountabilityPost(client, db_user, discordUser, channel, message, twitterClient, redditClient);
        insertAccountabilityMessage(client, db_user, discordUser, message, twitterClient, redditClient);
      }
    }
  }
}

const neverFapDeluxeBotCommands = (client, channel, messageContent) => {
  const accountabilityChannel = client.channels.get(process.env.ACCOUNTABILITY_CHANNEL_ID);

  if (messageContent.substring(0, 1) == '!') {
    const args = messageContent.substring(1).split(' ');
    const cmd = args[0];
  
    switch(cmd) {
      case HELP_COMMAND:
      case RULES_COMMAND: sendMessageHelper(channel, rulesMessage(accountabilityChannel), 'neverFapDeluxeBotCommands'); break;
      case COMMANDS_COMMAND: sendMessageHelper(channel, commandListMessage, 'neverFapDeluxeBotCommands'); break;
      case CHANNELS_COMMAND: sendMessageHelper(channel, channelListMessage, 'neverFapDeluxeBotCommands'); break;
      case ACCOUNTABILITY_COMMAND: sendMessageHelper(channel, accountabilityMessage(accountabilityChannel), 'neverFapDeluxeBotCommands'); break;
      case ACCOUNTABILITY_EXAMPLE_COMMAND: sendMessageHelper(channel, accountabilityExampleMessage(accountabilityChannel), 'neverFapDeluxeBotCommands'); break;
      case CHEATSHEET_COMMAND: sendMessageHelper(channel, cheatsheetMessage, 'neverFapDeluxeBotCommands'); break;
      // case EMERGENCY_COMMAND: sendMessageHelper(channel, emergencyMessage, 'neverFapDeluxeBotCommands'); break;
      default:
        sendMessageHelper(channel, "Sorry, the command doesn't exist (perhaps you put a space inbetween the `!` and the `command`). Please type `!commands` to show all available commands.", 'neverFapDeluxeBotCommands');
        break;
    }
  }
}


module.exports = onMessage;