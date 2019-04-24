const knex = require('../../db/knex');

const { 
  createGraphData,
} = require('../util/graph-util');

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
  getDbUsersLineGraph: async (_, { from, to }) => {
    const db_users = 
      await knex('db_users')
        .whereBetween('created_at', [from, to])
        .select('created_at');

    return createGraphData(db_users, from, to);
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

