const knex = require('../../db/knex');
const moment = require('moment');

const { 
  createGraphData,
} = require('../util/graph-util');

const graphqlQuery = {
  getLineGraph: async (_, { collection_type, from, to }) => {
    const momentFrom = moment().add(from, 'days');
    const momentTo = moment().add(to, 'days');

    const accountability_messages =
      await knex(collection_type)
        .whereBetween('created_at', [momentFrom, momentTo])
        .select('created_at');

    return createGraphData(accountability_messages, momentFrom, momentTo);
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

