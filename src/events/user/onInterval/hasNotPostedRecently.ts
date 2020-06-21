import { Client, ClientUser, TextChannel, User } from 'discord.js';
import moment from 'moment';

import knex from '../../../util/knex';
import logger from '../../../util/logger';
import { getChannel, getNFDBotId } from '../../../util/util';

import { generateRandomNumber } from '../../../util/util';
import { DBUser, NFDChannelType } from '../../../types';

// 36 hour messages
const notPostedRecentlyMessage_36_1 = (discordUser: User, accountability: TextChannel): string =>
`Hey <@${discordUser}>!\n
It seems you haven't posted in <#${accountability}> a while. *sad reacts only*\n
If you're feeling a bit stuck and need some help with your journey, just ping our good ol' mate \`Julius Reade\` and he'll be more than happy to offer you with some advice. Otherwise, we have a very friendly community who are more than willing to help out. :grin:\n
I know you can do this, you just have to give yourself a chance.\n
For further advice, please type and enter \`!help\`.
`;

const notPostedRecentlyMessage_36_2 = (discordUser: User, accountability: TextChannel): string =>
`Hubba bubba.\n
My gosh <@${discordUser}>, where have you been!?\n
You know, it's gonna be reaaaaaaally hard for you to beat your porn addiction unless if you stick with the process. This means posting in <#${accountability}> and committing to your daily routine of meditation.\n
We all need some help sometimes, so do yourself a favour and send your favourite housemate \`Julius Reade\` a message, to see how we can work through this together :D\n
For further advice, please type and enter \`!help\`.
`;

const notPostedRecentlyMessage_36_3 = (discordUser: User, accountability: TextChannel): string =>
`Bonjour <@${discordUser}>!\n
According to le database, it seems you haven't been posting in <#${accountability}>!\n
If it's help you're after, please send Uncle Reade (that's \`Julius Reade\` for those completely unatuned to my sardonic tone) a message and we'll sort this out together.\n
I promise that we really want to help you beat this thing, however we can only support you in as-far as you're willing to support yourself. We believe in you. :grin:\n
For further advice, please type and enter \`!help\`.
`;

// 72 hour messages
const notPostedRecentlyMessage_72_1 = (discordUser: User, accountability: TextChannel): string =>
`Hey <@${discordUser}>!\n
I hope everything is truly okay! It's the bot again. You know, that thing which will probably turn into Skynet one day and destroy the world. I'm sorry you haven't felt compelled to come back. I know it can be hard, and I respect your decision.\n
Regardless, if you're ever around, myself and the community are more-than happy to help you with your journey :D\n
*needlessly karate chops table*\n
For further advice, please type and enter \`!help\`.
`;

const notPostedRecentlyMessage_72_2 = (discordUser: User, accountability: TextChannel): string =>
`Miao.\n
I'm sorry, but you've disappeared for so long that I've now turned into a cat! :cat2: My gosh, such interesting times we live in! Well, if you ever need help, just let myself and the others know and we'll be more than happy to help get you back on track. :heart:\n
*chews silently on carrot*\n
For further advice, please type and enter \`!help\`.
`;

const notPostedRecentlyMessage_72_3 = (discordUser: User, accountability: TextChannel): string =>
`Hey <@${discordUser}>!\n
In your absence, I have disintigrated into a puddle of pre-soviet steel and sardonic humour. Oh wait, I'm still here! Sorry, I was going a little loopy without your input. :robot:\n
If you ever need help with anything please contact your good mate Julius Reade. He will help you. In fact, he went as far as to build a chat bot that has been designed to reach out to you. :grin:\n
*gives hug*\n
For further advice, please type and enter \`!help\`.
`;

const sendNotPostedRecentlyMessage36Hours = async (count: number, discordUser: User, accountabilityChannel: TextChannel) => {
  switch(count) {
    case 1: {
      const msg = await discordUser.send(notPostedRecentlyMessage_36_1(discordUser, accountabilityChannel));
      logger.info(`Sent channel message: ${msg.id} - hasNotPostedRecently`);
      break;
    }
    case 2: {
      const msg = await discordUser.send(notPostedRecentlyMessage_36_2(discordUser, accountabilityChannel));
      logger.info(`Sent channel message: ${msg.id} - hasNotPostedRecently`);
      break;
    }
    case 3: {
      const msg = await discordUser.send(notPostedRecentlyMessage_36_3(discordUser, accountabilityChannel));
      logger.info(`Sent channel message: ${msg.id} - hasNotPostedRecently`);
      break;
    }
    default: throw new Error(`hasNotPostedRecently - 36 hours - generateRandomNumber - created an incorrect generator number - ${count}`);
  }
}

const sendNotPostedRecentlyMessage72Hours = async (count: number, discordUser: User, accountabilityChannel: TextChannel) => {
  switch(count) {
    case 1: {
      const msg = await discordUser.send(notPostedRecentlyMessage_72_1(discordUser, accountabilityChannel));
      logger.info(`Sent channel message: ${msg.id} - hasNotPostedRecently`);
      break;
    }
    case 2: {
      const msg = await discordUser.send(notPostedRecentlyMessage_72_2(discordUser, accountabilityChannel));
      logger.info(`Sent channel message: ${msg.id} - hasNotPostedRecently`);
      break;
    }
    case 3: {
      const msg = await discordUser.send(notPostedRecentlyMessage_72_3(discordUser, accountabilityChannel));
      logger.info(`Sent channel message: ${msg.id} - hasNotPostedRecently`);
      break;
    }
    default: throw new Error(`hasNotPostedRecently - 72 hours - generateRandomNumber - created an incorrect generator number - ${count}`);
  }
}

const hasNotPostedRecently = async (client: Client) => {
  try {
    const db_users: DBUser[] =
      await knex('db_users')
        .select('id', 'discord_id', 'sent36HourMessage', 'sent72HourMessage');

    for (const db_user of db_users) {
      if (db_user.discord_id !== getNFDBotId()) {
        // First check to see if they've even posted in #accountability yet.
        const fetchAllAccountabilityMessages = await knex('accountability_messages').where('db_users_id', db_user.id).select('id');

        if (fetchAllAccountabilityMessages.length > 0) {
          if (!db_user.sent36HourMessage) {
            // Next, see if they've posted in the past 36 hours.
            const today = moment();
            const thirtySixHoursBeforeToday =  process.env.NODE_ENV !== 'production' ? (
              moment().subtract(10, 'seconds')
            ) : (
              moment().subtract(36, 'hours')
            );

            const accountabilityMessages = await knex('accountability_messages').where('db_users_id', db_user.id).whereBetween('created_at', [thirtySixHoursBeforeToday.toDate(), today.toDate()]);

            if (accountabilityMessages.length === 0) {
              const discordUser = await client.users.fetch(db_user.discord_id);

              if (discordUser) {
                // Update sent36HourMessage on user
                await knex('db_users').where('id', db_user.id).update({sent36HourMessage: true});

                const accountabilityChannel: TextChannel = await getChannel(client, NFDChannelType.Accountability_Accountability);
                const count: number = generateRandomNumber(1, 3);

                await sendNotPostedRecentlyMessage36Hours(count, discordUser, accountabilityChannel);

                logger.info(`hasNotPostedRecently - ${discordUser.username} - 36 hours`);
              }
            }
          }

          if (!db_user.sent72HourMessage) {
            // Next, see if they've posted in the past 72 hours.
            const today = moment();
            const seventyTwoHoursBeforeToday =  process.env.NODE_ENV !== 'production' ? (
              moment().subtract(15, 'seconds')
            ) : (
              moment().subtract(72, 'hours')
            );

            const accountabilityMessages = await knex('accountability_messages').where('db_users_id', db_user.id).whereBetween('created_at', [seventyTwoHoursBeforeToday.toDate(), today.toDate()]);

            if (accountabilityMessages.length === 0) {
              const discordUser = await client.users.fetch(db_user.discord_id);
              if (discordUser) {

                // Update sent72HourMessage on user
                await knex('db_users').where('id', db_user.id).update({sent72HourMessage: true});

                const accountabilityChannel: TextChannel = await getChannel(client, NFDChannelType.Accountability_Accountability);
                const count = generateRandomNumber(1, 3);

                await sendNotPostedRecentlyMessage72Hours(count, discordUser, accountabilityChannel);

                logger.info(`hasNotPostedRecently - ${discordUser.username} - 72 hours`);
              }
            }
          }
        }
      }
    }
  } catch(error) {
    const juliusReade: ClientUser | null = client.user;
    // await juliusReade?.send(`hasNotPostedRecently - ${error}`);
    logger.error(`hasNotPostedRecently - ${error}`);
    throw new Error(`hasNotPostedRecently - ${error}`);
  }
}

export default hasNotPostedRecently;