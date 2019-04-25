require('reflect-metadata');

const { GraphQLServer } = require('graphql-yoga')
const requireGraphQLFile = require('require-graphql-file');
const typeDefs = requireGraphQLFile('./typeDefs/schema.graphql');

// resolvers
const { accountabilityMessagesQuery, /* accountabilityMessagesMutation */ } = require('./resolvers/accountabilityMessagesResolvers'); 
const { accountabilityReactsQuery, /* accountabilityReactsMutation */ } = require('./resolvers/accountabilityReactsResolvers'); 
const { dbUsersQuery, /* dbUsersMutation */ } = require('./resolvers/dbUsersResolvers'); 
const { accountabilityTallyQuery, /* accountabilityTallyMutation */ } = require('./resolvers/accountabilityTallyResolvers');
const { graphqlQuery, /* graphqlMutation */ } = require('./resolvers/graphResolvers');

const resolvers = {
  Query: {
    ...accountabilityMessagesQuery,
    ...accountabilityReactsQuery,
    ...dbUsersQuery,
    ...accountabilityTallyQuery,
    ...graphqlQuery,
  },
  // Mutation: {
  //   ...accountabilityMessagesMutation,
  //   ...accountabilityReactsMutation,
  //   ...dbUsersResolversMutation,
  // }
};

const server = new GraphQLServer({ typeDefs, resolvers })

server.express.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'https://league.neverfapdeluxe.com');
  res.header('Access-Control-Allow-Origin', 'https://localhost:3000');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

module.exports = server;
