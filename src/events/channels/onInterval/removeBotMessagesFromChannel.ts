import { Client, TextChannel, Message, Collection, MessageEmbed } from "discord.js";

import { getChannel, getNFDBotId } from '../../../util/util';
import logger from '../../../util/logger';
import { NFDChannelType } from "../../../types";

// NOTE: These functionalities have been removed from the system,
// because I didn't feel they really provided much/any value.
// Especially since it only makes the check every 10 minutes, so fetching only 25 messages seems pointless.

// const DELETE_COMMAND_DELAY = process.env.NODE_ENV !== 'production' ? (
//   1000 * 1 * 4 // 4 seconds.
// ) : (
//   1000 * 60 * 10 // Ten minutes.
// );

// const deleteUserMessageIfCommand = async (message: [string, Message]): Promise<void> => {
//   try {
//     const messageContent: string = message[1].content;
//     const messageCreatedAt: number = message[1].createdTimestamp;

//     const isCommand: boolean = messageContent.startsWith("!") || messageContent.startsWith("Sorry, the command");

//     if (isCommand) {
//       if ((new Date().getTime() - new Date(messageCreatedAt).getTime()) > DELETE_COMMAND_DELAY) {
//         const msg = await message[1].delete();
//         logger.info(`Deleted message from ${msg.author.username} - deleteUserMessageIfCommand`)
//       }
//     }
//   } catch(error) {
//     logger.error(`deleteUserMessageIfCommand - ${error}`);
//     throw new Error(`deleteUserMessageIfCommand - ${error}`);
//   }
// };

// const deleteBotMessages = async (message: [string, Message]) => {
//   try {
//     const messageEmbed: MessageEmbed = message[1].embeds[0];
//     const messageEmbedCreatedAt: Date | null = messageEmbed?.createdAt;
//     console.log(messageEmbed);
//     if (messageEmbedCreatedAt) {
//       const messageAuthorId = message[1].author.id;
//       if (messageAuthorId === getNFDBotId()) {
//         if (messageEmbed.title !== "#general advice" && messageEmbed.title !== "#accountability advice") {
//           // moment().subtract(10, 'minutes).isBefore(moment(messageEmbed.message.created_at))
//           if ((new Date().getTime() - new Date(messageEmbedCreatedAt).getTime()) > DELETE_COMMAND_DELAY) {
//             const msg = await message[1].delete();
//             logger.info(`Deleted message from ${msg.author.username} - deleteBotMessages`)
//           }
//         }
//       }
//     }
//   } catch(error) {
//     logger.error(`deleteBotMessages - ${error}`);
//     throw new Error(`deleteBotMessages - ${error}`);
//   }
// };

const removeWelcomeMessageFromNewNeverFappersIfUserLeaves = async (message: [string, Message]) => {

  const messageEmbed: MessageEmbed = message[1].embeds[0];
  // console.log(messageEmbed);
  // TODO Figure this out.
  // I'm assuming this is actually a different client.on event
}

const removeBotMessagesFromChannel = async (client: Client): Promise<void> => {
  // const accountabilityChannel: TextChannel = await getChannel(client, NFDChannelType.Accountability_Accountability);
  // const accountabilityChannelMessages = await accountabilityChannel.messages.fetch({ limit: 25 });

  // if (accountabilityChannelMessages) {
  //   for (const message of accountabilityChannelMessages) {
  //     // await deleteUserMessageIfCommand(message);
  //     // await deleteBotMessages(message);
  //   }
  // }

  const newNeverFappersChannel: TextChannel = await getChannel(client, NFDChannelType.RecoveryChat_NewNeverFappers);
  const newNeverFappersChannelMessages = await newNeverFappersChannel.messages.fetch({ limit: 25 });
  if (newNeverFappersChannelMessages) {
    for (const messageManager of newNeverFappersChannelMessages) {
      await removeWelcomeMessageFromNewNeverFappersIfUserLeaves(messageManager);
    }
  }
};

export default removeBotMessagesFromChannel;
