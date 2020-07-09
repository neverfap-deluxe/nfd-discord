import { Client, TextChannel } from "discord.js";
import { getChannel } from "../../../util/util";
import { NFDChannelType } from "../../../types";
import logger from "../../../util/logger";

const automatedDiscordServerBumpReminder = async (client: Client): Promise<void> => {
  try {
    const generalChannel: TextChannel = await getChannel(client, NFDChannelType.RecoveryChat_GeneralChat);
    await generalChannel.send('Someone please type `!d bump` into the server!');
    logger.info('discord server bump');

  } catch(error) {
    logger.error(`automatedDiscordServerBumpReminder - ${error}`);
    throw new Error(`automatedDiscordServerBumpReminder - ${error}`);
  }
}

export default automatedDiscordServerBumpReminder;
