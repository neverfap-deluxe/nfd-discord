import { Client, TextChannel, ClientUser } from 'discord.js'
import moment, { Moment } from 'moment';
import { v4 as uuidv4 } from 'uuid';

import knex from '../../../../util/knex';
import { generateTallyDates } from '../../../../util/time';
import { getChannel } from '../../../../util/util';
import logger from '../../../../util/logger';
import { NFDChannelType } from '../../../../types';

const theseUsersReactedToday = async (client: Client) => {
  try {
    const today1153: Moment = process.env.NODE_ENV !== 'production' ? moment('0:28', 'HH:mm') : moment('11:53', 'HH:mm');
    const today1207: Moment = process.env.NODE_ENV !== 'production' ? moment('23:30', 'HH:mm') : moment('12:07', 'HH:mm');

    const { startOfTally, endOfTally } = generateTallyDates();
    const accountabilityChannel: TextChannel = await getChannel(client, NFDChannelType.Accountability_Accountability);
    const dailyMilestonesChannel: TextChannel = await getChannel(client, NFDChannelType.Accountability_DailyMilestones);

    const db_users = await knex('db_users').select('id', 'discord_id');

    let finalMessageTitle = `Oh, and an <#${accountabilityChannel}> emoji react update as well!\n\n`;
    let finalMessageCount = 0;
    let finalMessageBody = '';
    let finalTextString = finalMessageTitle;

    await dailyMilestonesChannel.send(finalMessageTitle);

    for (const db_user of db_users) {
      const discordUser = await client.users.fetch(db_user.discord_id);
      const messageReacts =
        await knex('accountability_reacts')
          .where('db_users_id', db_user.id)
          .whereBetween('created_at', [startOfTally.toDate(), endOfTally.toDate()])
          .select('emoji_name');

      if (messageReacts.length > 0) {
        finalMessageCount += messageReacts.length;

        // TODO: Filter only supported emoji
        const reactedEmojis = messageReacts.map(react => react.emoji_name).join("");

        // TODO Check this and validate whether `\`${discordUser.username}\` is correct.
        switch(messageReacts.length) {
          case 1: finalMessageBody += `\`${discordUser.username}\` - ${messageReacts.length} emoji react! ${reactedEmojis}\n`; break;
          default: finalMessageBody += `\`${discordUser.username}\` - ${messageReacts.length} emoji reacts! ${reactedEmojis}\n`;
        }

        await dailyMilestonesChannel.send(finalMessageBody);
        finalTextString += finalMessageBody;
        finalMessageBody = '';
      }
    }

    const finalMessageCountFull = `Total accountability reacts: ${finalMessageCount}\n\n`;
    await dailyMilestonesChannel.send(finalMessageCountFull);

    finalTextString += finalMessageCountFull;
    await knex('accountability_tally').whereBetween('tally_date', [today1153.toDate(), today1207.toDate()]).update({react_message: finalTextString, total_reacts: finalMessageCount});

    // So if it doesn't get to this point, then it never creates the accountability tally. Instead, it should just create it daily. 
    // const tomorrow1200 = moment('12:00','HH:mm').add(1, 'day').format();
    // await knex('accountability_tally').insert({id: uuidv4(), tally_date: tomorrow1200});

  } catch(error) {
    const juliusReade: ClientUser | null = client.user;
    // await juliusReade?.send(`theseUsersReactedToday - ${error}`);
    logger.error(`theseUsersReactedToday - ${error}`)
    throw new Error(`theseUsersReactedToday - ${error}`);
  }
};

export default theseUsersReactedToday;
