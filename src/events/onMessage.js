const {
  RULES_COMMAND,
  METHOD_COMMAND,
  COMMANDS_COMMAND,
  CHANNELS_COMMAND,
  ACCOUNTABILITY_COMMAND,
  ACCOUNTABILITY_EXAMPLE_COMMAND,
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
  accountabilityExampleMessage,
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
      validateAccountabilityPost(channel);
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
        case ACCOUNTABILITY_EXAMPLE_COMMAND:
          sendChannelMessageHelper(channel, accountabilityExampleMessage);
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


const validateAccountabilityPost = (message) => {
  const messageAuthor = message.author;
 
  const toImproveRegEx = new RegExp("to improve", "i");
  const doesContainToImproveRegEx = toImproveRegEx.test(message.content);
  const toImproveWarningMessage = doesContainToImproveRegEx ? "" : "# Missing 'To Improve' section.";
  const toImproveChannelMessage = doesContainToImproveRegEx ? "" : "a 'To Improve'";
 
  // const healthyCopingMechanismRegEx = new RegExp("healthy coping mechanisms", "i");
  // const doesContainHealthyCopingMechanismRegEx = healthyCopingMechanismRegEx.test(message.content);
  // const healthyCopingMechanismWarningMessage = doesContainHealthyCopingMechanismRegEx ? "" : "# Missing 'Healthy Coping Mechanisms' section.";
  // const healthyCopingMechanismChannelMessage = doesContainHealthyCopingMechanismRegEx ? "" : "a Healthy Coping Mechanisms.";
 
  // const finalChannelAndMessage = !doesContainToImproveRegEx && !doesContainHealthyCopingMechanismRegEx ? "" : "and";
  const finalChannelMessage = `Your post needs to include ${toImproveChannelMessage} section. If you need an example of what it should look like please type !${ACCOUNTABILITY_EXAMPLE_COMMAND} and send.`; // ${finalChannelAndMessage} ${healthyCopingMechanismChannelMessage}
 
  const finalEditMessage = "\n" /* + healthyCopingMechanismWarningMessage + "\n" */ + toImproveWarningMessage + "\n" + "# Please add these sections!";
 
  if (!doesContainToImproveRegEx /* || !doesContainHealthyCopingMechanismRegEx */) {
    sendChannelMessageHelper(channel, `${messageAuthor} ${finalChannelMessage}`);
    editChannelMessageHelper(message, `${message.content} ${finalEditMessage}`);
  }
 }


module.exports = onMessage;