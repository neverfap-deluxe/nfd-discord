import { Moment } from 'moment';

import logger from '../../../../../util/logger';
import twitterClient from '../../../../../util/social/twitterClient';

const processTwitterUsersPostedToday = async (today1153: Moment, today1207: Moment, discordUsersTallyList: string, discordUsersParticipatingCount: number, accountabilityDate: string): Promise<void> => {
  try {
    const discordUsersTallyListArray: string[] = discordUsersTallyList.split('\n');
    const shuffledArray: string[] = discordUsersTallyListArray.sort(() => 0.5 - Math.random());
    // const shuffledDiscordUsers = shuffledArray.splice(0,3).join('\n');

    // Random Participant: ${shuffledArray[0]}

    // TODO
    const tallyText = (
`NeverFap Deluxe Discord #accountability #NoFap Tally! ${accountabilityDate}

Total Participants Today: ${discordUsersParticipatingCount}

If you would like to join: https://discord.gg/TuwARWk
`
    );

    const tweet = await twitterClient
      .post('statuses/update', {
        status: tallyText,
        // in_reply_to_status_id: lastTweetID,
        auto_populate_reply_metadata: true
      });

    logger.info(`twitter - sendTextPost - ${tweet.id}`);
    logger.info(`Twitter Accountability tally posted for today.`);
  } catch (error) {
    // const juliusReade: ClientUser | null = client.user;
    // await juliusReade?.send(`processTwitterUsersPostedToday - ${error}`);
    logger.error(`processTwitterUsersPostedToday - ${error.toString()}`)
    throw new Error(`processTwitterUsersPostedToday - ${error.toString()}`);
  }
}

export default processTwitterUsersPostedToday;
