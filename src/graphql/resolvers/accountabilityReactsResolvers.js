const knex = require('../../db/knex');

const { 
  createGraphData,
} = require('../util/graph-util');

const accountabilityReactsQuery = {
  getAllAccountabilityReacts: async (/* _, {} */) => {
    // TODO have granularity in what it processes depending on whether it wants db_user etc.
    
    const accountability_reacts = 
      await knex('accountability_reacts')
        .select('id', 'username', 'emoji_id', 'emoji_name', 'created_at');

    let full_accountability_reacts;
    for (const accountability_react of accountability_reacts) {  
      const db_user = 
        await knex('db_users')
          .where('id', accountability_react.db_users_id)
          .select('id', 'email', 'username', 'created_at');

      accountability_react.db_user = db_user;

      const db_user_reacted_to = 
        await knex('db_users')
          .where('id', accountability_react.db_users_id_reacted_to)
          .select('id', 'email', 'username', 'created_at');

      accountability_react.db_user_reacted_to = db_user_reacted_to;

      const accountability_message = 
        await knex('db_users')
          .where('id', accountability_react.db_users_id_reacted_to)
          .select('id', 'username', 'content', 'created_at');
        // NOTE: Missing DbUser, but we will assume that it's the db_user_reacted_to anyway.

      accountability_react.accountability_message = accountability_message

      full_accountability_reacts.push(accountability_react);
    }

    return full_accountability_reacts;
  },
  getAccountabilityReact: async (_, { id }) => {
    const accountability_react = await knex('accountability_reacts').where('id', id).select('*');

    const db_user = 
      await knex('db_users')
        .where('id', accountability_react.db_users_id)
        .select('id', 'email', 'username', 'created_at');

    accountability_react.db_user = db_user;

    const db_user_reacted_to = 
      await knex('db_users')
        .where('id', accountability_react.db_users_id_reacted_to)
        .select('id', 'email', 'username', 'created_at');

    accountability_react.db_user_reacted_to = db_user_reacted_to;

    const accountability_message = 
      await knex('db_users')
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

