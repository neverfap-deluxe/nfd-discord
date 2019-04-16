const welcomeMessage = (accountabilityChannel) => `Thank you for joining the NeverFap Deluxe Discord Channel!\n
Chances are that you're here to participate in our ${accountabilityChannel} program. In that case, please read the ${accountabilityChannel} rules by typing \`!accountability\` into the message bar and pressing enter.\n
These rules are super important, and I will be working with you to ensure that you understand and follow them! Although we're a fun bunch, this is also a very serious program and our focus is to help you overcome porn addiction.\n
To get started, please type \`!accountability\` into this direct chat and press enter, to learn all about the wonderful world of ${accountabilityChannel} ^^.
`;

const onGuildMemberAdd = (client, logger) => {
  return async function(member) {
    const channel = member.guild.channels.find(ch => ch.id === process.env.WELCOME_CHANNEL_ID);
    const accountabilityChannel = member.guild.channels.find(ch => ch.id === process.env.ACCOUNTABILITY_CHANNEL_ID);

    try {
      const msg = await channel.send(`Welcome to the server, ${member}!`);
      logger.info(`Sent channel message: ${msg.id} - onGuildMemberAdd - welcome channel message`);
      const msg2 = await member.send(welcomeMessage(accountabilityChannel));
      logger.info(`Sent channel message: ${msg2.id} - onGuildMemberAdd - welcome user message`);
    } catch(error) {
      logger.error(`send message - ${error} - onGuildMemberAdd`);
      throw new Error(`send message - ${error} - onGuildMemberAdd`);
    }
  }
}

module.exports = onGuildMemberAdd;

