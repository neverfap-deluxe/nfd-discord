const onGuildMemberAdd = (client, logger) => {
  return async function(member) {
    const juliusReade = await client.fetchUser(process.env.JULIUS_READE_ID);
    try {
      await member.addRole(process.env.INITIATE_ROLE_ID);
    } catch(error) {
      juliusReade.send(`send message - ${error} - onGuildMemberAdd`)
      logger.error(`send message - ${error} - onGuildMemberAdd`);
      throw new Error(`send message - ${error} - onGuildMemberAdd`);
    }
  }
}



module.exports = onGuildMemberAdd;

