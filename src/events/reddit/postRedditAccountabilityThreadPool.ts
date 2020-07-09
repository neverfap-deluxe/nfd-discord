import SnooWrap from 'snoowrap';
import { v4 as uuidv4 } from 'uuid';
import { getTallyCount } from '../../util/util';
import knex from '../../util/knex';
import {
  neverFapDeluxeAccountabilityThreadPoolText,
} from './redditMessages';
import { formatRedditAccountabilityDate } from '../../util/time';

export const postRedditAccountabilityThreadPool = async (redditClient: SnooWrap): Promise<void> => {
  try {
    const formattedDate = formatRedditAccountabilityDate(new Date());
    const tallyAmount = getTallyCount();

    const submissionHollow = await redditClient
      .getSubreddit('TheWritersDaily')
      // @ts-ignore
      .submitSelfpost({
        title: `NeverFap Deluxe #accountability Thread Pool - ${formattedDate}`,
        text: neverFapDeluxeAccountabilityThreadPoolText(formattedDate, tallyAmount),
      })
      // .sticky()
      // .assignFlair({text: 'Daily #Accountability Thread Pool', css_class: 'daily-thread'});

    // @ts-ignore
    const submission = await redditClient
      .getSubmission(submissionHollow.name)
      .fetch()

    await knex('reddit_accountability_submissions').insert({
      id: uuidv4(),
      submission_id: submissionHollow.name,
      submission_date: formattedDate,
      title: submission.title,
      text: submission.selftext,
    });
  } catch(error) {
    throw new Error('postRedditAccountabilityThreadPool');
  }
};

// Submission {
//   author_flair_background_color: null,
//   approved_at_utc: null,
//   subreddit: Subreddit { display_name: 'TheWritersDaily' },
//   selftext: 'Here you can post your #accountability post for the day, which the NeverFap Deluxe Reddit Bot will keep track of. Yesterday more than\n' +
//     '\n' +
//     'Feel free to post your #accountability post\n' +
//     '\n' +
//     'Date: 24/06/2020\n' +
//     '\n' +
//     '\n' +
//     '##Accountability Rules:\n' +
//     '- Post a comment in this Thread and it will be counted by the NFD Reddit bot to your tally\n' +
//     '\n' +
//     'Example Post\n' +
//     '\n' +
//     '29/08/2020\n' +
//     '\n' +
//     'Healthy Coping Mechanisms\n' +
//     '\n' +
//     '- Meditated for 10 minutes\n' +
//     '\n' +
//     '- Cold shower before bed\n' +
//     '\n' +
//     '- Completed a huge squat + deadlift workout\n' +
//     '\n' +
//     '- Remained calm throughout the day and really practiced to keep my mind wide and open\n' +
//     '\n' +
//     'To Improve\n' +
//     '\n' +
//     "- I'm going to focus on becoming more calm throughout the day\n" +
//     '\n' +
//     '- I want to continue learning not to take things personally, and instead take things one step at a time\n' +
//     '\n' +
//     '\n' +
//     'Links:\n' +
//     '\n' +
//     '- Website: https://neverfapdeluxe.com/\n' +
//     '- Discord: Discord',
//   user_reports: [],
//   saved: false,
//   mod_reason_title: null,
//   gilded: 0,
//   clicked: false,
//   title: 'NeverFap Deluxe #accountability Thread Pool - 24/06/2020',
//   link_flair_richtext: [],
//   subreddit_name_prefixed: 'r/TheWritersDaily',
//   hidden: false,
//   pwls: null,
//   link_flair_css_class: null,
//   downs: 0,
//   thumbnail_height: null,
//   top_awarded_type: null,
//   parent_whitelist_status: null,
//   hide_score: false,
//   name: 't3_henqq3',
//   quarantine: false,
//   link_flair_text_color: 'dark',
//   upvote_ratio: 1,
//   ignore_reports: false,
//   ups: 1,
//   domain: 'self.TheWritersDaily',
//   media_embed: {},
//   thumbnail_width: null,
//   author_flair_template_id: null,
//   is_original_content: false,
//   author_fullname: 't2_33b7kvvc',
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
//   thumbnail: 'self',
//   edited: false,
//   author_flair_css_class: null,
//   author_flair_richtext: [],
//   gildings: {},
//   post_hint: 'self',
//   content_categories: null,
//   is_self: true,
//   subreddit_type: 'public',
//   created: 1592977447,
//   link_flair_type: 'text',
//   wls: null,
//   removed_by_category: null,
//   banned_by: null,
//   author_flair_type: 'text',
//   total_awards_received: 0,
//   allow_live_comments: false,
//   selftext_html: '<!-- SC_OFF --><div class="md"><p>Here you can post your #accountability post for the day, which the NeverFap Deluxe Reddit Bot will keep track of. Yesterday more than</p>\n' +
//     '\n' +
//     '<p>Feel free to post your #accountability post</p>\n' +
//     '\n' +
//     '<p>Date: 24/06/2020</p>\n' +
//     '\n' +
//     '<h2>Accountability Rules:</h2>\n' +
//     '\n' +
//     '<ul>\n' +
//     '<li>Post a comment in this Thread and it will be counted by the NFD Reddit bot to your tally</li>\n' +
//     '</ul>\n' +
//     '\n' +
//     '<p>Example Post</p>\n' +
//     '\n' +
//     '<p>29/08/2020</p>\n' +
//     '\n' +
//     '<p>Healthy Coping Mechanisms</p>\n' +
//     '\n' +
//     '<ul>\n' +
//     '<li><p>Meditated for 10 minutes</p></li>\n' +
//     '<li><p>Cold shower before bed</p></li>\n' +
//     '<li><p>Completed a huge squat + deadlift workout</p></li>\n' +
//     '<li><p>Remained calm throughout the day and really practiced to keep my mind wide and open</p></li>\n' +
//     '</ul>\n' +
//     '\n' +
//     '<p>To Improve</p>\n' +
//     '\n' +
//     '<ul>\n' +
//     '<li><p>I&#39;m going to focus on becoming more calm throughout the day</p></li>\n' +
//     '<li><p>I want to continue learning not to take things personally, and instead take things one step at a time</p></li>\n' +
//     '</ul>\n' +
//     '\n' +
//     '<p>Links:</p>\n' +
//     '\n' +
//     '<ul>\n' +
//     '<li>Website: <a href="https://neverfapdeluxe.com/">https://neverfapdeluxe.com/</a></li>\n' +
//     '<li>Discord: Discord</li>\n' +
//     '</ul>\n' +
//     '</div><!-- SC_ON -->',
//   likes: true,
//   suggested_sort: null,
//   banned_at_utc: null,
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
//   id: 'henqq3',
//   is_robot_indexable: true,
//   num_duplicates: 0,
//   report_reasons: [],
//   author: RedditUser { name: 'NeverFapDeluxe' },
//   discussion_type: null,
//   num_comments: 0,
//   send_replies: true,
//   media: null,
//   contest_mode: false,
//   author_patreon_flair: false,
//   approved: false,
//   author_flair_text_color: null,
//   permalink: '/r/TheWritersDaily/comments/henqq3/neverfap_deluxe_accountability_thread_pool/',
//   whitelist_status: null,
//   stickied: false,
//   url: 'https://www.reddit.com/r/TheWritersDaily/comments/henqq3/neverfap_deluxe_accountability_thread_pool/',
//   subreddit_subscribers: 3,
//   created_utc: 1592948647,
//   num_crossposts: 0,
//   mod_reports: [],
//   is_video: false,
//   comments: Listing []
// }


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