const {
  ACCOUNTABILITY_CHANNEL_ID,
  WELCOME_CHANNEL_ID,
  GENERAL_CHANNEL_ID,
  LOLFAP_CHANNEL_ID,
  UPDATES_CHANNEL_ID,
} = require('../const');

const {
  whenMessageAccountabilityChannel
} = require('../eventsWhen/onMessageWhenAccountabilityChannel');

const onMessage = (client, logger) => {
  return function (message) {
    const channel = message.channel;
    const discordUser = message.user;
    const member = message.member;
   
    const dbUser = getDbUserOtherwiseCreate(discordUser);
  
    if (channel.id === ACCOUNTABILITY_CHANNEL_ID) {
      whenMessageAccountabilityChannel(message, channel, discordUser, member, dbUser)
    }

    if (channel.id === WELCOME_CHANNEL_ID) {

    }

    if (channel.id === GENERAL_CHANNEL_ID) {

    }

    if (channel.id === LOLFAP_CHANNEL_ID) {

    }

    if (channel.id === UPDATES_CHANNEL_ID) {

    }
  
    // client.sendMessage({
    //   to: channelID,
    //   message: 'Pong!'
    // });
  }
}

module.exports = onMessage;