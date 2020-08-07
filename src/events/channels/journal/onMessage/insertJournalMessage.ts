import { Client, ClientUser, Message, TextChannel, User } from 'discord.js';
import { v4 as uuidv4 } from 'uuid';
import { DBUser, NFDChannelType, Journal } from '../../../../types';
import knex from '../../../../util/knex';
import logger from '../../../../util/logger';
import { getChannelId } from '../../../../util/util';
import moment from 'moment';

export enum JournalType {
  Exercise = 'exercise',
  Meditation = 'meditation',
  HealthyEating = 'healthy_eating',
  Reading = 'reading',
  Relapse = 'relapse',
  Gratitude = 'gratitude',
}

const getJournalTypeFromChannelId = (channel: TextChannel): JournalType | undefined => {
  if (channel.id === getChannelId(NFDChannelType.Accountability_ExerciseJournal)) {
    return JournalType.Exercise;
  }
  if (channel.id === getChannelId(NFDChannelType.Accountability_HealthyEatingJournal)) {
    return JournalType.HealthyEating;
  }
  if (channel.id === getChannelId(NFDChannelType.Accountability_MeditationJournal)) {
    return JournalType.Meditation;
  }
  if (channel.id === getChannelId(NFDChannelType.Accountability_GratitudeJournal)) {
    return JournalType.Gratitude;
  }
  if (channel.id === getChannelId(NFDChannelType.Accountability_RelapseJournal)) {
    return JournalType.Relapse;
  }
  if (channel.id === getChannelId(NFDChannelType.Accountability_ReadingJournal)) {
    return JournalType.Reading;
  }
  return undefined;
}

const insertJournalMessage = async (client: Client, channel: TextChannel, db_user: DBUser, discordUser: User, message: Message) => {
  try {
    const journalType = getJournalTypeFromChannelId(channel);

    const doesJournalExist = await knex<Journal>('journals')
      .where({ db_users_id: db_user.id })
      .whereBetween('created_at', [moment().subtract(5, 'minutes').toDate(), moment().toDate()])
      .first('id', 'created_at');

    if (doesJournalExist) return;

    // FUTURE - # won't work, so we'll need something else.
    // Maybe we tag the robot instead? I'm not sure.
    // const isValidJournal = message.content.includes('#journal');

    if (journalType) {
      await knex<Journal>('journals').returning('content').insert({
        id: uuidv4(),
        message_id: message.id,
        content: message.content,
        db_users_id: db_user.id,
        journal_type: journalType,
        // is_valid: isValidJournal,
      });

      logger.info(`Journal Type: ${journalType} - Message: ${message.content}`);
    }
  } catch(error) {
    const juliusReade: ClientUser | null = client.user;
    // await juliusReade?.send(`accountabilityMessage failed to add to database - ${discordUser.username} - ${error}`);
    logger.error(`insertJournalMessage - ${error}`);
    throw new Error(`insertJournalMessage - ${error}`);
  }
}

export default insertJournalMessage;
