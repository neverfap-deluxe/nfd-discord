
// const _ = require('lodash');
const uuidv4 = require('uuid/v4');
const knex = require('../db/knex');

const onMessageReactionAdd = (client) => {
  return async function (messageReaction, discordUser) {
    try {
      // user that applied the emoji
      const dbUser = await knex('db_users').where('discord_id', discordUser.id).first();

      if (dbUser) {
        // add them to database.
      } else {
      const primary_id = uuidv4();
      const createdDbUser = await knex('db_users').returning('*').insert({ id: primary_id, discord_id: discordUser.id });
        // add them to database.
      }
    } catch(error) {
      throw new Error(`onMessageReactionAdd - ${error}`);
    }  
  }
}

module.exports = onMessageReactionAdd;
