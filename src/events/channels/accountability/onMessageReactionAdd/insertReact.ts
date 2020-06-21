import { Client, ClientUser, User, PartialUser, MessageReaction } from 'discord.js';
import { v4 as uuidv4 } from 'uuid';

import knex from '../../../../util/knex';
import logger from '../../../../util/logger';

import { DBUser } from '../../../../types';

const insertReact = async (client: Client, db_user: DBUser, discordUser: User | PartialUser, messageReaction: MessageReaction) => {
  try {
    const emojiId = messageReaction.emoji.id;
    const emojiName = messageReaction.emoji.name;

    const emojiReactionToAuthorId = messageReaction.message.author.id;
    const emojiReactionMessageId = messageReaction.message.id;

    const db_user_reacted_to = await knex('db_users').where('discord_id', emojiReactionToAuthorId).select('id', 'discord_id').first();
    const original_accountaiblity_message = await knex('accountability_messages').where('message_id', emojiReactionMessageId).select('id').first();

    await knex('accountability_reacts').insert({
      id: uuidv4(),
      username: discordUser.username,
      emoji_id: emojiId,
      emoji_name: emojiName,
      db_users_id: db_user.id,
      db_users_id_reacted_to: db_user_reacted_to.id,
      accountability_messages_id: original_accountaiblity_message.id,
    });

    logger.info(`accountabilityReact added to database - ${discordUser.username} sent emoji`);
  } catch(error) {
    const juliusReade: ClientUser | null = client.user;
    // await juliusReade?.send(`insertReact - ${discordUser.username} - ${db_user.id} - ${error}`);
    logger.error(`insertReact - ${error}`);
    throw new Error(`insertReact - ${error}`);
  }
}

export default insertReact;



