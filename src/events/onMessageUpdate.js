// // const _ = require('lodash');
// // const uuidv4 = require('uuid/v4');
// // const knex = require('../db/knex');

// const {
//   isAccountabilityMessage,
// } = require('../util/util');

// const onMessageUpdate = (client) => {
//   return async function (oldMessage, newMessage) {

//     if (newMessage.channel.id === process.env.ACCOUNTABILITY_CHANNEL_ID) {
//       if (isAccountabilityMessage(message.content)) {

//         // console.log(oldMessage);
//         // console.log(newMessage);
//         // await knex('accountability_messages'). 

//         // This will need to check, first of all if the original message was already put into the database 
//         // If the original message is already in the database, then don't add it again. 
//         // Maybe also check the date to see if it was added recently.
//         // Maybe also check 
//       }
//     }
//   }
// }

// module.exports = onMessageUpdate;
