import moment, { Moment } from 'moment';

import knex from '../../../../../util/knex';
import logger from '../../../../../util/logger';

import { generateTallyDates, formatRedditAccountabilityDate } from '../../../../../util/time';
import { DBUser } from '../../../../../types';
import Snoowrap from 'snoowrap';

export const neverFapDeluxeAccountabilityTallyText = ({
  discordUsersTallyList,
  discordUsersParticipatingCount,
  redditUsersTallyList,
  redditUsersParticipatingCount,
}: {
  discordUsersTallyList: string,
  discordUsersParticipatingCount: number,
  redditUsersTallyList: string,
  redditUsersParticipatingCount: number,
}): string => (
`NeverFap Deluxe #accountability Post Tally!

Discord Accountability Participants:
${discordUsersTallyList}

Total Discord Participants: ${discordUsersParticipatingCount}

Reddit Accountability Participants:
${redditUsersTallyList}

Total Reddit Participants: ${redditUsersParticipatingCount}
`
);


const finalMessageBodyText = (count: number, redditUsername: string): string => {
  switch(count) {
    case 1:  return `\`${redditUsername}\` - Day ${count} - First Day Dynamite\n`; break;
    case 3:  return `\`${redditUsername}\` - Day ${count} - Triple Threat\n`; break;
    case 7:  return `\`${redditUsername}\` - Day ${count} - One Week Champion\n`; break;
    case 10: return `\`${redditUsername}\` - Day ${count} - 10 Day Mania\n`; break;
    case 14: return `\`${redditUsername}\` - Day ${count} - Two Week Wonder\n`; break;
    case 20: return `\`${redditUsername}\` - Day ${count} - 20 Day Admiration :rainbow:!\n`; break;
    case 21: return `\`${redditUsername}\` - Day ${count} - 3 Week Hedonist\n`; break;
    case 25: return `\`${redditUsername}\` - Day ${count} - Quarter Master\n`; break;
    case 28: return `\`${redditUsername}\` - Day ${count} - 4 Week OMFG\n`; break;
    case 30: return `\`${redditUsername}\` - Day ${count} - 30 Day Craze\n`; break;
    case 35: return `\`${redditUsername}\` - Day ${count} - 5 Week Wowzer\n`; break;
    case 40: return `\`${redditUsername}\` - Day ${count} - 40 Day Domination\n`; break;
    case 42: return `\`${redditUsername}\` - Day ${count} - 6 Week Kaiser\n`; break;
    case 49: return `\`${redditUsername}\` - Day ${count} - 7 Week Emperor\n`; break;
    case 50: return `\`${redditUsername}\` - Day ${count} - HALF A BLOODY CENTURY\n`; break;
    default: return `\`${redditUsername}\` - Day ${count}\n`;
  }
};

const processRedditUsersPostedToday = async (redditClient: Snoowrap, today1153: Moment, today1207: Moment, discordUsersTallyList: string, discordUsersParticipatingCount: number): Promise<void> => {
  try {
    const { startOfTally, endOfTally } = generateTallyDates();

    const dbUsersWithAccountabilityMessages: DBUser[] | undefined =
      await knex('reddit_accountability_comments')
        .whereBetween('reddit_accountability_comments.created_at', [startOfTally.toDate(), endOfTally.toDate()])
        .leftJoin('db_users', 'db_users.id', 'reddit_accountability_comments.db_users_id')
        .select('db_users.id', 'db_users.username');

    let redditUsersParticipatingCount = 0;
    let redditUsersTallyList = '';

    if (dbUsersWithAccountabilityMessages) {
      for (const db_user of dbUsersWithAccountabilityMessages) {

        const redditUser = redditClient.getUser(db_user.username);

        const accountabilityMessageCount = await knex('reddit_accountability_comments').where('db_users_id', db_user.id).count();
        const count: number = parseInt(accountabilityMessageCount[0].count as string);

        const finalMessageBody = finalMessageBodyText(count, db_user.username);

        redditUsersParticipatingCount += 1;
        redditUsersTallyList += finalMessageBody;
      }

      // await knex('accountability_tally')
      //   .whereBetween('tally_date', [today1153.toDate(), today1207.toDate()])
      //   .update({
      //     post_message: finalTextString,
      //     total_participants: discordUsersParticipating
      //   });
    }

    const formattedDate = formatRedditAccountabilityDate(new Date());

    redditClient
      .getSubreddit('NeverFapDeluxe')
      // @ts-ignore
      .submitSelfPost({
        title: `NeverFap Deluxe #accountability Tally Update - ${formattedDate}`,
        text: neverFapDeluxeAccountabilityTallyText({
          discordUsersTallyList,
          discordUsersParticipatingCount,
          redditUsersTallyList,
          redditUsersParticipatingCount,
        }),
      });

    logger.info(`Accountability tally posted for today.`);

  } catch (error) {
    // const juliusReade: ClientUser | null = client.user;
    // await juliusReade?.send(`processRedditUsersPostedToday - ${error}`);
    logger.error(`processRedditUsersPostedToday - ${error}`)
    throw new Error(`processRedditUsersPostedToday - ${error}`);
  }
}

export default processRedditUsersPostedToday;
