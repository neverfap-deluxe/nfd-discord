const {
  ACCOUNTABILITY_CHANNEL_ID,
  WELCOME_CHANNEL_ID,
  GENERAL_CHANNEL_ID,
  LOLFAP_CHANNEL_ID,
  UPDATES_CHANNEL_ID,
} = require('../const/CHANNEL');

const {
  // INFO_COMMAND,
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
  sendChannelMessageHelper,
} = require('../util/util');

const {
  whenMessageAccountabilityChannel
} = require('../eventsWhen/onMessageWhenAccountabilityChannel');

const onMessage = (client) => {
  return function (message) {
    const channel = message.channel;
    const messageContent = message.content;
    // const discordUser = message.user;
    // const member = message.member;
   
    // const dbUser = getDbUserOtherwiseCreate(discordUser);
    // const dbUser = 'cake';
  
    if (channel.id === ACCOUNTABILITY_CHANNEL_ID) {
      // whenMessageAccountabilityChannel(message, channel, discordUser, member, dbUser)
    }

    if (messageContent.substring(0, 1) == '!') {
      const args = messageContent.substring(1).split(' ');
      const cmd = args[0];
    
      switch(cmd) {
        // case INFO_COMMAND: sendChannelMessageHelper(channel, infoMessage); break;
        case HELP_COMMAND: sendChannelMessageHelper(channel, welcomeMessage); break;
        case CHANNELS_COMMAND: sendChannelMessageHelper(channel, channelListMessage); break;
        // case ACCOUNTABILITY_COMMAND:
        // case CHEATSHEET_COMMAND:
        case EMERGENCY_COMMAND: sendChannelMessageHelper(channel, emergencyMessage); break;
        // case PROGRESS_COMMAND:
        default: sendChannelMessageHelper(channel, "Sorry, the command doesn't exist!"); break;
        
       }
    }
  }
}


module.exports = onMessage;