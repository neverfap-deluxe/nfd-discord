
import moment from 'moment';
import knex from '../../util/knex';

import {
  createGraphData,
} from '../util/graph-util';

export const graphqlQuery = {
  getLineGraph: async (_, { collection_type, from, to, graph_type }) => {
    const momentFrom = moment().add(from, 'days');
    const momentTo = moment().add(to, 'days');

    const collection =
      await knex(collection_type)
        .whereBetween('created_at', [momentFrom.toDate(), momentTo.toDate()])
        .select('created_at');

    const createdLineGraph = [createGraphData(collection, from, to, collection_type, graph_type)];

    return createdLineGraph;
  },
};

export const graphqlMutation = {
  // createUser: async (_, { username, email, thumbUrl, accessToken, idToken, expiresAt }) => {

  // },
};
