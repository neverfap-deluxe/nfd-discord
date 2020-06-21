import { ClientUser, Client, Message, User, TextChannel, Channel } from 'discord.js';
import logger from '../util/logger';
import { fetchOrCreateDbUser } from '../util/db';
import { getNFDBotId } from '../util/util';

import accountabilityChannelActions from './channels/accountability/onMessage/accountabilityChannelActions';
import neverFapDeluxeBotCommands from './channels/onMessage/neverFapDeluxeBotCommands';

const onMessage = (client: Client) =>
  async (message: Message) => {
    try {
      const channel: Channel = message.channel;
      const discordUser: User = message.author;

      if (discordUser.id !== getNFDBotId()) {
        const db_user = await fetchOrCreateDbUser(discordUser);
        await accountabilityChannelActions(client, channel as TextChannel, db_user, discordUser, message);
        await neverFapDeluxeBotCommands(client, channel as TextChannel, db_user, discordUser, message);
      }
    } catch(error) {
      logger.error(`onMessage - ${error}`);
      throw new Error(`onMessage - ${error}`);
    }
  };

export default onMessage;
