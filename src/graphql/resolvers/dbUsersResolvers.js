const knex = require('../../db/knex');

const dbUsersQuery = {
  getAllDbUsers: async (/* _, {} */) => {
    const db_users = 
      await knex('db_users')
        .select('id', 'email', 'username', 'created_at');

    return db_users;
  },

  getDbUser: async (_, { id }) => {
    const db_user = await knex('db_users')
      .where('id', id)
      .select('id', 'email', 'username', 'created_at');

    return db_user;
  },
};

const dbUsersMutation = {
  // createUser: async (_, { username, email, thumbUrl, accessToken, idToken, expiresAt }) => {

  // },
};

module.exports = {
  dbUsersQuery,
  dbUsersMutation,
};

