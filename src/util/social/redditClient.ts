import SnooWrap from 'snoowrap';

const redditClient = new SnooWrap({
  userAgent:  process.env.REDDIT_API_USER_AGENT as string,
  clientId: process.env.REDDIT_API_KEY as string,
  clientSecret: process.env.REDDIT_API_KEY_SECRET as string,
  refreshToken: process.env.REDDIT_API_REFRESH_TOKEN as string,
});

export default redditClient;
