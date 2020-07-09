import {
  neverFapDeluxeAccountabilityThreadPoolText,
} from './redditMessages';
import { formatRedditAccountabilityDate } from '../../util/time';

import SnooWrap, { Submission, Comment } from 'snoowrap';
import { CommentStream } from 'snoostorm';
import knex from '../../util/knex';
import { v4 as uuidv4 } from 'uuid';
import { DBUser } from '../../types';
import Snoowrap from 'snoowrap';

export const redditAccountabilityThreadPoolCommentsEventListener = async (redditClient: Snoowrap, submissionId: string): Promise<void> => {
  const commentStream = new CommentStream({
    // @ts-ignore
    subreddit: 'NeverFapDeluxe',  // optional, defaults to "all",
    limit: 5,                     // The number of results to request per request, more the larger the subreddit, about how many results you should get in 2 seconds. Defaults to 5
    pollTime: 10000               // Time in between polls in milliseconds, defaults to 2000, 30 times a minute, in accordance with Reddit's 60req/min, allowing you to perform both comment and submission updates. Note that snoowrap will automatically wait to be in compliance with Reddit's Guidelines
  });

  commentStream.on('item', async (comment): Promise<void> => {
    const todaysDate = new Date();

    const submission_post = await knex('reddit_accountability_submissions').where({ }).first('*');

    // TODO Figure out what's in this object.
    console.log(comment);

    // TODO: need to test all this no idea on any of this.
    if (comment.parent_id == submission_post.post_id) {
      const redditUserID = comment.author; // I think?

      const db_user: DBUser = await knex('db_users').where({ reddit_id: redditUserID }).first('*');

      // in a database, save this information
      knex('reddit_accountability_comments').insert({
        id: uuidv4(),
        comment_id: comment.id, // I think?
        content: comment.body,
        db_users_id: db_user.id,
        parent_submission_id: submission_post.submission_id,
      });

      // Send the user a message message
      redditClient.composeMessage({
        to: '', // RedditUser
        subject: 'NeverFap Delue #accountability - Day 1',
        text: '',
        fromSubreddit: 'NeverFapDeluxe'
      })
      redditUserID
    }
  });
};


// export default class Submission extends VoteableContent<Submission> {
//   clicked: boolean;
//   comments: Listing<Comment>;
//   /** Categories for original content, e.g. "comics", "drawing_and_painting" */
//   content_categories: string[] | null;
//   contest_mode: boolean;
//   domain: string;
//   hidden: boolean;
//   hide_score: boolean;
//   is_crosspostable: boolean;
//   is_meta: boolean;
//   is_original_content: boolean;
//   is_reddit_media_domain: boolean;
//   is_robot_indexable: boolean;
//   is_self: boolean;
//   is_video: boolean;
//   link_flair_background_color: string;
//   link_flair_css_class: string | null;
//   link_flair_richtext: RichTextFlair[];
//   link_flair_template_id: string | null;
//   link_flair_text: string | null;
//   link_flair_text_color: 'dark' | 'light';
//   link_flair_type: 'text' | 'richtext';
//   locked: boolean;
//   media: Media | null;
//   media_embed: MediaEmbed;
//   media_only: boolean;
//   num_comments: number;
//   num_crossposts: number;
//   over_18: boolean;
//   parent_whitelist_status: string;
//   pinned: boolean;
//   previous_visits: number[];
//   pwls: number;
//   post_hint: string;
//   preview: { enabled: boolean; images: ImagePreview[] };
//   quarantine: boolean;
//   removal_reason: string | null;
//   /** Same content as media, except HTTPS */
//   secure_media: Media | null;
//   secure_media_embed: SecureMediaEmbed;
//   selftext: string;
//   selftext_html: string | null;
//   spam?: boolean;
//   spoiler: boolean;
//   subreddit_subscribers: number;
//   suggested_sort: Sort | null;
//   thumbnail: string;
//   thumbnail_height?: number | null;
//   thumbnail_width?: number | null;
//   title: string;
//   upvote_ratio: number;
//   url: string;
//   view_count: number | null;
//   visited: boolean;
//   whitelist_status: string;
//   wls: number;


// export default class Comment extends VoteableContent<Comment> {
//   approved: boolean;
//   body_html: string;
//   body: string;
//   collapsed_reason: any; // ?
//   collapsed: boolean;
//   controversiality: number;
//   depth: number;
//   ignore_reports: boolean;
//   /** True if comment author is the same as the Submission author */
//   is_submitter: boolean;
//   link_id: string;
//   parent_id: string;
//   removed: boolean;
//   replies: Listing<Comment>;
//   score_hidden: boolean;
//   spam: boolean;
// }