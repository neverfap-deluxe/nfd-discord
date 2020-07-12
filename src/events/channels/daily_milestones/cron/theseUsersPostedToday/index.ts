import { Client } from 'discord.js';
import moment, { Moment } from 'moment';
import { v4 as uuidv4 } from 'uuid';

import knex from '../../../../../util/knex';
import logger from '../../../../../util/logger';

import processDiscordUsersPostedToday from './processDiscordUsersPostedToday';
import processRedditUsersPostedToday from './processRedditUsersPostedToday';
import processTwitterUsersPostedToday from './processTwitterUsersPostedToday';


const insertTallyIfNotExist = async (accountability_tally, normalTallyDate: Moment): Promise<string> => {
  if (accountability_tally && !accountability_tally.completed) {
    await knex('accountability_tally').insert({
      id: uuidv4(),
      tally_date: normalTallyDate.format()
    });

    logger.info(`theseUsersPostedToday - created accountability tally for today.`);
    return normalTallyDate.format()
  }
  return accountability_tally.tally_date;
}

const theseUsersPostedToday = async (client: Client) => {
  try {
    const today1153: Moment = process.env.NODE_ENV !== 'production' ? moment('0:28', 'HH:mm') : moment('11:53', 'HH:mm');
    const today1207: Moment = process.env.NODE_ENV !== 'production' ? moment('23:30', 'HH:mm') : moment('12:07', 'HH:mm');

    const normalTallyDate: Moment = process.env.NODE_ENV !== 'production' ? moment('11:00', 'HH:mm') : moment('12:00', 'HH:mm')

    const accountability_tally = await knex('accountability_tally').whereBetween('tally_date', [today1153.toDate(), today1207.toDate()]).first('*');

    const actual_accountability_tally = await insertTallyIfNotExist(accountability_tally, normalTallyDate);

    const {
      discordUsersTallyStringList,
      discordUsersParticipatingCount,
      accountabilityDate
    } = await processDiscordUsersPostedToday(client, today1153, today1207, actual_accountability_tally);

    await processRedditUsersPostedToday(today1153, today1207, discordUsersTallyStringList, discordUsersParticipatingCount, accountabilityDate);
    await processTwitterUsersPostedToday(today1153, today1207, discordUsersTallyStringList, discordUsersParticipatingCount, accountabilityDate);

  } catch(error) {
    // const juliusReade: ClientUser | null = client.user;
    // await juliusReade?.send(`theseUsersPostedToday - ${error}`);
    logger.error(`theseUsersPostedToday - ${error}`)
    throw new Error(`theseUsersPostedToday - ${error}`);
  }
};

export default theseUsersPostedToday;
