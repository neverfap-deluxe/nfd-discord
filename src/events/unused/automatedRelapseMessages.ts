// import get from 'lodash/get';
// import { MessageEmbed, TextChannel, Client, Message } from 'discord.js';

// import { generateRandomNumber, getChannel } from '../../util/util';
// import logger from '../../util/logger';

// const relapseMessage1 = (_relapseChannel: TextChannel) => new MessageEmbed().setTitle("#relapse advice").setDescription(
//   `Need some help dealing with your relapse? Please checkout this comprehensive guide I've put together https://neverfapdeluxe.com/post-relapse-academy`);

// const relapseMessage2 = (_relapseChannel: TextChannel) => new MessageEmbed().setTitle("#relapse advice").setDescription(
//   `You've relapsed and everything feels terrible. Well, I'm here to tell you that everything is going to be OK. For further advice please checkout this comprehensive guide I've put together https://neverfapdeluxe.com/post-relapse-academy`);

// const sendRelapseMessage = async (relapseChannel: TextChannel): Promise<Message> => {
//   const count = generateRandomNumber(1, 2);
//   switch(count) {
//     case 1: {
//       const msg = await relapseChannel.send(relapseMessage1(relapseChannel));
//       return msg;
//     }
//     case 2: {
//       const msg = await relapseChannel.send(relapseMessage2(relapseChannel));
//       return msg;
//     }
//     default: throw new Error(`sendRelapseMessage - wrong count range. Count: ${count}`);
//   }
// }

// const automatedRelapseMessages = async (client: Client) => {
//   try {
//     const relapseChannel: TextChannel = await getChannel(client, TODO);
//     const lastMessageID: string | null = relapseChannel.lastMessageID;

//     if (lastMessageID) {
//       const lastMessage = await relapseChannel.messages.fetch(lastMessageID);
//       if (get(lastMessage, 'author.id') !== getNFDBotId()) {

//         const msg = await sendRelapseMessage(relapseChannel);
//         logger.info(`Sent channel message: ${msg.id} - automatedRelapseMessages`);
//       }
//     }
//   } catch(error) {
//     // NOTE: There is an issue (okay, it's not an 'issue' in that it's breaking anything)
//     // However if lastMessageID doesn't fetch anything, then it will throw an error.
//     throw new Error(`automatedRelapseMessages - ${error}`);
//   }
// }

// export default automatedRelapseMessages;