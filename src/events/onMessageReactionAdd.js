
const _ = require('lodash');
const uuidv4 = require('uuid/v4');
const knex = require('../db/knex');

const {
  isAccountabilityMessage,
} = require('../util/util');

const insertReact = require('./onMessageReactionAdd/insertReact');

const onMessageReactionAdd = (client, logger) => {
  return async function (messageReaction, discordUser) { // user that applied the emoji
    try {
      const messageChannelId = _.get(messageReaction, 'message.channel.id');
      const messageContent = _.get(messageReaction, 'message.content');

      if (messageChannelId === process.env.ACCOUNTABILITY_CHANNEL_ID) {
        if (isAccountabilityMessage(messageContent)) {
        
          const db_user = await knex('db_users').where('discord_id', discordUser.id).first();
          const juliusReade = await client.fetchUser(process.env.JULIUS_READE_ID);

          if (db_user) {
            insertReact(client, logger, db_user, discordUser, juliusReade, messageReaction);
          } else {
            const primary_id = uuidv4();
            const created_db_user = await knex('db_users').returning('*').insert({ id: primary_id, discord_id: discordUser.id, username: discordUser.username });
            insertReact(client, logger, created_db_user, discordUser, juliusReade, messageReaction);
          }
        }
      }
    } catch(error) {
      logger.error(`onMessageReactionAdd - ${error}`);
      throw new Error(`onMessageReactionAdd - ${error}`);
    }  
  }
}

module.exports = onMessageReactionAdd;
