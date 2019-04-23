const knex = require('../../db/knex');

const accountabilityReactsQuery = {
  getAllAccountabilityReacts: async (_, {}) => {
    
  },
  getAccountabilityReact: async (_, { id }) => {

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

