// const _ = require('lodash');
// const knex = require('../../db/knex');

// const insertAccountabilityMessage = require('./insertAccountabilityMessage');

// NOTE: This hasn't been tested, nor has it been decided to be use.
// const fetchAllPreviousMessages = async (channel, dbUser, discordUser) => {
//   const lastMessageId = _.get(discordUser, 'lastMessageID')
//   if (lastMessageId) {
//     const accountabilityMessage = await knex('accountability_messages').where('message_id', lastMessageId).first();

//     if (!accountabilityMessage) {
//       const channelMessages = await channel.fetchMessages({ limit: 100 });
//       let counter = 0;
//       for (const message of channelMessages) {
//         counter += 1;
//         insertAccountabilityMessage(dbUser, message);
//       }
//       console.log(`Finished adding ${counter} messages for ${dbUser.username}`);
//     }
//   }
// }

// module.exports = fetchAllPreviousMessages;

//   fetchAllPreviousMessages(channel, dbUser, discordUser, message);
