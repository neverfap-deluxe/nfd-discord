const knex = require('../../db/knex');

const accountabilityMessagesQuery = {
  getAllAccountabilityMessages: async (_, {}) => {
    
  },
  getAccountabilityMessage: async (_, { id }) => {

  },

};

const accountabilityMessagesMutation = {
  // createUser: async (_, { username, email, thumbUrl, accessToken, idToken, expiresAt }) => {

  // },
};

module.exports = {
  accountabilityMessagesQuery,
  accountabilityMessagesMutation,
};

