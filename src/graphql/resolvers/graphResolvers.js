const knex = require('../../db/knex');
const moment = require('moment');

const { 
  createGraphData,
} = require('../util/graph-util');

const graphqlQuery = {
  getLineGraph: async (_, { collection_type, from, to, graph_type }) => {
    const momentFrom = moment().add(from, 'days');
    const momentTo = moment().add(to, 'days');
  
    const collection =
      await knex(collection_type)
        .whereBetween('created_at', [momentFrom, momentTo])
        .select('created_at');
  
    const createdLineGraph = [createGraphData(collection, from, to, collection_type, graph_type)];
  
    return createdLineGraph;
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

