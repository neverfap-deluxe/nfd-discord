const _ = require('lodash');
const knex = require('../../db/knex');
const uuidv4 = require('uuid/v4');

const reactTallyUpdate = require('./reactTallyUpdate');

const insertReact = async (client, logger, db_user, discordUser, juliusReade, messageReaction) => {
  try {
    const emojiId = _.get(messageReaction, '_emoji.id');
    const emojiName = _.get(messageReaction, '_emoji.name');
    const emojiReactionToAuthorId = _.get(messageReaction, 'message.author.id')
    const emojiReactionMessageId = _.get(messageReaction, 'message.id');

    const db_user_reacted_to = await knex('db_users').where('discord_id', emojiReactionToAuthorId).select('id', 'discord_id').first();
    const original_accountaiblity_message = await knex('accountability_messages').where('message_id', emojiReactionMessageId).select('id').first();

    const primary_id = uuidv4();
    const accountabilityObject = {
      id: primary_id,
      username: discordUser.username,
      emoji_id: emojiId,
      emoji_name: emojiName,
      db_users_id: db_user.id,
      db_users_id_reacted_to: _.get(db_user_reacted_to, 'id'),
      accountability_messages_id: _.get(original_accountaiblity_message, 'id'),
    };
    
    await knex('accountability_reacts').insert(accountabilityObject);
    logger.info(`accountabilityReact added to database - ${discordUser.username} sent emoji`);
    // await juliusReade.send(`accountabilityReact added to database - ${discordUser.username}`);
    
    const discordUserReactedTo = await client.fetchUser(_.get(db_user_reacted_to, 'discord_id'));
    
    reactTallyUpdate(client, logger, db_user, discordUser, discordUserReactedTo, juliusReade, emojiName);

  } catch(error) {
    await juliusReade.send(`insertReact - ${discordUser.username} - ${db_user.id} - ${error}`);
    logger.error(`insertReact - ${error}`);
    throw new Error(`insertReact - ${error}`);
  }
}  

module.exports = insertReact;



 