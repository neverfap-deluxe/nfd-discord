// const _ = require('lodash');
const moment = require('moment');
const uuidv4 = require('uuid/v4');

const knex = require('../../db/knex');

const theseUsersReactedToday = async (client, logger, juliusReade, today1153, today1207) => {
  try {
    const today = moment().format();
    const twentyFourHoursBeforeToday =  process.env.MODE === 'dev' ? (
      moment().subtract(20, 'seconds')
    ) : (
      moment().subtract(24, 'hours')
    );

    const db_users = await knex('db_users').select('id', 'discord_id');
    const accountabilityChannel = client.channels.get(process.env.ACCOUNTABILITY_CHANNEL_ID);
    let finalMessageTitle = `Oh, and an ${accountabilityChannel} emoji react update as well!\n\n`;
    let finalMessageCount = 0;
    let finalMessageBody = '';
    let finalTextString = finalMessageTitle;
  
    const dailyMilestonesChannel = client.channels.get(process.env.DAILY_MILESTONES_CHANNEL_ID);
    await dailyMilestonesChannel.send(finalMessageTitle);  

    for (const db_user of db_users) {
      const discordUser = await client.fetchUser(db_user.discord_id);
      const messageReacts = await knex('accountability_reacts').where('db_users_id', db_user.id).whereBetween('created_at', [twentyFourHoursBeforeToday, today]);
      if (messageReacts.length > 0) {
        if (finalMessageBody.length > 1600) {
          await dailyMilestonesChannel.send(finalMessageBody);    
          finalTextString += finalMessageBody;
          finalMessageBody = '';
        }

        finalMessageCount += messageReacts.length;

        const reactedEmojis = messageReacts.map(react => react.emoji_name).join("");
        switch(messageReacts.length) {
          case 1: finalMessageBody += `${discordUser} - ${messageReacts.length} emoji react! ${reactedEmojis}\n`; break;
          default: finalMessageBody += `${discordUser} - ${messageReacts.length} emoji reacts! ${reactedEmojis}\n`;
        }
      }
    }

    const finalMessageCountFull = `Total accountability reacts: ${finalMessageCount}\n\n`;
    await dailyMilestonesChannel.send(finalMessageCountFull);

    finalTextString += finalMessageCountFull;
    await knex('accountability_tally').whereBetween('tally_date', [today1153, today1207]).update({react_message: finalTextString});
    await juliusReade.send(`Accountability react tally posted for today.`);

    // create for tomorrow
    const tomorrow1200 = moment('12:00','HH:mm').add(1, 'day').format();
    await knex('accountability_tally').insert({id: uuidv4(), tally_date: tomorrow1200});

  } catch(error) {
    await juliusReade.send(`theseUsersReactedToday - ${error}`);
    logger.error(`theseUsersReactedToday - ${error}`)
    throw new Error(`theseUsersReactedToday - ${error}`);
  }
};

module.exports = theseUsersReactedToday;