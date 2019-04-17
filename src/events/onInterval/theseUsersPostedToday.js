// const _ = require('lodash');
const moment = require('moment');
const knex = require('../../db/knex');

const theseUsersReactedToday = require('./theseUsersReactedToday');

const theseUsersPostedToday = async (client, logger, juliusReade) => {
  try {
    const today = moment().format();
    const twentyFourHoursBeforeToday =  process.env.MODE === 'dev' ? (
      moment().subtract(20, 'seconds')
    ) : (
      moment().subtract(24, 'hours')
    );

    const accountabilityMessages = await knex('accountability_messages').whereBetween('created_at', [twentyFourHoursBeforeToday, today]);
    const accountabilityChannel = client.channels.get(process.env.ACCOUNTABILITY_CHANNEL_ID);
    let finalMessage = `${accountabilityChannel} update!\n\n`;

    for (const message of accountabilityMessages) {
      const db_user = await knex('db_users').where('id', message.db_users_id).select('id', 'discord_id').first();
      if (db_user) {
        const discordUser = await client.fetchUser(db_user.discord_id);
        const accountabilityMessageCount = await knex('accountability_messages').where('db_users_id', db_user.id).count();
        const count = parseInt(accountabilityMessageCount[0].count);
  
        switch(count) {
          case 1: 
            finalMessage += `${discordUser} - Day ${count} - First Day Dynamite! :boom:\n`; break;
          case 3: 
            finalMessage += `${discordUser} - Day ${count} - Triple Threat!\n :stuck_out_tongue_closed_eyes:`; break;
          case 7:
            finalMessage += `${discordUser} - Day ${count} - One Week Champion! :lifter:\n`; break;
          case 10: 
            finalMessage += `${discordUser} - Day ${count} - 10 Day Mania!\n`; break;
          case 14: 
            finalMessage += `${discordUser} - Day ${count} - Two Week Wonder!\n`; break;
          case 20: 
            finalMessage += `${discordUser} - Day ${count} - 20 Day Admiration!\n`; break;
          case 21: 
            finalMessage += `${discordUser} - Day ${count} - 3 Week Hedonist!\n`; break;
          case 25: 
            finalMessage += `${discordUser} - Day ${count} - Quarter Master! :gem:\n`; break;
          case 28: 
            finalMessage += `${discordUser} - Day ${count} - 4 Week OMFG! :bangbang:\n`; break;
          case 30: 
            finalMessage += `${discordUser} - Day ${count} - 30 Day Craze!\n`; break;
          case 35: 
            finalMessage += `${discordUser} - Day ${count} - 5 Week Wowzer! :punch:\n`; break;
          case 40:
            finalMessage += `${discordUser} - Day ${count} - 40 Day Domination!\n`; break;
          case 42:
            finalMessage += `${discordUser} - Day ${count} - 6 Week Kaiser!\n`; break;
          case 49:
            finalMessage += `${discordUser} - Day ${count} - 7 Week Emperor!\n`; break;
          case 50:
            finalMessage += `${discordUser} - Day ${count} - HALF A BLOODY CENTURY! :statue_of_liberty:\n`; break;
          default:
            finalMessage += `${discordUser} - Day ${count}\n`;
        }
      }
    }
    
    const dailyMilestonesChannel = client.channels.get(process.env.DAILY_MILESTONES_CHANNEL_ID);
    await dailyMilestonesChannel.send(finalMessage);

    // theseUsersReactedToday(client, logger, juliusReade);

  } catch(error) {
    await juliusReade.send(`theseUsersPostedToday - ${error}`);
    logger.error(`theseUsersPostedToday - ${error}`)
    throw new Error(`theseUsersPostedToday - ${error}`);
  }
};

module.exports = theseUsersPostedToday;