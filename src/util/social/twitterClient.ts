import TwitterLite from 'twitter-lite';

const twitterClient = new TwitterLite({
  subdomain: 'api', // NOTE: I may need to change this to 'upload' for images. But I won't worry about images for now.
  consumer_key: process.env.TWITTER_API_CONSUMER_KEY as string,
  consumer_secret: process.env.TWITTER_API_CONSUMER_SECRET as string,
  access_token_key: process.env.TWITTER_API_NFD_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_API_NFD_ACCESS_TOKEN_SECRET,
});

export default twitterClient;

// async sendTextPost({ text }: { text: string; }): Promise<string> {
//   try {
//     const tweet = await this.client?.post('statuses/update', {
//       status: text,
//       // in_reply_to_status_id: lastTweetID,
//       auto_populate_reply_metadata: true
//     });
//     logger.info('twitter - sendTextPost');
//     return tweet.id_str;
//   } catch (error) {
//     logger.info(error.errors);
//     throw new Error(error.toString());
//   }
// };
