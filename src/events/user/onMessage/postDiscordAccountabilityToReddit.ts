import { User, Client, Message } from 'discord.js';
import Snoowrap from 'snoowrap';

import { DBUser } from '../../../types';

import knex from '../../../util/knex';
import logger from '../../../util/logger';
import { getTallyCount } from '../../../util/util';
import { formatRedditAccountabilityDate } from '../../../util/time';
import redditClient from '../../../util/social/redditClient';

const postAsAComment = async (client: Client, message: Message, tallyCount: number): Promise<void> => {
  const formattedDate = formatRedditAccountabilityDate(new Date());

  const redditSubmission = await knex('reddit_accountability_submissions').where({
    submission_date: formattedDate,
  }).first('submission_id');

  const messageReply = `Discord #accountability post ${tallyCount}

${message.content}
`;

  redditClient
    .getSubmission(redditSubmission.submission_id)
    .reply(messageReply)
}

const postAsASelfPost = async (redditClient: Snoowrap, message: Message, tallyCount: number): Promise<void> => {
  // TODO, maybe create a number of headers for this.
  redditClient
    .getSubreddit('NeverFapDeluxe')
    // @ts-ignore
    .submitSelfpost({
      title: `#${tallyCount} - A new #accountability post appears!`,
      text: message.content,
    });
}

const postDiscordAccountabilityToReddit = async (client: Client, redditClient: Snoowrap, dbUser: DBUser, discordUser: User, message: Message): Promise<void> => {
  try {
    const tallyCount = await getTallyCount();

    // TODO actually test this with the discord server.
    // await postAsAComment(redditClient, message, tallyCount);

    // await postAsASelfPost(redditClient, message, tallyCount);
  } catch(error) {
    // const juliusReade: ClientUser | null = client.user;
    // await juliusReade?.send(`${discordUser.username} - postDiscordAccountabilityToReddit - ${error}`);
    logger.error(`${discordUser.username} - postDiscordAccountabilityToReddit - ${error}`);
    throw new Error(`${discordUser.username} - postDiscordAccountabilityToReddit - ${error}`);
  }
}

export default postDiscordAccountabilityToReddit;
