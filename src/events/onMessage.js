const {
  ACCOUNTABILITY_CHANNEL_ID,
  WELCOME_CHANNEL_ID,
  GENERAL_CHANNEL_ID,
  LOLFAP_CHANNEL_ID,
  UPDATES_CHANNEL_ID,
} = require('../const/CHANNEL');

const {
  INFO_COMMAND,
  HELP_COMMAND,
  CHANNELS_COMMAND,
  ACCOUNTABILITY_COMMAND,
  CHEATSHEET_COMMAND,
  EMERGENCY_COMMAND,
  // PROGRESS_COMMAND,
} = require('../const/COMMAND');

const {
  infoMessage,
  welcomeMessage,
  commandListMessage,
  channelListMessage,
  emergencyMessage,
} = require('../const/MESSAGE');

const {
  sendMessageHelper,
} = require('../util/util');

const {
  whenMessageAccountabilityChannel
} = require('../eventsWhen/onMessageWhenAccountabilityChannel');

const onMessage = (client, logger) => {
  return function (message) {
    const channel = message.channel;
    // const discordUser = message.user;
    // const member = message.member;
   
    // const dbUser = getDbUserOtherwiseCreate(discordUser);
    // const dbUser = 'cake';
  
    neverFapDeluxeBotCommands(client, channel.id, message);

    if (channel.id === ACCOUNTABILITY_CHANNEL_ID) {
      // whenMessageAccountabilityChannel(message, channel, discordUser, member, dbUser)
    }

    if (channel.id === WELCOME_CHANNEL_ID) {

    }

    if (channel.id === GENERAL_CHANNEL_ID) {

    }

    if (channel.id === LOLFAP_CHANNEL_ID) {

    }

    if (channel.id === UPDATES_CHANNEL_ID) {

    }
  }
}

const neverFapDeluxeBotCommands = (client, channelId, message) => {
  if (message.substring(0, 1) == '!') {
    const args = message.substring(1).split(' ');
    const cmd = args[0];
  
    switch(cmd) {
      case INFO_COMMAND: sendMessageHelper(channelId, infoMessage); break;
      case HELP_COMMAND: sendMessageHelper(channelId, welcomeMessage); break;
      case CHANNELS_COMMAND: sendMessageHelper(channelId, channelListMessage); break;
      // case ACCOUNTABILITY_COMMAND:
      // case CHEATSHEET_COMMAND:
      case EMERGENCY_COMMAND: sendMessageHelper(channelId, emergencyMessage); break;
      // case PROGRESS_COMMAND:
      default: sendMessageHelper(channelId, "Sorry, the command doesn't exist!"); break;
      
     }
  }  
}


module.exports = onMessage;