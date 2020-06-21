// import { MessageEmbed, Client, TextChannel } from 'discord.js';

// import { generateRandomNumber } from '../../util/util';
// import { getChannel } from '../../util/util';
// import logger from '../../util/logger';

// const emergencyMessage1 = (_emergencyChannel: TextChannel) => new MessageEmbed().setTitle("#emergency advice").setDescription(
//   `Oh nooooo, it's an emergency! Type and enter \`!emergency\` to receive some deliciously accurate advice.`);

// const emergencyMessage2 = (_emergencyChannel: TextChannel) => new MessageEmbed().setTitle("#emergency advice").setDescription(
//   `You've got this buddy! Type and enter \`!emergency\` for a step-by-step guide on relaxing and calming down.`);

// const sendEmergencyMessage = async (count: number, emergencyChannel: TextChannel) => {
//   switch(count) {
//     case 1: {
//       const msg = await emergencyChannel.send(emergencyMessage1(emergencyChannel));
//       return msg;
//     }
//     case 2: {
//       const msg = await emergencyChannel.send(emergencyMessage2(emergencyChannel));
//       return msg;
//     }
//     default: throw new Error(`automatedEmergencyMessages - generateRandomNumber - created an incorrect generator number - ${count}`);
//   }
// }

// const automatedEmergencyMessages = async (client: Client): Promise<void> => {
//   try {
//     const emergencyChannel: TextChannel = await getChannel(client, DUNNO);
//     const lastMessageID = emergencyChannel.lastMessageID;

//     if (lastMessageID) {
//       const lastMessage = await emergencyChannel.messages.fetch(lastMessageID);
//       if (lastMessage.author.id !== getNFDBotId()) {
//         const count = generateRandomNumber(1, 2);
//         const msg = await sendEmergencyMessage(count, emergencyChannel);
//         logger.info(`Sent channel message: ${msg.id} - automatedEmergencyMessages`);
//       }
//     }
//   } catch(error) {
//     // NOTE: There is an issue (okay, it's not an 'issue' in that it's breaking anything)
//     // However if lastMessageID doesn't fetch anything, then it will throw an error.
//     throw new Error(`automatedEmergencyMessages - ${error}`);
//   }
// }

// export default automatedEmergencyMessages;