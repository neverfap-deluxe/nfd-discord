// import { Client, TextChannel } from 'discord.js';
// import moment from 'moment';

// import knex from '../../../util/knex';
// import logger from '../../../util/logger';
// import { getChannel } from '../../../util/util';
// import { AccountabilityMessage, NFDChannelType } from '../../../types';

// const userReactedToYourAccountabilityPost = async (client: Client) => {
//   try {
//     const accountabilityChannel: TextChannel = await getChannel(client, NFDChannelType.Accountability_Accountability);
//     const now = moment();
//     const twelveHoursLess = moment().subtract(12, 'hour');

//     const accountabilityMessages: AccountabilityMessage[] =
//       await knex('accountability_messages')
//         .whereBetween('created_at', [twelveHoursLess.toDate(), now.toDate()])
//         .select('db_users_id');

//     for (const accountabilityMessage of accountabilityMessages) {
//       // TODO: Where does this come from? discordUser
//       const db_user = await knex('db_users').where('id', discordUser.id).select('discord_id');
//       const discordUser = await client.users.fetch(db_user.discord_id);

//       if (discordUser) {
//         const accountabilityReacts =
//           await knex('accountability_reacts')
//             .where('db_users_id_reacted_to', accountabilityMessage.db_users_id)
//             .whereBetween('created_at', [nowLessHour.toDate(), now.toDate()])
//             .select('username', 'emoji_name');

//         // TODO Figure out exactly how this function works.
//         _.groupBy(accountabilityReacts, );

//         let reactedToList = `These users reacted to your <#${accountabilityChannel}> post in the last hour!\n`;

//         for (const react of accountabilityReacts) {
//           reactedToList += `\`${react.username}\` reacted with ${react.emoji_name}!\n`;
//         }
//         reactedToList += `\nYou can help others out by reacting to their posts too!`
//         await discordUser.send(reactedToList);
//       }
//     }

//     // client: Client, logger: Logger, discordUser, discordUserReactedTo, juliusReade, emojiName

//     // original code - unfortunately the issue is that it will show @invalid-user because the users aren't cached, which is kind of crappy.
//     // await discordUserReactedTo.send(`<@${discordUser}> reacted to your <#${accountabilityChannel}> post ${emojiName}`)
//     // await juliusReade.send(`<@${discordUser}> sent ${discordUserReactedTo} an accountability react! ${emojiName}`);

//     // await discordUserReactedTo.send(`\`${discordUser.username}\` reacted to your <#${accountabilityChannel}> post ${emojiName}`)
//     // await juliusReade.send(`\`${discordUser.username}\` sent \`${discordUserReactedTo.username}\` an accountability react! ${emojiName}`);

//   } catch(error) {
//     const juliusReade =
//     await juliusReade.send(`userReactedToYourAccountabilityPost - ${error}`);
//     logger.error(`userReactedToYourAccountabilityPost - ${error}`);
//     throw new Error(`userReactedToYourAccountabilityPost - ${error}`);
//   }
// }

// export default userReactedToYourAccountabilityPost;
