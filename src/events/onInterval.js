const automatedAccountabilityMessages = require('./onInterval/automatedMessages/automatedAccountabilityMessages');
const automatedGeneralMessages = require('./onInterval/automatedMessages/automatedGeneralMessages');
const hasNotPostedRecently = require('./onInterval/hasNotPostedRecently');
const removeBotMessages = require('./onInterval/removeBotMessages');
const dailyNeverFapDeluxeReport = require('./onInterval/dailyNeverFapDeluxeReport');
const theseUsersPostedToday = require('./cron/theseUsersPostedToday');
// const userReactedToYourAccountabilityPost = require('./onInterval/userReactedToYourAccountabilityPost');
// const updateContentChannels = require('./onInterval/updateContentChannels');

const onIntervalTenMinutes = (client, logger) => {
  return async function (/* evt */) {
    const juliusReade = await client.fetchUser(process.env.JULIUS_READE_ID);
    removeBotMessages(client.channels, logger);

    // NOTE: Purely for testing.
    if (process.env.MODE === 'dev') {
      theseUsersPostedToday(client, logger, juliusReade);
      // const accountabilityChannel = client.channels.get(process.env.ACCOUNTABILITY_CHANNEL_ID);

      // const emoji = client.emojis.find(emoji => emoji.name === 'doge');

      // const message = `${emoji}`;
      // await accountabilityChannel.send(message);
    }
  }
};

const onIntervalOneHour = (client, logger) => {
  return async function (/* evt */) {
    const juliusReade = await client.fetchUser(process.env.JULIUS_READE_ID);
    dailyNeverFapDeluxeReport(client, logger, juliusReade);
    // TODO: Implement this functionality.
    // userReactedToYourAccountabilityPost(client, logger, juliusReade).
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
    // updateContentChannels(client, logger, juliusReade);
  }
};

const onIntervalDay = (/* client, logger */) => {
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
