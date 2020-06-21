
import { Client, MessageReaction, User, PartialUser } from 'discord.js';

import logger from '../util/logger';
import { fetchOrCreateDbUser } from '../util/fetchOrCreateDbUser';
import { isAccountabilityMessage, getChannelId } from '../util/util';

import insertReact from './channels/accountability/onMessageReactionAdd/insertReact';
import reactTallyUpdate from './channels/daily_milestones/onMessageReactionAdd/reactTallyUpdate';
import { NFDChannelType } from '../types';

const onMessageReactionAdd = (client: Client) =>
  async (messageReaction: MessageReaction, discordUser: User | PartialUser): Promise<void> => {
    // NOTE: This will only be run on cached messages. So for example, if you were to restart the bot,
    // this would not work on old messages.
    try {
      const messageChannelId: string = messageReaction.message.channel.id;
      const messageContent: string = messageReaction.message.content;

      if (messageChannelId === getChannelId(NFDChannelType.Accountability_Accountability)) {

        if (isAccountabilityMessage(messageContent)) {
          // NOTE: This basically proves that they are not a PartialUser, which is basically has zero information.
          if (discordUser.username) {
            const db_user = await fetchOrCreateDbUser(discordUser);

            await insertReact(client, db_user, discordUser, messageReaction);
            await reactTallyUpdate(client, db_user, discordUser);
          }
        }
      }
    } catch(error) {
      logger.error(`onMessageReactionAdd - ${error}`);
      throw new Error(`onMessageReactionAdd - ${error}`);
    }
  };

export default onMessageReactionAdd;
