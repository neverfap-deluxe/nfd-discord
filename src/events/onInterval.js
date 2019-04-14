const automatedAccountabilityMessages = require('./onInterval/automatedAccountabilityMessages');
const automatedGeneralMessages = require('./onInterval/automatedGeneralMessages');
const hasUserPostedRecently = require('./onInterval/hasUserPostedRecently');
const removeBotMessages = require('./onInterval/removeBotMessages');

const onIntervalTenMinutes = (client) => {
  return function (/* evt */) {
    removeBotMessages(client.channels);
  }
};
const onIntervalFourHours = (client) => {
  return function (/* evt */) {
    // automatedGeneralMessages(client);
  }
};
const onIntervalFiveHours = (client) => {
  return function (/* evt */) {
    automatedAccountabilityMessages(client);
  }
};

const onIntervalDayHalf = (client) => {
  return function (/* evt */) {
    hasUserPostedRecently(client);
  }
};

const onIntervalDay = (/* client */) => {
  return function (/* evt */) {
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
