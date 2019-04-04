const {
  RULES_COMMAND,
  METHOD_COMMAND,
  COMMANDS_COMMAND,
  CHANNELS_COMMAND,
  ACCOUNTABILITY_COMMAND,
  CHEATSHEET_COMMAND,
  EMERGENCY_COMMAND,
  // PROGRESS_COMMAND,
} = require('../const/COMMAND');

const {
  rulesMessage,
  methodMessage,
  commandListMessage,
  channelListMessage,
  cheatsheetMessage,
  accountabilityMessage,
  emergencyMessage,
} = require('../const/MESSAGE');

const {
  sendChannelMessageHelper,
  sendDirectMessageHelper,
} = require('../util/util');

const {
  whenMessageAccountabilityChannel
} = require('../eventsWhen/onMessageWhenAccountabilityChannel');

const onMessage = (client) => {
  return function (message) {
    const channel = message.channel;
    const messageContent = message.content;
    // const discordUser = message.user;
    const author = message.author;
   
    // const dbUser = getDbUserOtherwiseCreate(discordUser);
  
    if (channel.id === process.env.ACCOUNTABILITY_CHANNEL_ID) {
      // whenMessageAccountabilityChannel(message, channel, discordUser, author, dbUser)
    }

    if (messageContent.substring(0, 1) == '!') {
      const args = messageContent.substring(1).split(' ');
      const cmd = args[0];
    
      switch(cmd) {
        case RULES_COMMAND:
          sendChannelMessageHelper(channel, rulesMessage);
          break;
        case METHOD_COMMAND:
          sendChannelMessageHelper(channel, methodMessage);
          break;
        case COMMANDS_COMMAND:
          sendChannelMessageHelper(channel, commandListMessage);
          break;
        case CHANNELS_COMMAND: 
          sendChannelMessageHelper(channel, channelListMessage);
          break;
        case ACCOUNTABILITY_COMMAND:
          sendChannelMessageHelper(channel, accountabilityMessage);
          break;
        case CHEATSHEET_COMMAND:
          sendChannelMessageHelper(channel, cheatsheetMessage);
          break;
        case EMERGENCY_COMMAND: 
          sendChannelMessageHelper(channel, emergencyMessage);
          break;
        default:
          sendChannelMessageHelper(channel, "Sorry, the command doesn't exist. Please type `!commands` to show all available commands."); 
          break;
       }
    }
  }
}


module.exports = onMessage;