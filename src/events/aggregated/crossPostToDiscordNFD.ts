// import DiscordClient from '../../../social/discordClient';

// import { aggregatedSubredditFeedCheck } from '../../aggregatedFeedCheck';
// import { NEVERFAP_DELUXE_SOCIAL_FEED_ID, NEVERFAP_DELUXE_SUBREDDIT } from '../../../const';
// import { AggregatedDBFeedItem } from 'types/feedTypes';

// export const postLatestSubredditPostsToDiscord = async () => {
//   const discordClient = new DiscordClient();
//   discordClient.init();

//   const newItems: AggregatedDBFeedItem[] = await aggregatedSubredditFeedCheck(
//     NEVERFAP_DELUXE_SOCIAL_FEED_ID,
//     NEVERFAP_DELUXE_SUBREDDIT
//   );

//   for (const item of newItems) {
//     const title = item.title;
//     const text = item.description;
//     await discordClient.sendChannelMessageEmbed({
//       channelId: 'TODO', // probably the General Channel.
//       messageEmbed: neverFapDeluxeNewSubredditSubmissionDiscordEmbed(item),
//     });
//   }

//   discordClient.destroy();
// };

// // NEVERFAP DELUXE

// export const neverFapDeluxeNewSubredditSubmissionDiscordEmbed =
//   (item: AggregatedDBFeedItem): MessageEmbed => new MessageEmbed()
//     .setTitle('New Reddit Post! - r/NeverFapDeluxe!')
//     .setDescription(
// `Here is the post contents.
// `
// );
