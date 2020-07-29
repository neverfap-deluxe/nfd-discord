import { MessageEmbed, Client, TextChannel } from 'discord.js';
import { SubmissionStream } from "snoostorm";
import { v4 as uuidv4 } from 'uuid';
import knex from '../util/knex';

import { NFDChannelType } from '../types';
import { getChannel } from '../util/util';

import redditClient from '../util/social/redditClient';

const postRedditUpdatesToDiscord = async (client: Client): Promise<void> => {
  const submissions = new SubmissionStream(redditClient, {
    subreddit: "NeverFapDeluxe",
    limit: 1,
    pollTime: 10000,
  });

  submissions.on("item", async (item) => {
    const generalChannel: TextChannel = await getChannel(client, NFDChannelType.RecoveryChat_GeneralChat);

    const title = item?.title;
    const subreddit = item?.subreddit_name_prefixed;
    const permalink = 'https://reddit.com' + item.permalink.slice(0, -1);
    const author = item?.author?.name;

    const doesThisPostExist = await knex('track_posting').where({
      title,
      subreddit,
      permalink,
      author
    }).first('id');

    console.log('doesThisPostExist', doesThisPostExist);

    if (!doesThisPostExist) {
      console.log(title, subreddit, permalink, author);

      await knex('track_posting').insert({
        id: uuidv4(),
        title,
        subreddit,
        permalink,
        author
      });

      const messageEmbed = new MessageEmbed()
        .setTitle('New Reddit Post! - r/NeverFapDeluxe!')
        .setDescription(`${title}\n\n${permalink}`);

      await generalChannel.send(messageEmbed);
    }
  });
}

export default postRedditUpdatesToDiscord;

// {
//   author_flair_background_color: null,
//   approved_at_utc: null,
//   subreddit: Subreddit { display_name: 'TheWritersDaily' },
//   selftext: '',
//   author_fullname: 't2_33b7kvvc',
//   saved: false,
//   mod_reason_title: null,
//   gilded: 0,
//   clicked: false,
//   title: "The Writer's Daily Podcast #35 - Piracy",
//   link_flair_richtext: [],
//   subreddit_name_prefixed: 'r/TheWritersDaily',
//   hidden: false,
//   pwls: null,
//   link_flair_css_class: null,
//   downs: 0,
//   thumbnail_height: 140,
//   top_awarded_type: null,
//   hide_score: false,
//   name: 't3_hobsea',
//   quarantine: false,
//   link_flair_text_color: 'dark',
//   upvote_ratio: 1,
//   ignore_reports: false,
//   ups: 1,
//   domain: 'castbox.fm',
//   media_embed: {},
//   thumbnail_width: 140,
//   author_flair_template_id: null,
//   is_original_content: false,
//   user_reports: [],
//   secure_media: null,
//   is_reddit_media_domain: false,
//   is_meta: false,
//   category: null,
//   secure_media_embed: {},
//   link_flair_text: null,
//   can_mod_post: true,
//   score: 1,
//   approved_by: null,
//   author_premium: false,
//   thumbnail: 'https://b.thumbs.redditmedia.com/sq-m7DIUOL1_n-9V5lAxkyEvvFBuaFyHzOszCWQpEZM.jpg',
//   edited: false,
//   author_flair_css_class: null,
//   author_flair_richtext: [],
//   gildings: {},
//   post_hint: 'link',
//   content_categories: null,
//   is_self: false,
//   subreddit_type: 'public',
//   created: 1594359003,
//   link_flair_type: 'text',
//   wls: null,
//   removed_by_category: null,
//   banned_by: null,
//   author_flair_type: 'text',
//   total_awards_received: 0,
//   allow_live_comments: false,
//   selftext_html: null,
//   likes: true,
//   suggested_sort: null,
//   banned_at_utc: null,
//   url_overridden_by_dest: 'https://castbox.fm/episode/35---Piracy-id2852897-id281957658',
//   view_count: null,
//   archived: false,
//   no_follow: false,
//   spam: false,
//   is_crosspostable: true,
//   pinned: false,
//   over_18: false,
//   preview: { images: [ [Object] ], enabled: false },
//   all_awardings: [],
//   awarders: [],
//   media_only: false,
//   can_gild: false,
//   removed: false,
//   spoiler: false,
//   locked: false,
//   author_flair_text: null,
//   treatment_tags: [],
//   rte_mode: 'markdown',
//   visited: false,
//   removed_by: null,
//   mod_note: null,
//   distinguished: null,
//   subreddit_id: 't5_2ovwtk',
//   mod_reason_by: null,
//   num_reports: 0,
//   removal_reason: null,
//   link_flair_background_color: '',
//   id: 'hobsea',
//   is_robot_indexable: true,
//   report_reasons: [],
//   author: RedditUser { name: 'NeverFapDeluxe' },
//   discussion_type: null,
//   num_comments: 1,
//   send_replies: true,
//   whitelist_status: null,
//   contest_mode: false,
//   mod_reports: [],
//   author_patreon_flair: false,
//   approved: false,
//   author_flair_text_color: null,
//   permalink: '/r/TheWritersDaily/comments/hobsea/the_writers_daily_podcast_35_piracy/',
//   parent_whitelist_status: null,
//   stickied: false,
//   url: 'https://castbox.fm/episode/35---Piracy-id2852897-id281957658',
//   subreddit_subscribers: 4,
//   created_utc: 1594330203,
//   num_crossposts: 0,
//   media: null,
//   is_video: false,
//   comments: Listing []
// }