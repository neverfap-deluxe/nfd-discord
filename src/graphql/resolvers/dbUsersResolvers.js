const knex = require('../../db/knex');

const dbUsersQuery = {
  getAllDbUsers: async (_, {}) => {
    
  },

  getDbUser: async (_, { id }) => {

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

