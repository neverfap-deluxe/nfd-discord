import { Client, ClientUser } from 'discord.js';
import moment from 'moment';

import knex from '../../../util/knex';
import logger from '../../../util/logger';
import { getChannel } from '../../../util/util';
import { NFDChannelType } from '../../../types';

const dailyNeverFapDeluxeReport = async (client: Client) => {
  try {
    const twentyFourHoursBeforeToday =  process.env.NODE_ENV !== 'production' ? (
      moment().subtract(8, 'seconds')
    ) : (
      moment().subtract(24, 'hours')
    );

    const twelveHoursBeforeToday =  process.env.NODE_ENV !== 'production' ? (
      moment().subtract(4, 'seconds')
    ) : (
      moment().subtract(12, 'hours')
    );

    const accountabilityMessages =
      await knex('accountability_messages')
        .whereBetween('created_at', [twentyFourHoursBeforeToday.toDate(), twelveHoursBeforeToday.toDate()])
        .select('id', 'content', 'db_users_id');

    if (accountabilityMessages.length > 0) {
      for (const message of accountabilityMessages) {

        const db_user =
          await knex('db_users')
          .where('id', message.db_users_id)
          .select('id', 'discord_id', 'sentYesterdayPostMessage')
          .first();

        if (db_user && !db_user.sentYesterdayPostMessage) {
          await knex('db_users').where('id', db_user.id).update({sentYesterdayPostMessage: true});

          const discordUser = await client.users.fetch(db_user.discord_id);

          const accountabilityMessageCount = await knex('accountability_messages').where('db_users_id', db_user.id).count();
          const accountabilityReactMessageCount = await knex('accountability_reacts').where('db_users_id', db_user.id).count();

          const accountabilityReacts =
            await knex('accountability_reacts')
              .andWhere('accountability_messages_id', message.id)
              .select('emoji_name');

          const messageEmojis = accountabilityReacts.map(react => react.emoji_name).join("");

          const accountabilityChannel = await getChannel(client, NFDChannelType.Accountability_Accountability);

const finalMessage = `**The Daily NeverFap Deluxe Report**\n
Total commitment: ${parseInt(accountabilityMessageCount[0].count as string)} ${parseInt(accountabilityMessageCount[0].count as string) === 1 ? 'Day' : 'Days'}
Total emoji reacts: ${parseInt(accountabilityReactMessageCount[0].count as string)} Emojis\n
Here's a friendly reminder of what you posted yesterday in <#${accountabilityChannel}>!\n
\`\`\`${message.content}\`\`\`${messageEmojis && `\nPost emojis: ${messageEmojis}\n`}
If you need any help with anything, please interact with our lovely community! We're more-than happy to help! :heart:`;

          await discordUser.send(finalMessage)
          logger.info(`${discordUser.username} - yesterday post sent`)
        }
      }
    }
  } catch(error) {
    const juliusReade: ClientUser | null = client.user;
    // await juliusReade?.send(`dailyNeverFapDeluxeReport - ${error}`);
    logger.error(`dailyNeverFapDeluxeReport - ${error}`)
    throw new Error(`dailyNeverFapDeluxeReport - ${error}`);
  }
};

export default dailyNeverFapDeluxeReport;