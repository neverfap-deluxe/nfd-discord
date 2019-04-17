// const _ = require('lodash');
const moment = require('moment');

const knex = require('../../db/knex');

const theseUsersReactedToday = async (client, logger, juliusReade) => {
  try {
    const today = moment().format();
    const twentyFourHoursBeforeToday =  process.env.MODE === 'dev' ? (
      moment().subtract(20, 'seconds')
    ) : (
      moment().subtract(24, 'hours')
    );

    const messageReacts = await knex('accountability_reacts').whereBetween('created_at', [twentyFourHoursBeforeToday, today]);
    const accountabilityChannel = client.channels.get(process.env.ACCOUNTABILITY_CHANNEL_ID);
    let finalMessage = `Oh, and an ${accountabilityChannel} emoji react update as well!\n\n`;

    for (const react of messageReacts) {
      const db_user = await knex('db_users').where('id', react.db_users_id).select('id', 'discord_id').first();
      if (db_user) {
        const discordUser = await client.fetchUser(db_user.discord_id);

        const accountabilityReactCount = await knex('accountability_reacts').where('db_users_id', db_user.id).whereBetween('created_at', [twentyFourHoursBeforeToday, today]).count();
        const count = parseInt(accountabilityReactCount[0].count);
        
        // so, it actually will 
        
        const reactedEmojis = accountabilityReactCount.map(react => react.name).join("");
        switch(count) {
          case 1:
            finalMessage += `${discordUser} - ${count} emoji react! ${reactedEmojis}\n`; break;
          default:
            finalMessage += `${discordUser} - ${count} emoji reacts! ${reactedEmojis}\n`;
        }
      }
    }
    
    const dailyMilestonesChannel = client.channels.get(process.env.DAILY_MILESTONES_CHANNEL_ID);

    await dailyMilestonesChannel.send(finalMessage);

  } catch(error) {
    await juliusReade.send(`theseUsersReactedToday - ${error}`);
    logger.error(`theseUsersReactedToday - ${error}`)
    throw new Error(`theseUsersReactedToday - ${error}`);
  }
};

module.exports = theseUsersReactedToday;