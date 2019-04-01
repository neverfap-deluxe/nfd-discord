const { introductionMessage } = require('../const/messages');
const {
  WELCOME_CHANNEL_ID,
  // GENERAL_CHANNEL_ID,
  // ACCOUNTABILITY_CHANNEL_ID,
  // LOLFAP_CHANNEL_ID,
  // ANNOUNCEMENT_CHANNEL_ID,
  // EMERGENCY_CHANNEL_ID,
} = require('../const/channels');

const onGuildMemberAdd = (/* client */) => {
  return function(member) {
    try {
      const channel = member.guild.channels.find(ch => ch.id === WELCOME_CHANNEL_ID);
      channel.send(`Welcome to the server, ${member}!`);
      member.createDM(introductionMessage);
    } catch(error) {
      throw new Error(`${error} - Could not send error message.`);     
    }
  }
}

module.exports = onGuildMemberAdd;

