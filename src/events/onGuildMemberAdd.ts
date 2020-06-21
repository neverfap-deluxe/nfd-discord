import { ClientUser, Client, GuildMember, PartialGuildMember } from "discord.js";
import logger from '../util/logger';
import memberWelcome from "./channels/onGuildMemberAdd/memberWelcome";

const onGuildMemberAdd = (client: Client) =>
  async (member: GuildMember | PartialGuildMember) => {
    try {
      await member.roles.add(process.env.INITIATE_ROLE_ID as string);
      await memberWelcome(client, member);
    } catch(error) {
      // const juliusReade: ClientUser | null = client.user;
      // await juliusReade?.send(`onGuildMemberAdd - ${process.env.INITIATE_ROLE_ID} - ${member} - ${error}`)
      logger.error(`onGuildMemberAdd - ${process.env.INITIATE_ROLE_ID} - ${member} - ${error}`);
      throw new Error(`onGuildMemberAdd - ${process.env.INITIATE_ROLE_ID} - ${member} - ${error}`);
    }
  };

export default onGuildMemberAdd;