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

        // TODO, still get 24 hour time frame, not total
        const accountabilityReactCount = await knex('accountability_reacts').where('db_users_id', db_user.id).whereBetween('created_at', [twentyFourHoursBeforeToday, today]).count();
        const count = parseInt(accountabilityReactCount[0].count);
        
        const reactedEmojis = accountabilityReactCount.map(react => react.name);

        finalMessage += `${discordUser} - ${count} reacts!\n`;  
      }
    }
    
    const announcementsChannel = client.channels.get(process.env.ANNOUNCEMENT_CHANNEL_ID);

    await announcementsChannel.send(finalMessage);

  } catch(error) {
    await juliusReade.send(`theseUsersReactedToday - ${error}`);
    logger.error(`theseUsersReactedToday - ${error}`)
    throw new Error(`theseUsersReactedToday - ${error}`);
  }
};

module.exports = theseUsersReactedToday;