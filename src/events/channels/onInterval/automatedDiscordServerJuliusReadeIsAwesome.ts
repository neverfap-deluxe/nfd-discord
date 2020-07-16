import { Client, TextChannel } from "discord.js";
import { getChannel } from "../../../util/util";
import { NFDChannelType } from "../../../types";
import logger from "../../../util/logger";

const automatedDiscordServerJuliusReadeIsAwesome = async (client: Client): Promise<void> => {
  try {
    const generalChannel: TextChannel = await getChannel(client, NFDChannelType.RecoveryChat_GeneralChat);
    await generalChannel.send('Quick! Someone please type in `!gay`!');
    logger.info('discord server Julius Reade Is Awesome');

  } catch(error) {
    logger.error(`automatedDiscordServerJuliusReadeIsAwesome - ${error}`);
    throw new Error(`automatedDiscordServerJuliusReadeIsAwesome - ${error}`);
  }
}

export default automatedDiscordServerJuliusReadeIsAwesome;
