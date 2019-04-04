const { welcomeMessage } = require('../const/MESSAGE');

const onGuildMemberAdd = (/* client */) => {
  return function(member) {
    try {
      const channel = member.guild.channels.find(ch => ch.id === process.env.WELCOME_CHANNEL_ID);
      sendMessageHelper(channel, `Welcome to the server, ${member}!`);
      sendMessageHelper(member, welcomeMessage);
    } catch(error) {
      throw new Error(`${error} - Could not send onGuildMemberAdd message.`);     
    }
  }
}

module.exports = onGuildMemberAdd;

