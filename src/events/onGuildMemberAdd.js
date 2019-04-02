const { introductionMessage } = require('../const/MESSAGE');
const { WELCOME_CHANNEL_ID, WELCOME_CHANNEL_TEST } = require('../const/CHANNEL');

const onGuildMemberAdd = (/* client */) => {
  return function(member) {
    try {
      const channel = member.guild.channels.find(ch => ch.id === WELCOME_CHANNEL_ID);
      sendChannelMessageHelper(channel, `Welcome to the server, ${member}!`);
      sendDirectMessageHelper(member, introductionMessage);
    } catch(error) {
      throw new Error(`${error} - Could not send onGuildMemberAdd message.`);     
    }
  }
}

module.exports = onGuildMemberAdd;

