const userReactedToYourAccountabilityPost = async (client, logger, discordUser, discordUserReactedTo, juliusReade, emojiName) => {
  try {
    const accountabilityChannel = client.channels.get(process.env.ACCOUNTABILITY_CHANNEL_ID);

    // original code - unfortunately the issue is that it will show @invalid-user because the users aren't cached, which is kind of crappy.
    // await discordUserReactedTo.send(`${discordUser} reacted to your ${accountabilityChannel} post ${emojiName}`)
    // await juliusReade.send(`${discordUser} sent ${discordUserReactedTo} an accountability react! ${emojiName}`);
    
    await discordUserReactedTo.send(`${discordUser.username} reacted to your ${accountabilityChannel} post ${emojiName}`)
    await juliusReade.send(`${discordUser.username} sent ${discordUserReactedTo.username} an accountability react! ${emojiName}`);
    
  } catch(error) {
    await juliusReade.send(`userReactedToYourAccountabilityPost - ${discordUser.username} - ${error}`);
    logger.error(`userReactedToYourAccountabilityPost - ${error}`);
    throw new Error(`userReactedToYourAccountabilityPost - ${error}`);
  }
}  

module.exports = userReactedToYourAccountabilityPost;
