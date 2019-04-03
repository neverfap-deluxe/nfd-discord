const {
  ACCOUNTABILITY_CHANNEL_ID,
  WELCOME_CHANNEL_ID,
  GENERAL_CHANNEL_ID,
  LOLFAP_CHANNEL_ID,
  UPDATES_CHANNEL_ID,
  EMERGENCY_CHANNEL_ID,

  WELCOME_CHANNEL_TEST_ID,
  GENERAL_CHANNEL_TEST_ID,
  ACCOUNTABILITY_CHANNEL_TEST_ID,
  LOLFAP_CHANNEL_TEST_ID,
  ANNOUNCEMENT_CHANNEL_TEST_ID,
  EMERGENCY_CHANNEL_TEST_ID,
} = require('../const/CHANNEL');

const {
  automatedMessageGeneral,
  automatedMessageAccountability,
} = require('../const/MESSAGE');

const {
  generateRandomNumber,
  sendChannelMessageHelper,
  isLastMessageTheBot,
} = require('../util/util');

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
const generalChannelAutomatedMessages = async (channels) => {
  const generalChannel = channels.get(GENERAL_CHANNEL_TEST_ID);
  const num = generateRandomNumber(0, 10);
  const lastMessageIsBot = await isLastMessageTheBot(generalChannel);
  if (lastMessageIsBot) return;
  
  switch(num) {
    case 0:  sendChannelMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral1); break;
    case 1:  sendChannelMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral2); break;
    case 2:  sendChannelMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral3); break;
    case 3:  sendChannelMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral4); break;
    case 4:  sendChannelMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral5); break;
    case 5:  sendChannelMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral6); break;
    case 6:  sendChannelMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral7); break;
    case 7:  sendChannelMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral8); break;
    case 8:  sendChannelMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral9); break;
    case 9:  sendChannelMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral10); break;
    // case 10: sendChannelMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral11); break;
    // case 11: sendChannelMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral12); break;
    // case 12: sendChannelMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral13); break;
    // case 13: sendChannelMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral14); break;
    // case 14: sendChannelMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral15); break;
    // case 15: sendChannelMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral16); break;
    default:
      throw new Error('generalChannelAutomatedMessages - generateRandomNumber - created an incorrect generator number')
  }
}

const accountabilityChannelAutomatedMessages = async (channels) => {
  const accountabilityChannel = channels.get(ACCOUNTABILITY_CHANNEL_TEST_ID);
  const num = generateRandomNumber(0, 1);
  const lastMessageIsBot = await isLastMessageTheBot(generalChannel);
  if (lastMessageIsBot) return;

  switch(num) {
    case 0: sendChannelMessageHelper(accountabilityChannel, automatedMessageAccountability.automatedMessageGeneral1); break;
    case 1: sendChannelMessageHelper(accountabilityChannel, automatedMessageAccountability.automatedMessageGeneral2); break;
  
    default:
      throw new Error('generalChannelAutomatedMessages - generateRandomNumber - created an incorrect generator number')
  }
}

module.exports = {
  onIntervalOneHour,
  onIntervalTwoHours,
  onIntervalDay,
};
