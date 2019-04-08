const {
  RULES_COMMAND,
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
  commandListMessage,
  channelListMessage,
  cheatsheetMessage,
  accountabilityMessage,
  accountabilityExampleMessage,
  emergencyMessage,
} = require('../const/MESSAGE');

const {
  sendMessageHelper,
  isAccountabilityMessage,
} = require('../util/util');

const onMessage = (client) => {
  return function (message) {
    const channel = message.channel;
    const messageContent = message.content;
    const discordUser = message.user;
    const author = message.author;

    // TODO figure out this function.
    // const dbUser = getDbUserOtherwiseCreate(discordUser);
    const dbUser = 'smith';
  
    if (channel.id === process.env.ACCOUNTABILITY_CHANNEL_ID) {
      if (isAccountabilityMessage(message.content)) {
        if (process.env.VALIDATE_ACCOUNTABILITY_POSTS === "true") {
          validateAccountabilityPost(channel);
        }
        if (process.env.ADD_MESSAGE_TO_DATABASE === "true") {
          addMessageToDatabase(discordUser, dbUser, message);
        }
        if (process.env.SEND_TOTAL_ACCOUNTABILITY_MESSAGES_ENCOURAGEMENT === "true") {
          sendTotalAccountabiltyMessagesEncouragement(discordUser, dbUser, message);
        }
      }
    }

    const accountabilityChannel = client.channels.get(process.env.ACCOUNTABILITY_CHANNEL_ID);

    if (messageContent.substring(0, 1) == '!') {
      const args = messageContent.substring(1).split(' ');
      const cmd = args[0];
    
      switch(cmd) {
        case RULES_COMMAND:
          sendMessageHelper(channel, rulesMessage(accountabilityChannel));
          break;
        case COMMANDS_COMMAND:
          sendMessageHelper(channel, commandListMessage);
          break;
        case CHANNELS_COMMAND:
          sendMessageHelper(channel, channelListMessage);
          break;
        case ACCOUNTABILITY_COMMAND:
          sendMessageHelper(channel, accountabilityMessage(accountabilityChannel));
          break;
        case ACCOUNTABILITY_EXAMPLE_COMMAND:
          sendMessageHelper(channel, accountabilityExampleMessage(accountabilityChannel));
          break;
        case CHEATSHEET_COMMAND:
          sendMessageHelper(channel, cheatsheetMessage);
          break;
        // case EMERGENCY_COMMAND:
        //   sendMessageHelper(channel, emergencyMessage);
        //   break;
        default:
          sendMessageHelper(channel, "Sorry, the command doesn't exist (perhaps you put a space inbetween the `!` and the `command`). Please type `!commands` to show all available commands."); 
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
  const finalChannelMessage = `Your post needs to include ${toImproveChannelMessage} section/header. If you need an example of what it should look like please type !${ACCOUNTABILITY_EXAMPLE_COMMAND} and press enter.`; // ${finalChannelAndMessage} ${healthyCopingMechanismChannelMessage}
  
  const finalEditMessage = "\n" + /* healthyCopingMechanismWarningMessage + "\n" + */ toImproveWarningMessage + "\n" + "# Please add these sections!";
  
  if (!doesContainToImproveRegEx /* || !doesContainHealthyCopingMechanismRegEx */) {
    sendMessageHelper(channel, `${messageAuthor} ${finalChannelMessage}`);
    editChannelMessageHelper(message, `${message.content} ${finalEditMessage}`);
  }
}

const addMessageToDatabase = async (discordUser, dbUser, message) => {

  // update user. 
  await DbUser.query().insert({ 
    last_accountability_message_date: message.createdAt,
    total_accountability_messages: "todo",
  });

  await AccountabilityMessage.query().insert({ 
    discord_id: discordUser.id,
    content: message.content, 
  });
}

const sendTotalAccountabiltyMessagesEncouragement = (dbUser) => {

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


module.exports = onMessage;