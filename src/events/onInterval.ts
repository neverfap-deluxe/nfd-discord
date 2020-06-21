import { Client } from 'discord.js';

import automatedAccountabilityMessages from './channels/accountability/onInterval/automatedAccountabilityMessages';
import automatedGeneralMessages from './channels/onInterval/automatedGeneralMessages';
import hasNotPostedRecently from './user/onInterval/hasNotPostedRecently';
import removeBotMessagesFromChannel from './channels/onInterval/removeBotMessagesFromChannel';

import dailyNeverFapDeluxeReport from './user/onInterval/dailyNeverFapDeluxeReport';
import automatedDiscordServerBump from './channels/onInterval/automatedDiscordServerBump';

// Test dependencies
// import { getChannel } from '../util/util';
// import { NFDChannelType } from '../types';
// import logger from '../util/logger';
// import knex from '../util/knex';
// import theseUsersPostedToday from './channels/daily_milestones/cron/theseUsersPostedToday';
// // import accountabilityTallyCountdown from './channels/daily_milestones/cron/accountabilityTallyCountdown';
// import theseUsersReactedToday from './channels/daily_milestones/onInterval/theseUsersReactedToday';

export const onIntervalTenMinutes = (client: Client) =>
  async () => {
    await removeBotMessagesFromChannel(client);

    // // NOTE: Purely for testing.
    // if (process.env.NODE_ENV !== 'production') {
      // await theseUsersPostedToday(client);
      // await theseUsersReactedToday(client);

    //   const result = await knex('db_users').where('discord_id', 'arstarstrstarstarstrst').first('*');

    //   logger.info(result, 'instrt')
    //   // NOTE: I need to test what channelMessages returns
      // const accountabilityChannel = await getChannel(client, NFDChannelType.Accountability_Accountability);
      // const channelMessages = await accountabilityChannel.messages.fetch({ limit: 25 });
      // logger.info('channelMessages', { channelMessages });
    // }
  };

export const onIntervalOneHour = (client: Client) =>
  async () => {
    await dailyNeverFapDeluxeReport(client);
  };

export const onIntervalThreeHours = (client: Client) =>
  async () => {
    if (process.env.NODE_ENV === 'production') {
      await automatedDiscordServerBump(client);
    }
  };

export const onIntervalFourHours = (client: Client) =>
  async () => {
    await automatedGeneralMessages(client);
  };

export const onIntervalFiveHours = (client: Client) =>
  async () => {
    await automatedAccountabilityMessages(client);
  };

export const onIntervalDayHalf = (client: Client) =>
  async () => {
    await hasNotPostedRecently(client);
    // TODO Function is broken, and I don't believe it is currently being used.
    // await userReactedToYourAccountabilityPost(client);
  };

