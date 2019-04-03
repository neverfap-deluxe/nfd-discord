const { introductionMessage } = require('../const/MESSAGE');

const onGuildMemberAdd = (/* client */) => {
  return function(member) {
    try {
      const channel = member.guild.channels.find(ch => ch.id === process.env.WELCOME_CHANNEL_ID);
      sendChannelMessageHelper(channel, `Welcome to the server, ${member}!`);
      sendDirectMessageHelper(member, introductionMessage);
    } catch(error) {
      throw new Error(`${error} - Could not send onGuildMemberAdd message.`);     
    }
  }
}

module.exports = onGuildMemberAdd;

