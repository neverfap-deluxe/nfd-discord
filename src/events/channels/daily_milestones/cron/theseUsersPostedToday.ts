import { Client, ClientUser, TextChannel } from 'discord.js';
import moment, { Moment } from 'moment';
import { v4 as uuidv4 } from 'uuid';

import knex from '../../../../util/knex';
import logger from '../../../../util/logger';
import { getChannel } from '../../../../util/util';

import { generateTallyDates } from '../../../../util/time';
import { DBUser, NFDChannelType } from '../../../../types';

const theseUsersPostedToday = async (client: Client) => {
  try {
    const today1153: Moment = process.env.NODE_ENV !== 'production' ? moment('0:28', 'HH:mm') : moment('11:53', 'HH:mm');
    const today1207: Moment = process.env.NODE_ENV !== 'production' ? moment('23:30', 'HH:mm') : moment('12:07', 'HH:mm');

    const normalTallyDate: Moment = process.env.NODE_ENV !== 'production' ? moment('11:00', 'HH:mm') : moment('12:00', 'HH:mm')

    const accountability_tally = await knex('accountability_tally').whereBetween('tally_date', [today1153.toDate(), today1207.toDate()]).first();

    if (accountability_tally && !accountability_tally.completed) {
      await processUsersPostedToday(client, today1153, today1207);
    } else {
      await knex('accountability_tally').insert({
        id: uuidv4(),
        tally_date: normalTallyDate.format()
      });

      logger.info(`theseUsersPostedToday - created accountability tally for today.`);

      await processUsersPostedToday(client, today1153, today1207);
    }
  } catch(error) {
    const juliusReade: ClientUser | null = client.user;
    // await juliusReade?.send(`theseUsersPostedToday - ${error}`);
    logger.error(`theseUsersPostedToday - ${error}`)
    throw new Error(`theseUsersPostedToday - ${error}`);
  }
};

const processUsersPostedToday = async (client: Client, today1153: Moment, today1207: Moment) => {
  try {
    const { startOfTally, endOfTally } = generateTallyDates();

    const accountabilityChannel: TextChannel = await getChannel(client, NFDChannelType.Accountability_Accountability);
    const dailyMilestonesChannel: TextChannel = await getChannel(client, NFDChannelType.Accountability_DailyMilestones);

    await knex('accountability_tally').whereBetween('tally_date', [today1153.toDate(), today1207.toDate()]).update({ completed: true });

    const dbUsersWithAccountabilityMessages: DBUser[] | undefined =
      await knex('accountability_messages')
        .whereBetween('accountability_messages.created_at', [startOfTally.toDate(), endOfTally.toDate()])
        .leftJoin('db_users', 'db_users.id', 'accountability_messages.db_users_id')
        .select('db_users.id', 'db_users.discord_id');

    let finalMessageTitle = `<#${accountabilityChannel}> update!\n\n`;
    let finalMessageCount = 0;
    let finalMessageBody = '';
    let finalTextString = finalMessageTitle;

    await dailyMilestonesChannel.send(finalMessageTitle);

    if (dbUsersWithAccountabilityMessages) {
      for (const db_user of dbUsersWithAccountabilityMessages) {

        const discordUser = await client.users.fetch(db_user.discord_id);
        const accountabilityMessageCount =
          await knex('accountability_messages')
            .where('db_users_id', db_user.id)
            .count();
        const count = parseInt(accountabilityMessageCount[0].count as string);

        // NOTE: Because we're not getting the total number of days committed, we're getting the number of people participated.
        finalMessageCount += 1;

        // TODO not sure if this will work, or if it needs to be `<@${discordUser>`
        switch(count) {
          case 1:  finalMessageBody += `\`${discordUser}\` - Day ${count} - First Day Dynamite! :boom:\n`; break;
          case 3:  finalMessageBody += `\`${discordUser}\` - Day ${count} - Triple Threat! :stuck_out_tongue_closed_eyes:\n`; break;
          case 7:  finalMessageBody += `\`${discordUser}\` - Day ${count} - One Week Champion! :lifter:\n`; break;
          case 10: finalMessageBody += `\`${discordUser}\` - Day ${count} - 10 Day Mania! :christmas_tree:\n`; break;
          case 14: finalMessageBody += `\`${discordUser}\` - Day ${count} - Two Week Wonder! :surfer:\n`; break;
          case 20: finalMessageBody += `\`${discordUser}\` - Day ${count} - 20 Day Admiration :rainbow:!\n`; break;
          case 21: finalMessageBody += `\`${discordUser}\` - Day ${count} - 3 Week Hedonist! :cherry_blossom:\n`; break;
          case 25: finalMessageBody += `\`${discordUser}\` - Day ${count} - Quarter Master! :gem:\n`; break;
          case 28: finalMessageBody += `\`${discordUser}\` - Day ${count} - 4 Week OMFG! :bangbang:\n`; break;
          case 30: finalMessageBody += `\`${discordUser}\` - Day ${count} - 30 Day Craze! :tada:\n`; break;
          case 35: finalMessageBody += `\`${discordUser}\` - Day ${count} - 5 Week Wowzer! :punch:\n`; break;
          case 40: finalMessageBody += `\`${discordUser}\` - Day ${count} - 40 Day Domination! :100:\n`; break;
          case 42: finalMessageBody += `\`${discordUser}\` - Day ${count} - 6 Week Kaiser! :squid:\n`; break;
          case 49: finalMessageBody += `\`${discordUser}\` - Day ${count} - 7 Week Emperor! :crossed_swords:\n`; break;
          case 50: finalMessageBody += `\`${discordUser}\` - Day ${count} - HALF A BLOODY CENTURY! :statue_of_liberty:\n`; break;
          default: finalMessageBody += `\`${discordUser}\` - Day ${count}\n`;
        }

        await dailyMilestonesChannel.send(finalMessageBody);

        finalTextString += finalMessageBody;
        finalMessageBody = '';
      }

      const finalMessageCountFull = `Total accountability participants: ${finalMessageCount}\n\n`;
      await dailyMilestonesChannel.send(finalMessageCountFull);

      logger.info(`Accountability tally posted for today.`);

      finalTextString += finalMessageCountFull;
      await knex('accountability_tally')
        .whereBetween('tally_date', [today1153.toDate(), today1207.toDate()])
        .update({
          post_message: finalTextString,
          total_participants: finalMessageCount
        });
    }
  } catch (error) {
    const juliusReade: ClientUser | null = client.user;
    // await juliusReade?.send(`processUsersPostedToday - ${error}`);
    logger.error(`processUsersPostedToday - ${error}`)
    throw new Error(`processUsersPostedToday - ${error}`);
  }
}

export default theseUsersPostedToday;
