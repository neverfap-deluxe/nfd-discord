const knex = require('../../db/knex');
const moment = require('moment');

const accountabilityMessagesQuery = {
  getAccountabilityMessagesStats: async (/* _, {} */) => {
    const today = moment();
    const yesterday = moment().subtract(1, 'day');

    const accountabilityMessageCount = await knex('accountability_messages').count();
    const accountabilityMessage24HourCount = await knex('accountability_messages').whereBetween('created_at', [yesterday, today]).count();

    return {
      total: parseInt(accountabilityMessageCount[0].count),
      total24Hour: parseInt(accountabilityMessage24HourCount[0].count),
    }
  },
  getAllAccountabilityMessages: async (_, { limit }) => {
    const enforceLimit = limit > 100 ? (
      100
    ) : (
      limit || 100
    );

    const accountability_messages =
      await knex('accountability_messages')
        .limit(enforceLimit)
        .orderBy('created_at', 'desc')
        .select('accountability_messages.id', 'accountability_messages.username', 'content', 'db_users_id', 'accountability_messages.created_at');

    return accountability_messages;
  },
  getAllFullAccountabilityMessages: async (_, { limit }) => {
    const enforceLimit = limit > 100 ? (
      100
    ) : (
      limit || 100
    );

    // There is literally no need for a leftJoin AT ALL
    const accountability_messages =
      await knex('accountability_messages')
        .limit(enforceLimit)
        // .leftJoin('db_users', 'db_users.id', 'accountability_messages.db_users_id')
        .select('id', 'username', 'content', 'db_users.id', 'accountability_messages.db_users_id');

    return accountability_messages;
  },
  getFullAccountabilityMessage: async (_, { id }) => {
    const accountability_message = 
      await knex('accountability_messages')
      .where('id', id)
      // .leftJoin('db_users', 'db_users.id', 'accountability_messages.db_users_id')
      .select('id', 'username', 'content', 'db_users_id', 'created_at');

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



// getAllFullAccountabilityMessages: async (_, { limit }) => {
//   const enforceLimit = limit > 100 ? (
//     100
//   ) : (
//     limit || 100
//   );

//   const accountability_messages =
//     await knex('accountability_messages')
//       .limit(enforceLimit)
//       .select('id', 'username', 'content', 'db_users_id', 'created_at');
  
//   let full_accountability_messages = [];
//   for (const accountability_message of accountability_messages) {
//     const db_user =
//       await knex('db_users')
//         .where('id', accountability_message.db_users_id)
//         .select('id', 'email', 'username', 'created_at');
//       // TODO: put these selects into const arrays. 
//     accountability_message.db_user = db_user;
//     full_accountability_messages.push(accountability_message);
//   }

//   return full_accountability_messages;
// },
