import { Client, TextChannel } from "discord.js";
import { getChannel } from "../../../util/util";
import { NFDChannelType } from "../../../types";
import logger from "../../../util/logger";

const automatedDiscordServerBump = async (client: Client): Promise<void> => {
  try {
    const mileStonesChannel: TextChannel = await getChannel(client, NFDChannelType.Accountability_DailyMilestones);
    await mileStonesChannel.send('!d bump');
    logger.info('discord server bump');

  } catch(error) {
    logger.error(`automatedDiscordServerBump - ${error}`);
    throw new Error(`automatedDiscordServerBump - ${error}`);
  }
}

export default automatedDiscordServerBump;
