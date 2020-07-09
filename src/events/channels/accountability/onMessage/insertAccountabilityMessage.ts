import { ClientUser, Client, User, Message, TextChannel } from 'discord.js';
import { v4 as uuidv4 } from 'uuid';

import { DBUser } from '../../../../types';
import knex from '../../../../util/knex';
import logger from '../../../../util/logger';

import automatedCommitmentTallyMessages from '../../../user/onMessage/automatedCommitmentTallyMessages';
import postTallyUpdate from '../../daily_milestones/onMessage/postTallyUpdate';
import upvoteUserPost from '../../daily_milestones/onMessage/upvoteUserPost';
import updateTier from '../../../user/onMessage/updateTier';
// import postDiscordAccountabilityToReddit from '../../../user/onMessage/postDiscordAccountabilityToReddit';

const insertAccountabilityMessage = async (client: Client, db_user: DBUser, discordUser: User, channel: TextChannel, message: Message) => {
  try {
    if (db_user.sent36HourMessage) {
      await knex('db_users').where('id', db_user.id).update({sent36HourMessage: false});
    }
    if (db_user.sent72HourMessage) {
      await knex('db_users').where('id', db_user.id).update({sent72HourMessage: false});
    }
    if (db_user.sentYesterdayPostMessage) {
      await knex('db_users').where('id', db_user.id).update({sentYesterdayPostMessage: false});
    }

    await knex('accountability_messages').returning('content').insert({
      id: uuidv4(),
      message_id: message.id,
      db_users_id: db_user.id,
      content: message.content,
      username: discordUser.username,
    });

    logger.info(`accountabilityMessage added to database - ${discordUser.username}`);

    await automatedCommitmentTallyMessages(client, db_user, discordUser);
    await upvoteUserPost(client, db_user, discordUser);
    await postTallyUpdate(client, db_user, discordUser);
    await updateTier(client, db_user, discordUser, message);
    // await postDiscordAccountabilityToReddit(client, db_user, discordUser, message);

  } catch(error) {
    const juliusReade: ClientUser | null = client.user;
    // await juliusReade?.send(`accountabilityMessage failed to add to database - ${discordUser.username} - ${error}`);
    logger.error(`insertAccountabilityMessage - ${error}`);
    throw new Error(`insertAccountabilityMessage - ${error}`);
  }
}

export default insertAccountabilityMessage;