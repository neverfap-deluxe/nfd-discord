import { Client } from 'discord.js';
import Snoowrap from 'snoowrap';
import cron from 'node-cron';

// REDDIT / DISCORD
import theseUsersPostedToday from './channels/daily_milestones/cron/theseUsersPostedToday';

// DISCORD
import accountabilityTallyCountdown from './channels/daily_milestones/cron/accountabilityTallyCountdown';
import theseUsersReactedToday from './channels/daily_milestones/onInterval/theseUsersReactedToday';
import automatedDiscordServerFAK from './channels/onInterval/automatedDiscordServerFAK';

// REDDIT
// import { postRedditAccountabilityThreadPool } from './reddit/postRedditAccountabilityThreadPool';

// TODO Figure out what time this has to post.

const setupCron = async (client: Client): Promise<void> => {
  // cron.schedule('*/10 * * * *', async () => { // Every 10 Minutes

  // });

  cron.schedule('*/10 * * * *', async () => { // Every 10 Minutes
    // await automatedDiscordServerFAK(client)
  });

  cron.schedule('0 12 * * *', async (): Promise<void> => {
    await theseUsersPostedToday(client);
    await theseUsersReactedToday(client);

    // await postRedditAccountabilityThreadPool(redditClient);
  });

  cron.schedule('30 11 * * *', async (): Promise<void> => { // 9 pm
    // TODO Change my Discord username to say that I'm away
    //
  });

  cron.schedule('0 20 * * *', async (): Promise<void> => { // 6 am
    // TODO Change my Discord username to say that I'm back
  });

  cron.schedule('59 11 * * *', async (): Promise<void> => {
    await accountabilityTallyCountdown(client, 'oneMinuteBeforeMessage');
  });
  cron.schedule('55 11 * * *', async (): Promise<void> => {
    await accountabilityTallyCountdown(client, 'fiveMinutesBeforeMessage');
  });
  cron.schedule('30 11 * * *', async (): Promise<void> => {
    await accountabilityTallyCountdown(client, 'thirtyMinutesBeforeMessage');
  });
  cron.schedule('0 11 * * *', async (): Promise<void> => {
    await accountabilityTallyCountdown(client, 'oneHourBeforeMessage');
  });
  cron.schedule('0 10 * * *', async (): Promise<void> => {
    await accountabilityTallyCountdown(client, 'oneTwoHoursBeforeMessage');
  });
  cron.schedule('0 8 * * *', async (): Promise<void> => {
    await accountabilityTallyCountdown(client, 'oneFourHoursBeforeMessage');
  });
  cron.schedule('0 0 * * *', async (): Promise<void> => {
    await accountabilityTallyCountdown(client, 'twelveHoursBeforeMessage');
  });
}

export default setupCron;
