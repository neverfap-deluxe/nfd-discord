import { isAccountabilityMessage, getChannelId } from "../../../../util/util";
import { Client, TextChannel, User, Message, ClientUser } from "discord.js";
import { DBUser, NFDChannelType } from "../../../../types";
import moment from "moment";
import knex from "../../../../util/knex";
import validateAccountabilityPost from "./validateAccountabilityPost";
import insertAccountabilityMessage from "./insertAccountabilityMessage";
import logger from "../../../../util/logger";

const accountabilityChannelActions = async (client: Client, channel: TextChannel, db_user: DBUser, discordUser: User, message: Message) => {
  if (channel.id === getChannelId(NFDChannelType.Accountability_Accountability)) {
    if (isAccountabilityMessage(message.content)) {
      const today = moment().toDate();
      const twelveHoursBefore =  process.env.NODE_ENV !== 'production' ? (
        moment().subtract(10, 'seconds')
      ) : (
        moment().subtract(12, 'hours')
      );

      const reccentAccountabilityMessages = await knex('accountability_messages').where('db_users_id', db_user.id).whereBetween('created_at', [twelveHoursBefore.toDate(), today]);

      if (reccentAccountabilityMessages.length === 0) {
        const isValid = await validateAccountabilityPost(client, db_user, discordUser, channel, message);

        // TODO Will need to create a function which rechecks an edited version. Will leave it as is for now.
        // if (isValid) {
          await insertAccountabilityMessage(client, db_user, discordUser, channel, message);
        // }
      } else {
        const juliusReade: ClientUser | null = client.user;
        // await juliusReade?.send(`posted in accountability too soon, so didn't go into database - ${discordUser.username}`);
        logger.error(`posted in accountability too soon, so didn't go into database - ${discordUser.username}`);
      }
    }
  }
};

export default accountabilityChannelActions;
