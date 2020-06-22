import { Client } from 'discord.js';
import cron from 'node-cron';

import theseUsersPostedToday from './channels/daily_milestones/cron/theseUsersPostedToday';
import accountabilityTallyCountdown from './channels/daily_milestones/cron/accountabilityTallyCountdown';
import theseUsersReactedToday from './channels/daily_milestones/onInterval/theseUsersReactedToday';
import Snoowrap from 'snoowrap';

const setupCron = async (client: Client, redditClient: Snoowrap): Promise<void> => {
  cron.schedule('0 12 * * *', async (): Promise<void> => {
    await theseUsersPostedToday(client, redditClient);
    await theseUsersReactedToday(client);
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
