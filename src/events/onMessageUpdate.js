// const _ = require('lodash');
// const uuidv4 = require('uuid/v4');
// const knex = require('../db/knex');

// const moment = require('moment');
// const knex = require('../../db/knex');

// const {
//   isAccountabilityMessage,
// } = require('../util/util');

// const onMessageUpdate = (client) => {
//   return async function (oldMessage, newMessage) {

//     if (newMessage.channel.id === process.env.ACCOUNTABILITY_CHANNEL_ID) {
//       if (isAccountabilityMessage(newMessage.content)) {

//         const today = moment().format();
//         const twelveHoursBefore =  process.env.MODE === 'dev' ? (
//           moment().subtract(10, 'seconds')
//         ) : (
//           moment().subtract(12, 'hours')
//         );
      
//         const reccentAccountabilityMessages = await knex('accountability_messages')
//           .where('db_users_id', db_user.id)
//           .whereBetween('created_at', [twelveHoursBefore, today]);
  
//         const oldMessageFull = await knex('accountability_messages') 
//           .where('id', oldMessage.id)

//         if (reccentAccountabilityMessages.length === 0 && oldMessageFull.length === 0) {

//         }

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
