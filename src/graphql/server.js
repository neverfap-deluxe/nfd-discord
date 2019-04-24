require('reflect-metadata');

const { GraphQLServer } = require('graphql-yoga')
const requireGraphQLFile = require('require-graphql-file');
const typeDefs = requireGraphQLFile('./typeDefs/schema.graphql');

// resolvers
const { accountabilityMessagesQuery, /* accountabilityMessagesMutation */ } = require('./resolvers/accountabilityMessagesResolvers'); 
const { accountabilityReactsQuery, /* accountabilityReactsMutation */ } = require('./resolvers/accountabilityReactsResolvers'); 
const { dbUsersResolversQuery, /* dbUsersResolversMutation */ } = require('./resolvers/dbUsersResolvers'); 
const { accountabilityTallyQuery, /* accountabilityTallyMutation */ } = require('./resolvers/accountabilityTallyResolvers');

const resolvers = {
  Query: {
    ...accountabilityMessagesQuery,
    ...accountabilityReactsQuery,
    ...dbUsersResolversQuery,
    ...accountabilityTallyQuery,
  },
  // Mutation: {
  //   ...accountabilityMessagesMutation,
  //   ...accountabilityReactsMutation,
  //   ...dbUsersResolversMutation,
  // }
};

const server = new GraphQLServer({ typeDefs, resolvers })

module.exports = server;
