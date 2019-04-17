const userReactedToYourAccountabilityPost = async (client, logger, discordUser, discordUserReactedTo, juliusReade, emojiName) => {
  try {
    const accountabilityChannel = client.channels.get(process.env.ACCOUNTABILITY_CHANNEL_ID);

    await discordUserReactedTo.send(`${discordUser} reacted to your ${accountabilityChannel} post ${emojiName}`)
    await juliusReade.send(`${discordUser} sent ${discordUserReactedTo} an accountability react! ${emojiName}`);
    
  } catch(error) {
    await juliusReade.send(`userReactedToYourAccountabilityPost - ${discordUser.username} - ${error}`);
    logger.error(`userReactedToYourAccountabilityPost - ${error}`);
    throw new Error(`userReactedToYourAccountabilityPost - ${error}`);
  }
}  

module.exports = userReactedToYourAccountabilityPost;

 