const knex = require('../../db/knex');

const userReactedToYourAccountabilityPost = async (client, logger, juliusReade) => {
  try {
    const accountabilityChannel = client.channels.get(process.env.ACCOUNTABILITY_CHANNEL_ID);

    const accountabilityMessages = 
      await knex('accountability_messages').select('db_users_id');

    for (const accountabilityMessage of accountabilityMessages) {
      const db_user = await knex('db_users').where('id', discordUser.id).select('discord_id');
      const discordUser = await client.fetchUser(db_user.discord_id);

      if (discordUser) {
        const accountabilityReacts =
          await knex('accountability_reacts')
            .where('db_users_id_reacted_to', accountabilityMessage.db_users_id)
            .select('username', 'emoji_name');

        let reactedToList = `These users reacted to your ${accountabilityChannel} post in the last hour!\n`;

        for (const react of accountabilityReacts) {
          reactedToList += `\`${react.username}\` reacted with ${react.emoji_name}!\n`;
        }
        reactedToList += `\nYou can help others out by reacting to their posts too!`
        await discordUser.send(reactedToList);
      }
    }

    // client, logger, discordUser, discordUserReactedTo, juliusReade, emojiName

    // original code - unfortunately the issue is that it will show @invalid-user because the users aren't cached, which is kind of crappy.
    // await discordUserReactedTo.send(`${discordUser} reacted to your ${accountabilityChannel} post ${emojiName}`)
    // await juliusReade.send(`${discordUser} sent ${discordUserReactedTo} an accountability react! ${emojiName}`);

    // await discordUserReactedTo.send(`\`${discordUser.username}\` reacted to your ${accountabilityChannel} post ${emojiName}`)
    // await juliusReade.send(`\`${discordUser.username}\` sent \`${discordUserReactedTo.username}\` an accountability react! ${emojiName}`);
    
  } catch(error) {
    await juliusReade.send(`userReactedToYourAccountabilityPost - ${error}`);
    logger.error(`userReactedToYourAccountabilityPost - ${error}`);
    throw new Error(`userReactedToYourAccountabilityPost - ${error}`);
  }
}  

module.exports = userReactedToYourAccountabilityPost;
