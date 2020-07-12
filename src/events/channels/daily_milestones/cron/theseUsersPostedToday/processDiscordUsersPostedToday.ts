import { Client, TextChannel, User } from 'discord.js';
import { Moment } from 'moment';

import knex from '../../../../../util/knex';
import logger from '../../../../../util/logger';
import { getChannel } from '../../../../../util/util';

import { generateTallyDates, formatRedditAccountabilityDate } from '../../../../../util/time';
import { DBUser, NFDChannelType } from '../../../../../types';

const finalMessageBodyText = (count: number, discordUser: User): string => {
  switch(count) {
    case 1:  return `\`${discordUser.username}\` - Day ${count} - First Day Dynamite! :boom:\n`;
    case 3:  return `\`${discordUser.username}\` - Day ${count} - Triple Threat! :stuck_out_tongue_closed_eyes:\n`;
    case 7:  return `\`${discordUser.username}\` - Day ${count} - One Week Champion! :lifter:\n`;
    case 10: return `\`${discordUser.username}\` - Day ${count} - 10 Day Mania! :christmas_tree:\n`;
    case 14: return `\`${discordUser.username}\` - Day ${count} - Two Week Wonder! :surfer:\n`;
    case 20: return `\`${discordUser.username}\` - Day ${count} - 20 Day Admiration :rainbow:!\n`;
    case 21: return `\`${discordUser.username}\` - Day ${count} - 3 Week Hedonist! :cherry_blossom:\n`;
    case 25: return `\`${discordUser.username}\` - Day ${count} - Quarter Master! :gem:\n`;
    case 28: return `\`${discordUser.username}\` - Day ${count} - 4 Week OMFG! :bangbang:\n`;
    case 30: return `\`${discordUser.username}\` - Day ${count} - 30 Day Craze! :tada:\n`;
    case 35: return `\`${discordUser.username}\` - Day ${count} - 5 Week Wowzer! :punch:\n`;
    case 40: return `\`${discordUser.username}\` - Day ${count} - 40 Day Domination! :100:\n`;
    case 42: return `\`${discordUser.username}\` - Day ${count} - 6 Week Kaiser! :squid:\n`;
    case 49: return `\`${discordUser.username}\` - Day ${count} - 7 Week Emperor! :crossed_swords:\n`;
    case 50: return `\`${discordUser.username}\` - Day ${count} - HALF A BLOODY CENTURY! :statue_of_liberty:\n`;
    default: return `\`${discordUser.username}\` - Day ${count}\n`;
  }
};

const finalMessageBodyTextReddit = (count: number, discordUser: User): string => {
  switch(count) {
    case 1:  return `${discordUser.username} - Day ${count} - First Day Dynamite\n`;
    case 3:  return `${discordUser.username} - Day ${count} - Triple Threat\n`;
    case 7:  return `${discordUser.username} - Day ${count} - One Week Champion\n`;
    case 10: return `${discordUser.username} - Day ${count} - 10 Day Mania\n`;
    case 14: return `${discordUser.username} - Day ${count} - Two Week Wonder\n`;
    case 20: return `${discordUser.username} - Day ${count} - 20 Day Admiration :rainbow:!\n`;
    case 21: return `${discordUser.username} - Day ${count} - 3 Week Hedonist\n`;
    case 25: return `${discordUser.username} - Day ${count} - Quarter Master\n`;
    case 28: return `${discordUser.username} - Day ${count} - 4 Week OMFG\n`;
    case 30: return `${discordUser.username} - Day ${count} - 30 Day Craze\n`;
    case 35: return `${discordUser.username} - Day ${count} - 5 Week Wowzer\n`;
    case 40: return `${discordUser.username} - Day ${count} - 40 Day Domination\n`;
    case 42: return `${discordUser.username} - Day ${count} - 6 Week Kaiser\n`;
    case 49: return `${discordUser.username} - Day ${count} - 7 Week Emperor\n`;
    case 50: return `${discordUser.username} - Day ${count} - HALF A BLOODY CENTURY\n`;
    default: return `${discordUser.username} - Day ${count}\n`;
  }
};

const processDiscordUsersPostedToday = async (client: Client, today1153: Moment, today1207: Moment, actual_accountability_tally: string): Promise<{
  discordUsersTallyStringList: string;
  discordUsersParticipatingCount: number;
  accountabilityDate: string;
}> => {
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
    let discordUsersParticipatingCount = 0;
    let discordUsersTallyStringList = '';
    let finalTextString = finalMessageTitle;

    await dailyMilestonesChannel.send(finalMessageTitle);

    if (dbUsersWithAccountabilityMessages) {
      for (const db_user of dbUsersWithAccountabilityMessages) {

        const discordUser: User = await client.users.fetch(db_user.discord_id);
        const accountabilityMessageCount = await knex('accountability_messages').where('db_users_id', db_user.id).count();
        const count: number = parseInt(accountabilityMessageCount[0].count as string);

        const finalMessageBody = finalMessageBodyText(count, discordUser);
        const finalMessageBodyReddit = finalMessageBodyTextReddit(count, discordUser);
        await dailyMilestonesChannel.send(finalMessageBody);

        discordUsersParticipatingCount += 1;
        finalTextString += finalMessageBody;
        discordUsersTallyStringList += finalMessageBodyReddit;
      }

      const finalMessageCountFull = `Total accountability participants: ${discordUsersParticipatingCount}\n\n`;
      await dailyMilestonesChannel.send(finalMessageCountFull);

      finalTextString += finalMessageCountFull;
      logger.info(`Accountability tally posted for today.`);

      await knex('accountability_tally')
        .whereBetween('tally_date', [today1153.toDate(), today1207.toDate()])
        .update({
          post_message: finalTextString,
          total_participants: discordUsersParticipatingCount
        });
    }

    logger.info('actual_accountability_tally', actual_accountability_tally);
    logger.info('actual_accountability_tally date', new Date(actual_accountability_tally));

    const accountabilityDate = formatRedditAccountabilityDate(new Date(actual_accountability_tally));

    logger.info('after accountability_tally - ' + accountabilityDate);

    return {
      discordUsersTallyStringList,
      discordUsersParticipatingCount,
      accountabilityDate
    }
  } catch (error) {
    // const juliusReade: ClientUser | null = client.user;
    // await juliusReade?.send(`processDiscordUsersPostedToday - ${error}`);
    logger.error(`processDiscordUsersPostedToday - ${error}`)
    throw new Error(`processDiscordUsersPostedToday - ${error}`);
  }
}

export default processDiscordUsersPostedToday;