const knex = require('../../db/knex');

const { 
  createGraphData,
} = require('../util/graph-util');

const accountabilityMessagesQuery = {
  getAllAccountabilityMessages: async (/* _, {} */) => {
    const accountability_messages = 
      await knex('accountability_messages')
        .select('id', 'username', 'content', 'created_at');

    let full_accountability_messages;
    for (const accountability_message of accountability_messages) {  
      const db_user = 
        await knex('db_users')
          .where('id', accountability_message.db_users_id)
          .select('id', 'email', 'username', 'created_at');
        // TODO: put these selects into const arrays. 
      accountability_message.db_user = db_user;
      full_accountability_messages.push(accountability_message);
    }

    return full_accountability_messages;
  },
  getAccountabilityMessage: async (_, { id }) => {
    const accountability_message = 
      await knex('accountability_messages')
      .where('id', id)
      .select('id', 'username', 'content', 'created_at');

    const db_user = await knex('db_users')
      .where('id', accountability_message.db_users_id)
      .select('id', 'email', 'username', 'created_at');

    accountability_message.db_user = db_user;

    return accountability_message;
  }
};

const accountabilityMessagesMutation = {
  // createUser: async (_, { username, email, thumbUrl, accessToken, idToken, expiresAt }) => {

  // },
};

module.exports = {
  accountabilityMessagesQuery,
  accountabilityMessagesMutation,
};

