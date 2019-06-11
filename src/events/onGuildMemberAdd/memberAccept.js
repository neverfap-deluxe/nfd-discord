const welcomeMessageUser = (accountabilityChannel) => `Thank you for joining the NeverFap Deluxe Discord Channel!\n
Before participating it is mandatory that you read the NeverFap Deluxe website! The homepage and guide should explain 90% of what this server is about! https://neverfapdeluxe.com/\n
Next up is our ${accountabilityChannel} program which is most likely why you're here! Please enter \`!accountability\` into this direct chat to understand the rules of how it all works! :heart:\n
Lastly, feel free to send \`Julius Reade\` a private message to as he is the creator of this program, and is MORE THAN HAPPY to help you with your journey! :peach: :grapes: :cherries:\n
...aaaaaand that's about it! Have fun and enjoy your stay ^^.\n
In order to join this server, please type in \`!accept\` and press enter/send message!\n
`;

const welcomeMessageChannel = (member, welcomeChannel) => 
`Welcome to the server, ${member}! :confetti_ball::tada::confetti_ball:\n 
Feel free to introduce yourself to everyone here in ${welcomeChannel}, I promise we're all a super receptive and friendly bunch! :sweat_smile:\n
- Who you are?
- How long have you been an addict for?
- What are your main difficulties/triggers?
- Anything else you'd like to share! *posts random selfie*
`;

// YO
// DUDE
// WELCOME TO NEVERFAP
// HERE WE NEVERFAP (HENCE THE TITLE)
// IF YOU DO
// WE KILL YOU
// Jk
// !accountability

const memberAccept = async (client, logger, channel, message, db_user, discordUser, juliusReade) => {
  try {
    const member = message.member;
    const welcomeChannel = client.channels.get(process.env.NEW_NEVERFAPPERS_CHANNEL_ID);
    // const accountabilityChannel = client.channels.get(process.env.ACCOUNTABILITY_CHANNEL_ID);

    await member.removeRole(process.env.INITIATE_ROLE_ID);
    await member.addRole(process.env.NEW_NEVERFAPPER_ID);
    
    const msg = await welcomeChannel.send(welcomeMessageChannel(member, welcomeChannel));
    logger.info(`Sent channel message: ${msg.id} - onGuildMemberAdd - welcome channel message`);
    // const msg2 = await member.send(welcomeMessageUser(accountabilityChannel));
    // logger.info(`Sent channel message: ${msg2.id} - onGuildMemberAdd - welcome user message`);

    // await knex('db_users').where('id', db_user.id).update({has_accepted: true});
    // await discordUser.send('thank you'); // TODO
    // logger.info(`${discordUser.user} just accepted the terms and conditions!`);
    // await juliusReade.send(`${discordUser.user} just accepted the terms and conditions!`);
    // TODO 

  } catch(error) {
    juliusReade.send(`send message - ${error} - onGuildMemberAdd`)
    logger.error(`send message - ${error} - onGuildMemberAdd`);
    throw new Error(`send message - ${error} - onGuildMemberAdd`);
  }
}


module.exports = memberAccept;