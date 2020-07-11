import { Client, TextChannel } from "discord.js";
import { getChannel } from "../../../util/util";
import { NFDChannelType } from "../../../types";
import logger from "../../../util/logger";

const automatedDiscordServerFAK = async (client: Client): Promise<void> => {
  try {
    const generalChannel: TextChannel = await getChannel(client, NFDChannelType.RecoveryChat_GeneralChat);
    await generalChannel.send('FAK');
    logger.info('discord server FAK');

  } catch(error) {
    logger.error(`automatedDiscordServerFAK - ${error}`);
    throw new Error(`automatedDiscordServerFAK - ${error}`);
  }
}

export default automatedDiscordServerFAK;
