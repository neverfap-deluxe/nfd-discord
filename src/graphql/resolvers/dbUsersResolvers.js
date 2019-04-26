const knex = require('../../db/knex');
const moment = require('moment');

const dbUsersQuery = {
  getDbUsersStats: async (/* _, {} */) => {
    const today = moment();
    const yesterday = moment().subtract(1, 'day');

    const dbUsersCount = await knex('db_users').count();
    const dbUsers24HourCount = await knex('db_users').whereBetween('created_at', [yesterday, today]).count();

    // const mostAccountabilityReacts = 
    //   await knex('db_users')
    //     .where('db')
    // Get users that have created the most accountability reacts.

    // TODO
    // - topDBUsers in terms of accountability posting.
    // - topDBUsers in terms of consequtive streak
    // - topDBUsers in terms of lifetime accountability reacts.

    return {
      total: parseInt(dbUsersCount[0].count),
      total24Hour: parseInt(dbUsers24HourCount[0].count),
    }
  },
  getAllDbUsers: async (_, { limit }) => {
    const enforceLimit = limit > 100 ? (
      100
    ) : ( 
      limit || 100
     );

    const db_users =
      await knex('db_users')
        .limit(enforceLimit)
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

