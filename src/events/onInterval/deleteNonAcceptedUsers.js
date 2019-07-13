const knex = require('../../db/knex');
const moment = require('moment');

const deleteNonAcceptedUsers = async (client, logger, juliusReade) => {
  try {
    // const now = moment();
    // const nowLessHour = moment().subtract(1, 'hour');
  
    // This is potentially very dangerous, since no one has their thing set to has_accepted.
    // const db_users = await knex('db_users').whereBetween('created_at', [nowLessHour, now]).select('id', 'discord_id', 'has_accepted');
  
    // maybe instead just get all nfd users who are initiate, since I'm not sure if they're 
    // added to the database on login.

    // for (const db_user of db_users) {
    //   if(!db_user.has_accepted) {

    //   }
    // }
  
  } catch(error) {
    await juliusReade.send(`userReactedToYourAccountabilityPost - ${error}`);
    logger.error(`userReactedToYourAccountabilityPost - ${error}`);
    throw new Error(`userReactedToYourAccountabilityPost - ${error}`);
  }
}

module.exports = deleteNonAcceptedUsers;