import 'reflect-metadata';

import { GraphQLServer } from 'graphql-yoga';
import requireGraphQLFile from 'require-graphql-file';
const typeDefs = requireGraphQLFile('./typeDefs/schema.graphql');

// resolvers
import { accountabilityMessagesQuery, /* accountabilityMessagesMutation */ } from './resolvers/accountabilityMessagesResolvers';
import { accountabilityReactsQuery, /* accountabilityReactsMutation */ } from './resolvers/accountabilityReactsResolvers';
import { dbUsersQuery, /* dbUsersMutation */ } from './resolvers/dbUsersResolvers';
import { accountabilityTallyQuery, /* accountabilityTallyMutation */ } from './resolvers/accountabilityTallyResolvers';
import { graphqlQuery, /* graphqlMutation */ } from './resolvers/graphResolvers';

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

// server.express.use(cors());

// function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', 'https://league.neverfapdeluxe.com');
//   res.header('Access-Control-Allow-Origin', 'https://league.neverfapdeluxe.com/graphql');
//   res.header('Access-Control-Allow-Origin', 'https://staging.neverfapdeluxe.com');
//   res.header('Access-Control-Allow-Origin', 'https://staging.neverfapdeluxe.com/graphql');
//   res.header('Access-Control-Allow-Origin', 'https://localhost:3000');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   next();
// }

// GraphQL Server
const options = {
  port: 2001,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
  cors: {
    credentials: true,
    preflightContinue: true,
    origin: ["https://league.neverfapdeluxe.com", "http://localhost:3000"] // your frontend url.
  }
};

const startGraphqlServer = () => {
  server.start(options, () => console.log(`GraphQL Server is running on localhost:${options.port}`))
};

export default startGraphqlServer;
