const knex = require('../../db/knex');

const accountabilityTallyQuery = {
  getAllAccountabilityTally: async (/* _, {} */) => {
    // TODO: add additional information into this. 
    const db_users = 
      await knex('accountability_tally')
        .select('*');
    return db_users;
  },
  getAccountabilityTally: async (_, { id }) => {
    // TODO: add additional information into this. 
    // I suppose this would be best served as a date range.
    const db_users = 
      await knex('accountability_tally')
        .where('id', id)
        .select('*');
    return db_users;
  },

};

const accountabilityTallyMutation = {
  // createUser: async (_, { username, email, thumbUrl, accessToken, idToken, expiresAt }) => {

  // },
};

module.exports = {
  accountabilityTallyQuery,
  accountabilityTallyMutation,
};

