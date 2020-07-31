import { Client, TextChannel, User, Message, ClientUser } from "discord.js";
import { DBUser, NFDChannelType } from "../../../types";
import { getChannel } from "../../../util/util";
import nodeEmoji from 'node-emoji';

const stayHydrated = async (waterClient: Client) => {
  try {
    const generalChannel: TextChannel = await getChannel(waterClient, NFDChannelType.RecoveryChat_GeneralChat);

    const emoji = nodeEmoji.emojify(':ocean:')

    if ((Math.random() * 100) > 99) {
      generalChannel.send(`Fuck Hydration.`);
    } else {
      generalChannel.send(`Don't forget to remain hydrated at all times! ${emoji}`);
    }
  } catch(error) {
    throw new Error(`stayHydrated - ${error}`);
  }
};

export default stayHydrated;
