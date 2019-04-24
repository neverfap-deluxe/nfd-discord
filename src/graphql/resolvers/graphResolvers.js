const knex = require('../../db/knex');

const { 
  createGraphData,
} = require('../util/graph-util');

const graphqlQuery = {
  getLineGraph: async (_, { collection_type, from, to }) => {
    const accountability_messages = 
      await knex('accountability_messages')
        .whereBetween('created_at', [from, to])
        .select('created_at');

    return createGraphData(accountability_messages, from, to);
  },
};

const graphqlMutation = {
  // createUser: async (_, { username, email, thumbUrl, accessToken, idToken, expiresAt }) => {

  // },
};

module.exports = {
  graphqlQuery,
  graphqlMutation,
};

