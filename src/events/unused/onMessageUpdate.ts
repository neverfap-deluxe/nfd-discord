// I have no idea what this is for.

// import _ from 'lodash');
// import uuidv4 from 'uuid/v4');
// import knex from '../db/knex');

// import moment from 'moment');
//

// import {
//   isAccountabilityMessage,
// } from '../util/util');

// const onMessageUpdate = (client) => {
//   return async function (oldMessage, newMessage) {

//     if (newMessage.channel.id === getChannelId(NFDChannelType.Accountability_Accountability)) {
//       if (isAccountabilityMessage(newMessage.content)) {

//         const today = moment().format();
//         const twelveHoursBefore =  process.env.NODE_ENV !== 'production' ? (
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

// export default onMessageUpdate;
