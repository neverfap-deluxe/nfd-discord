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
  sendMessageHelper,
} = require('../util/util');

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
          sendMessageHelper(channel, rulesMessage);
          break;
        case METHOD_COMMAND:
          sendMessageHelper(channel, methodMessage);
          break;
        case COMMANDS_COMMAND:
          sendMessageHelper(channel, commandListMessage);
          break;
        case CHANNELS_COMMAND: 
          sendMessageHelper(channel, channelListMessage);
          break;
        case ACCOUNTABILITY_COMMAND:
          sendMessageHelper(channel, accountabilityMessage);
          break;
        case ACCOUNTABILITY_EXAMPLE_COMMAND:
          sendMessageHelper(channel, accountabilityExampleMessage);
          break;
        case CHEATSHEET_COMMAND:
          sendMessageHelper(channel, cheatsheetMessage);
          break;
        case EMERGENCY_COMMAND: 
          sendMessageHelper(channel, emergencyMessage);
          break;
        default:
          sendMessageHelper(channel, "Sorry, the command doesn't exist. Please type `!commands` to show all available commands."); 
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
    sendMessageHelper(channel, `${messageAuthor} ${finalChannelMessage}`);
    editChannelMessageHelper(message, `${message.content} ${finalEditMessage}`);
  }
}


const whenMessageAccountabilityChannel = async (message, channel, discordUser, member, dbUser) => {
  const doesMessageContainAccountabilityHash = message.content.includes("#accountability");
  const isFirstMessageForToday = dbUser.accountabilityMessages.filter();

  if (doesMessageContainAccountabilityHash && isFirstMessageForToday) {
    const newAccountabilityMessage = await AccountabilityMessage.query().insert({ discordId: discordUser.id });

    // const updatedDbUser = 

    currentAccountabilityStreakConsequences(updatedDbUser);
    totalAccountabilityConsequences(updatedDbUser);
  }

}

const currentAccountabilityStreakConsequences = (dbUser) => {
  switch(dbUser.currentAccountabilityStreak) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 10:
    case 14:
    case 21:
    case 28:
    case 35:
    case 42:
    case 49:
  } 
}

const totalAccountabilityConsequences = () => {
  switch(dbUser.currentAccountabilityStreak) {
    case 1:
    case 10:
    case 20:
    case 30:
    case 40:
    case 50:
    case 60:
    case 70:
  }
}


module.exports = onMessage;