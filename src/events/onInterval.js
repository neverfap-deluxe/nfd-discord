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
    // const juliusReade = await client.fetchUser(process.env.JULIUS_READE_ID);
    // sendYesterdayPostReminder(client, logger, juliusReade);
  }
};

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
    const juliusReade = await client.fetchUser(process.env.JULIUS_READE_ID);
    theseUsersPostedToday(client, logger, juliusReade);
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
