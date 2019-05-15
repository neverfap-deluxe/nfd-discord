const knex = require('../../db/knex');
const uuidv4 = require('uuid/v4');

const automatedCommitmentTallyMessages = require('./automatedCommitmentTallyMessages');
const postTallyUpdate = require('./postTallyUpdate');
const upvoteUserPost = require('./upvoteUserPost');
const updateTier = require('./updateTier');

const insertAccountabilityMessage = async (client, logger, db_user, discordUser, message, twitterClient, redditClient, juliusReade) => {
  try {
    if (db_user.sent36HourMessage) {
      await knex('db_users').where('id', db_user.id).update({sent36HourMessage: false});
    }
    if (db_user.sent72HourMessage) {
      await knex('db_users').where('id', db_user.id).update({sent72HourMessage: false});
    }
    if (db_user.sentYesterdayPostMessage) {
      await knex('db_users').where('id', db_user.id).update({sentYesterdayPostMessage: false});
    }
    
    const primary_id = uuidv4();
    const accountabilityObject = {
      id: primary_id,
      message_id: message.id,
      db_users_id: db_user.id,
      content: message.content,
      username: discordUser.username,
    };

    await knex('accountability_messages').returning('content').insert(accountabilityObject);
    logger.info(`accountabilityMessage added to database - ${discordUser.username}`);

    await juliusReade.send(`hello ${message}`);

    automatedCommitmentTallyMessages(client, logger, db_user, discordUser, juliusReade);
    upvoteUserPost(client, logger, db_user, discordUser, message, juliusReade);
    postTallyUpdate(client, logger, db_user, discordUser, juliusReade);
    updateTier(client, logger, db_user, discordUser, message, juliusReade);

    // sendSocialStatuses(client, logger, db_user, discordUser, juliusReade);

  } catch(error) {
    await juliusReade.send(`accountabilityMessage failed to add to database - ${discordUser.username} - ${error}`);
    logger.error(`insertAccountabilityMessage - ${error}`);
    throw new Error(`insertAccountabilityMessage - ${error}`);
  }
}

module.exports = insertAccountabilityMessage;