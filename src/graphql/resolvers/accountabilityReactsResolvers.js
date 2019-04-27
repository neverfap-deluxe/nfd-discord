const knex = require('../../db/knex');
const moment = require('moment');

const accountabilityReactsQuery = {
  getAccountabilityReactsStats: async (/* _, {} */) => {
    const today = moment();
    const yesterday = moment().subtract(1, 'day');

    const accountabilityMessageCount = await knex('accountability_reacts').count();
    const accountabilityMessage24HourCount = await knex('accountability_reacts').whereBetween('created_at', [yesterday, today]).count();

    return {
      total: parseInt(accountabilityMessageCount[0].count),
      total24Hour: parseInt(accountabilityMessage24HourCount[0].count),
    }
  },
  getAllAccountabilityReacts: async (_, { limit }) => {
    const enforceLimit = limit > 100 ? (
      100
    ) : ( 
      limit || 100
    );
    const accountability_reacts = 
      await knex('accountability_reacts')
        .limit(enforceLimit)
        .orderBy('created_at', 'desc')
        .select('id', 'username', 'emoji_id', 'emoji_name', 'created_at');

    return accountability_reacts;
  },
  getSomeFullAccountabilityReacts: async (_, { limit }) => {
    const enforceLimit = limit > 100 ? (
      100
    ) : ( 
      limit || 100
    );

    const accountability_reacts = 
      await knex('accountability_reacts')
        .limit(enforceLimit)
        .orderBy('created_at', 'desc')
        .select('id', 'username', 'emoji_id', 'emoji_name', 'db_users_id', 'db_users_id_reacted_to', 'created_at');

    let full_accountability_reacts = [];
    for (const accountability_react of accountability_reacts) {  
      const db_user_reacted_to = 
        await knex('db_users')
          .where('id', accountability_react.db_users_id_reacted_to)
          .select('id', 'email', 'username', 'created_at');

      accountability_react.db_user_reacted_to = db_user_reacted_to;

      const accountability_message = 
        await knex('accountability_messages')
          .where('id', accountability_react.db_users_id_reacted_to)
          .select('id', 'username', 'content', 'created_at');
        // NOTE: Missing DbUser, but we will assume that it's the db_user_reacted_to anyway.

      accountability_react.accountability_message = accountability_message

      full_accountability_reacts.push(accountability_react);
    }

    return full_accountability_reacts;
  },
  getAccountabilityReact: async (_, { id }) => {
    const accountability_react = await knex('accountability_reacts')
      .where('id', id).select('*');

    const db_user_reacted_to = 
      await knex('db_users')
        .where('id', accountability_react.db_users_id_reacted_to)
        .select('id', 'email', 'username', 'created_at');

    accountability_react.db_user_reacted_to = db_user_reacted_to;

    const accountability_message = 
      await knex('accountability_messages')
        .where('id', accountability_react.db_users_id_reacted_to)
        .select('id', 'username', 'content', 'created_at');
      // NOTE: Missing DbUser, but we will assume that it's the db_user_reacted_to anyway.

    accountability_react.accountability_message = accountability_message

    return accountability_react;
  },

};


const accountabilityReactsMutation = {
  // createUser: async (_, { username, email, thumbUrl, accessToken, idToken, expiresAt }) => {

  // },
};

module.exports = {
  accountabilityReactsQuery,
  accountabilityReactsMutation,
};




// let full_accountability_reacts = [];
// for (const accountability_react of accountability_reacts) {  
//   const db_user = 
//     await knex('db_users')
//       .where('id', accountability_react.db_users_id)
//       .select('id', 'email', 'username', 'created_at');

//   accountability_react.db_user = db_user;

//   const db_user_reacted_to = 
//     await knex('db_users')
//       .where('id', accountability_react.db_users_id_reacted_to)
//       .select('id', 'email', 'username', 'created_at');

//   accountability_react.db_user_reacted_to = db_user_reacted_to;

//   const accountability_message = 
//     await knex('accountability_messages')
//       .where('id', accountability_react.db_users_id_reacted_to)
//       .select('id', 'username', 'content', 'created_at');
//     // NOTE: Missing DbUser, but we will assume that it's the db_user_reacted_to anyway.

//   accountability_react.accountability_message = accountability_message

//   full_accountability_reacts.push(accountability_react);
// }

// return full_accountability_reacts;
// },
// getAccountabilityReact: async (_, { id }) => {
// const accountability_react = await knex('accountability_reacts')
//   .where('id', id).select('*');

// const db_user = 
//   await knex('db_users')
//     .where('id', accountability_react.db_users_id)
//     .select('id', 'email', 'username', 'created_at');

// accountability_react.db_user = db_user;

// const db_user_reacted_to = 
//   await knex('db_users')
//     .where('id', accountability_react.db_users_id_reacted_to)
//     .select('id', 'email', 'username', 'created_at');

// accountability_react.db_user_reacted_to = db_user_reacted_to;

// const accountability_message = 
//   await knex('accountability_messages')
//     .where('id', accountability_react.db_users_id_reacted_to)
//     .select('id', 'username', 'content', 'created_at');
//   // NOTE: Missing DbUser, but we will assume that it's the db_user_reacted_to anyway.

// accountability_react.accountability_message = accountability_message

// return accountability_react;
// },
