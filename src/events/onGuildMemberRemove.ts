import { Client, GuildMember, PartialGuildMember, TextChannel, Message, MessageEmbed } from "discord.js";
import logger from '../util/logger';
import { getChannel, getNFDBotId } from "../util/util";
import { NFDChannelType } from "../types";

const removeWelcomeMessageFromNewNeverFappersIfUserLeaves = async (message: [string, Message], member: GuildMember | PartialGuildMember): Promise<void> => {
  if (message[1].author.id === getNFDBotId()) {
    const users = message[1].mentions.users;
    const usersArray = [...users.keys()];
    console.log(usersArray)
    if (usersArray.includes(member.id)) {
      await message[1].delete();
    }
    return;
  }

  if (message[1].author.id === member.id) {
    await message[1].delete();
  }
}

const onGuildMemberRemove = (client: Client) =>
  async (member: GuildMember | PartialGuildMember) => {
    try {
      const newNeverFappersChannel: TextChannel = await getChannel(client, NFDChannelType.RecoveryChat_NewNeverFappers);
      const newNeverFappersChannelMessages = await newNeverFappersChannel.messages.cache;
      // fetch({ limit: 25 });
      if (newNeverFappersChannelMessages) {
        for (const messageManager of newNeverFappersChannelMessages) {
          await removeWelcomeMessageFromNewNeverFappersIfUserLeaves(messageManager, member);
        }
      }
    } catch(error) {
      // const juliusReade: ClientUser | null = client.user;
      // await juliusReade?.send(`onGuildMemberRemove - ${process.env.INITIATE_ROLE_ID} - ${member} - ${error}`)
      logger.error(`onGuildMemberRemove - ${process.env.INITIATE_ROLE_ID} - ${member} - ${error}`);
      throw new Error(`onGuildMemberRemove - ${process.env.INITIATE_ROLE_ID} - ${member} - ${error}`);
    }
  };

export default onGuildMemberRemove;


