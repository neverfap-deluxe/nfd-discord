const welcomeMessageUser = (accountabilityChannel) => `Thank you for joining the NeverFap Deluxe Discord Channel!\n
Chances are that you're here to participate in our ${accountabilityChannel} program. In that case, please read the ${accountabilityChannel} rules by typing \`!accountability\` into the message bar and pressing enter.\n
These rules are super important, and I will be working with you to ensure that you understand and follow them! Although we're a fun bunch, this is also a very serious program and our focus is to help you overcome porn addiction.\n
In addition, please check out the website if you have not yet had the chance. The homepage along with the guide, will explain 90% of what you need to know to overcome your porn addiction https://neverfapdeluxe.com/\n
To get started, please type \`!accountability\` into this direct chat and press enter, to learn more about the wonderful world of ${accountabilityChannel} ^^.\n
`;

const welcomeMessageChannel = (member, welcomeChannel) => 
`Welcome to the server, ${member}! :grin:\n
Feel free to introduce yourself to everyone in ${welcomeChannel}!\n
- Who you are?\n
- How long have you been victim?\n
- What are your triggers?\n
- Anything else you'd like to share! :sweat_smile:
`;


// YO
// DUDE
// WELCOME TO NEVERFAP
// HERE WE NEVERFAP (HENCE THE TITLE)
// IF YOU DO
// WE KILL YOU
// Jk
// !accountability


const onGuildMemberAdd = (client, logger) => {
  return async function(member) {
    try {
      const welcomeChannel = member.guild.channels.find(ch => ch.id === process.env.WELCOME_CHANNEL_ID);
      const accountabilityChannel = member.guild.channels.find(ch => ch.id === process.env.ACCOUNTABILITY_CHANNEL_ID);
      
      const msg = await welcomeChannel.send(welcomeMessageChannel(member, welcomeChannel));
      logger.info(`Sent channel message: ${msg.id} - onGuildMemberAdd - welcome channel message`);
      const msg2 = await member.send(welcomeMessageUser(accountabilityChannel));
      logger.info(`Sent channel message: ${msg2.id} - onGuildMemberAdd - welcome user message`);
    } catch(error) {
      logger.error(`send message - ${error} - onGuildMemberAdd`);
      throw new Error(`send message - ${error} - onGuildMemberAdd`);
    }
  }
}

module.exports = onGuildMemberAdd;

