const { welcomeMessage, welcomeMessageTwo } = require('../const/MESSAGE');

const onGuildMemberAdd = (/* client */) => {
  return function(member) {
    const channel = member.guild.channels.find(ch => ch.id === process.env.WELCOME_CHANNEL_ID);
    const accountabilityChannel = member.guild.channels.find(ch => ch.id === process.env.ACCOUNTABILITY_CHANNEL_ID);

    channel.send(`Welcome to the server, ${member}!`)
      .then(message => {
        console.log(`Sent channel message: ${message}`);
        member.send(welcomeMessageTwo(accountabilityChannel))
        .then(message => {
          console.log(`Sent channel message: ${message}`);
          // member.send(welcomeMessageTwo)
          // .then(message => {
          //   console.log(`Sent channel message: ${message}`);
  
          // })
          // .catch(console.error);  
        })
        .catch(console.error);  
      })
      .catch(console.error);
  }
}

module.exports = onGuildMemberAdd;

