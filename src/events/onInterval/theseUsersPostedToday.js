// const _ = require('lodash');
const moment = require('moment');

const knex = require('../../db/knex');

const theseUsersPostedToday = async (client) => {
  // try {
  //   const today = moment().format();
  //   const twentyFourHoursBeforeToday =  process.env.MODE === 'dev' ? (
  //     moment().subtract(10, 'seconds')
  //   ) : (
  //     moment().subtract(24, 'hours')
  //   );

  //   const accountabilityMessages = await knex('accountability_messages').whereBetween('created_at', [twentyFourHoursBeforeToday, today]);

  //   for (const message of accountabilityMessages) {


  //   const db_users = await knex('db_users').select('id', 'discord_id');

  //     if (db_user.discord_id !== process.env.NEVERFAP_DELUXE_BOT_ID) {
        
  //     }
  //   }
  // } catch(error) {
  //   throw new Error(`theseUsersPostedToday - ${error}`);
  // }
};

module.exports = theseUsersPostedToday;