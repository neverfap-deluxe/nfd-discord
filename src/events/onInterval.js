const automatedAccountabilityMessages = require('./onInterval/automatedAccountabilityMessages');
const automatedGeneralMessages = require('./onInterval/automatedGeneralMessages');
const hasNotPostedRecently = require('./onInterval/hasNotPostedRecently');
const removeBotMessages = require('./onInterval/removeBotMessages');
const theseUsersPostedToday = require('./onInterval/theseUsersPostedToday');
const sendYesterdayPostReminder = require('./onInterval/sendYesterdayPostReminder');

const onIntervalTenMinutes = (client, logger) => {
  return async function (/* evt */) {
    // const juliusReade = await client.fetchUser(process.env.JULIUS_READE_ID);
    removeBotMessages(client.channels, logger);
  }
};

const onIntervalOneHour = (client, logger) => {
  return async function (/* evt */) {
    const juliusReade = await client.fetchUser(process.env.JULIUS_READE_ID);
    sendYesterdayPostReminder(client, logger, juliusReade);
    theseUsersPostedToday(client, logger, juliusReade);
  }
};

// TODO: Introduction Format
// Name:
// What triggers you to relapse: 
// How long have you been a victim: 
// Introduction: Is there anything else you want us to know about you

const onIntervalFourHours = (client, logger) => {
  return async function (/* evt */) {
    const juliusReade = await client.fetchUser(process.env.JULIUS_READE_ID);
    automatedGeneralMessages(client, logger, juliusReade);
  }
};

const onIntervalFiveHours = (client, logger) => {
  return async function (/* evt */) {
    const juliusReade = await client.fetchUser(process.env.JULIUS_READE_ID);
    automatedAccountabilityMessages(client, logger, juliusReade);
    // automatedEmergencyMessages(client);
    // automatedRelapseMessages(client);
  }
};

const onIntervalDayHalf = (client, logger) => {
  return async function (/* evt */) {
    const juliusReade = await client.fetchUser(process.env.JULIUS_READE_ID);
    hasNotPostedRecently(client, logger, juliusReade);
  }
};

const onIntervalDay = (client, logger) => {
  return async function (/* evt */) {
    // const juliusReade = await client.fetchUser(process.env.JULIUS_READE_ID);
  }
};

const onIntervalWeek = (/* client */) => {
  return async function (/* evt */) {
    // const juliusReade = await client.fetchUser(process.env.JULIUS_READE_ID);

  }
};

module.exports = {
  onIntervalTenMinutes,
  onIntervalOneHour,
  onIntervalFourHours,
  onIntervalFiveHours,
  onIntervalDayHalf,
  onIntervalDay,
  onIntervalWeek,
};
