const {
  automatedMessageGeneral,
  automatedMessageAccountability,
} = require('../const/MESSAGE');

const {
  generateRandomNumber,
  sendMessageHelper,
  isLastMessageTheBot,
  fetchChannelMessagesHelper,
} = require('../util/util');

const onIntervalFiveMinutes = (client) => {
  return function (evt) {
    cleanUpNeverFapDeluxeBotPosts(client.channels);
  }
};
const onIntervalOneHour = (client) => {
  return function (evt) {
    generalChannelAutomatedMessages(client.channels);
  }
};
const onIntervalTwoHours = (client) => {
  return function (evt) {
    accountabilityChannelAutomatedMessages(client);
  }
};
const onIntervalDay = (client) => {
  return function (evt) {
    
  }
};

const cleanUpNeverFapDeluxeBotPosts = (channels) => {
  const FIVE_MINUTES = 1000 * 60 * 5;

  // I'm not too sure about this async function
  channels.forEach(async channel => {
    const channelMessages = await fetchChannelMessagesHelper(channel);

    channelMessages.forEach(message => {
      const messageIsAdvice = message.embeds.find(messageEmbed => messageEmbed.title === "#general advice" || messageEmbed.title === "#accountability advice");

      // Don't do anything is message is advice.
      if (messageIsAdvice) {
        console.log('messageIsAdvice', messageIsAdvice);
        return;
      }

      // TODO: NO IDEA IF THIS WORKS, AT ALL
      if ((new Date() - FIVE_MINUTES) < new Date(message.createdAt)) {
        deleteMessageHelper(message);
      }
    });
  });
};

const generalChannelAutomatedMessages = async (channels) => {
  const generalChannel = channels.get(process.env.GENERAL_CHANNEL_ID);
  const num = generateRandomNumber(0, 10);
  const lastMessageIsBot = await isLastMessageTheBot(generalChannel);
  if (lastMessageIsBot) return;
  
  switch(num) {
    case 0:  sendMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral1); break;
    case 1:  sendMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral2); break;
    case 2:  sendMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral3); break;
    case 3:  sendMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral4); break;
    case 4:  sendMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral5); break;
    case 5:  sendMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral6); break;
    case 6:  sendMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral7); break;
    case 7:  sendMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral8); break;
    case 8:  sendMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral9); break;
    case 9:  sendMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral10); break;
    // case 10: sendMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral11); break;
    // case 11: sendMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral12); break;
    // case 12: sendMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral13); break;
    // case 13: sendMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral14); break;
    // case 14: sendMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral15); break;
    // case 15: sendMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral16); break;
    default:
      throw new Error('generalChannelAutomatedMessages - generateRandomNumber - created an incorrect generator number')
  }
}

const accountabilityChannelAutomatedMessages = async (channels) => {
  const accountabilityChannel = channels.get(process.env.ACCOUNTABILITY_CHANNEL_ID);
  const num = generateRandomNumber(0, 1);
  const lastMessageIsBot = await isLastMessageTheBot(generalChannel);
  if (lastMessageIsBot) return;

  switch(num) {
    case 0: sendMessageHelper(accountabilityChannel, automatedMessageAccountability.automatedMessageGeneral1); break;
    case 1: sendMessageHelper(accountabilityChannel, automatedMessageAccountability.automatedMessageGeneral2); break;
  
    default:
      throw new Error('generalChannelAutomatedMessages - generateRandomNumber - created an incorrect generator number')
  }
}

module.exports = {
  onIntervalFiveMinutes,
  onIntervalOneHour,
  onIntervalTwoHours,
  onIntervalDay,
};
