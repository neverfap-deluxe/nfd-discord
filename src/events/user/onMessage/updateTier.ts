import knex from '../../../util/knex';
import logger from '../../../util/logger';
import { DBUser } from '../../../types';
import { User, Message, Client, ClientUser } from 'discord.js';

const updateTierLevels = async (message: Message, accountabilityMessagesCount): Promise<void> => {
  const tiers1 = 7;
  const tiers2 = 14;
  const tiers3 = 21;
  const tiers4 = 30;
  const tiers5 = 60;
  const tiers6 = 90;

  if (!message.member) {
    logger.info(`updateTierLevels - message.member does not exist`);
    return;
  }

  if (accountabilityMessagesCount < tiers1) {
    // TODO check current user role first and then check if they have been.
    if (message.member?.roles.cache.find(r => r.id === process.env.NEW_NEVERFAPPER_ID)) {
      await message.member?.roles.remove(process.env.NEW_NEVERFAPPER_ID as string);
    }
    if (message.member?.roles.cache.find(r => r.id !== process.env.TIER1_ID)) {
      await message.member?.roles.add(process.env.TIER1_ID as string);
    }
    return;
  }

  if (accountabilityMessagesCount >= tiers1 && accountabilityMessagesCount < tiers2) {
    if (message.member?.roles.cache.find(r => r.id === process.env.TIER1_ID)) {
      await message.member?.roles.remove(process.env.TIER1_ID as string);
    }
    if (message.member?.roles.cache.find(r => r.id !== process.env.TIER2_ID)) {
      await message.member?.roles.add(process.env.TIER2_ID as string);
    }
    return;
  }

  if (accountabilityMessagesCount >= tiers2 && accountabilityMessagesCount < tiers3) {
    if (message.member?.roles.cache.find(r => r.id === process.env.TIER2_ID)) {
      await message.member?.roles.remove(process.env.TIER2_ID as string);
    }
    if (message.member?.roles.cache.find(r => r.id !== process.env.TIER3_ID)) {
      await message.member?.roles.add(process.env.TIER3_ID as string);
    }
    return;
  }

  if (accountabilityMessagesCount >= tiers3 && accountabilityMessagesCount < tiers4) {
    if (message.member?.roles.cache.find(r => r.id === process.env.TIER3_ID)) {
      await message.member?.roles.remove(process.env.TIER3_ID as string);
    }
    if (message.member?.roles.cache.find(r => r.id !== process.env.TIER4_ID)) {
      await message.member?.roles.add(process.env.TIER4_ID as string);
    }
    return;
  }

  if (accountabilityMessagesCount >= tiers5 && accountabilityMessagesCount < tiers6) {
    if (message.member?.roles.cache.find(r => r.id === process.env.TIER4_ID)) {
      await message.member?.roles.remove(process.env.TIER4_ID as string);
    }
    if (message.member?.roles.cache.find(r => r.id !== process.env.TIER5_ID)) {
      await message.member?.roles.add(process.env.TIER5_ID as string);
    }
    return;
  }

  if (tiers6 <= accountabilityMessagesCount) {
    if (message.member?.roles.cache.find(r => r.id === process.env.TIER5_ID)) {
      await message.member?.roles.remove(process.env.TIER5_ID as string);
    }
    if (message.member?.roles.cache.find(r => r.id !== process.env.TIER6_ID)) {
      await message.member?.roles.add(process.env.TIER6_ID as string);
    }
    return;
  }
}

const updateTier = async (client: Client, db_user: DBUser, discordUser: User, message: Message) => {
  try {
    // Will need to test this.
    const isMemberHelpfulNeverFapper = message.member?.roles.highest === process.env.HELPFUL_NEVERFAPPER_ID;

    if (!isMemberHelpfulNeverFapper) {
      const accountabilityMessages = await knex('accountability_messages').where('db_users_id', db_user.id).count();
      const accountabilityMessagesCount = parseInt(accountabilityMessages[0].count as string);

      await updateTierLevels(message, accountabilityMessagesCount);
      logger.info(`updateTierLevels run`);
    }
  } catch(error) {
    const juliusReade: ClientUser | null = client.user;
    // await juliusReade?.send(`updateTier error - ${message} - ${message.member?} - ${discordUser.username} - ${error}`);
    logger.error(`updateTier - ${error}`);
    throw new Error(`updateTier - ${error}`);
  }
 }

 export default updateTier;
