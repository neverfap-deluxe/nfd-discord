const automatedAccountabilityMessages = require('./onInterval/automatedAccountabilityMessages');
const automatedGeneralMessages = require('./onInterval/automatedGeneralMessages');
const hasUserPostedRecently = require('./onInterval/hasUserPostedRecently');
const removeBotMessages = require('./onInterval/removeBotMessages');
// const theseUsersPostedToday = require('./onInterval/theseUsersPostedToday');

const onIntervalTenMinutes = (client, logger) => {
  return function (/* evt */) {
    removeBotMessages(client.channels, logger);
  }
};

const onIntervalFourHours = (client, logger) => {
  return function (/* evt */) {
    automatedGeneralMessages(client, logger);
  }
};

const onIntervalFiveHours = (client, logger) => {
  return function (/* evt */) {
    automatedAccountabilityMessages(client, logger);
    // automatedEmergencyMessages(client);
    // automatedRelapseMessages(client);
  }
};

const onIntervalDayHalf = (client, logger) => {
  return function (/* evt */) {
    hasUserPostedRecently(client, logger);
  }
};

const onIntervalDay = (/* client, logger */) => {
  return function (/* evt */) {
    // const juliusReade = await client.fetchUser(process.env.JULIUS_READE_ID);        
    // theseUsersPostedToday(client, juliusReade);
  }
};

const onIntervalWeek = (/* client */) => {
  return function (/* evt */) {
  }
};

module.exports = {
  onIntervalTenMinutes,
  onIntervalFourHours,
  onIntervalFiveHours,
  onIntervalDayHalf,
  onIntervalDay,
  onIntervalWeek,
};
