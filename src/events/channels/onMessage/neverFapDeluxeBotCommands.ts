import { Client, TextChannel, User, Message, ClientUser } from "discord.js";
import { DBUser, NFDChannelType } from "../../../types";
import { getChannel } from "../../../util/util";
import { RULES_COMMAND, HELP_COMMAND, COMMANDS_COMMAND, CHANNELS_COMMAND, ACCOUNTABILITY_COMMAND, ACCOUNTABILITY_EXAMPLE_COMMAND, CHEATSHEET_COMMAND, ANTI_CHEATSHEET_COMMAND, EMERGENCY_COMMAND, GAY_COMMAND, FAK_COMMAND } from "../../../const/COMMAND";
import { rulesMessage, commandListMessage, channelListMessage, accountabilityMessage, accountabilityExampleMessage, cheatsheetMessage, antiCheatsheetMessage, emergencyMessage } from "../../../const/MESSAGE";
import logger from "../../../util/logger";
import emojiNameListCurated from "../../../util/emojiNameListCurated";
import nodeEmoji from 'node-emoji';

const sendBotMessage = async (cmd: string, channel: TextChannel, accountabilityChannel: TextChannel) => {
  switch(cmd) {
    case RULES_COMMAND: {
      const msg = await channel.send(rulesMessage(accountabilityChannel));
      logger.info(`Sent channel message: ${msg.id} - neverFapDeluxeBotCommands`);
      break;
    }
    case GAY_COMMAND: {
      const randomEmoji = emojiNameListCurated[Math.floor(Math.random() * emojiNameListCurated.length)]
      const emoji = nodeEmoji.emojify(`:${randomEmoji}:`);

      const msg = await channel.send(`Julius Reade is awesome. ${emoji}`);
      logger.info(`Sent channel message: ${msg.id} - neverFapDeluxeBotCommands`);
      break;
    }
    case FAK_COMMAND: {
      const msg = await channel.send(`FAK`);
      logger.info(`Sent channel message: ${msg.id} - neverFapDeluxeBotCommands`);
      break;
    }
    case HELP_COMMAND:
    case COMMANDS_COMMAND: {
      const msg = await channel.send(commandListMessage);
      logger.info(`Sent channel message: ${msg.id} - neverFapDeluxeBotCommands`);
      break;
    }
    case CHANNELS_COMMAND: {
      const msg = await channel.send(channelListMessage);
      logger.info(`Sent channel message: ${msg.id} - neverFapDeluxeBotCommands`);
      break;
    }
    case ACCOUNTABILITY_COMMAND: {
      const msg = await channel.send(accountabilityMessage(accountabilityChannel));
      logger.info(`Sent channel message: ${msg.id} - neverFapDeluxeBotCommands`);
      break;
    }
    case ACCOUNTABILITY_EXAMPLE_COMMAND: {
      const msg = await channel.send(accountabilityExampleMessage(accountabilityChannel));
      logger.info(`Sent channel message: ${msg.id} - neverFapDeluxeBotCommands`);
      break;
    }
    case CHEATSHEET_COMMAND: {
      const msg = await channel.send(cheatsheetMessage);
      logger.info(`Sent channel message: ${msg.id} - neverFapDeluxeBotCommands`);
      break;
    }
    case ANTI_CHEATSHEET_COMMAND: {
      const msg = await channel.send(antiCheatsheetMessage);
      logger.info(`Sent channel message: ${msg.id} - neverFapDeluxeBotCommands`);
      break;
    }
    case EMERGENCY_COMMAND: {
      const msg = await channel.send(emergencyMessage);
      logger.info(`Sent channel message: ${msg.id} - neverFapDeluxeBotCommands`);
      break;
    }
    case 'disboard': break;
    case 'd': break;
    case 'Play': break;
    case 'p': break;
    case 'P': break;
    case 'accept': {
      // NOTE: I have decided to remove this condition for now, and accept everyone.
      // This has now been renamed to `memberWelcome` in `onGuildMemberAdd`
      // if (channel.id === process.env.WELCOME_CHANNEL_ID) {
      //   await memberAccept(client, channel, message, db_user, discordUser);
      // }
      break;
    }
    default: {
      const msg = await channel.send("Sorry, the command doesn't exist (perhaps you put a space inbetween the `!` and the `command`). Please type `!commands` to show all available commands.");
      logger.info(`Sent channel message: ${msg.id} - neverFapDeluxeBotCommands`);
      break;
    }
  }
}

const neverFapDeluxeBotCommands = async (client: Client, channel: TextChannel, db_user: DBUser, discordUser: User, message: Message) => {
  try {
    const accountabilityChannel: TextChannel = await getChannel(client, NFDChannelType.Accountability_Accountability);
    const  messageContent = message.content;

    // if (new RegExp(/g *a+ *y+/i).test(messageContent)) { // NOTE: please change it to this if you ever decide to reintroduce it, because the current one does not work well.
    //   const emoji = nodeEmoji.emojify(`:man_firefighter:`);
    //   await channel.send(`Yes, Eliott Mahn is gay. Thank you for reminding everyone. ${emoji}`);
    // }

    if (messageContent.substring(0, 1) == '!') {
      const args = messageContent.substring(1).split(' ');
      const cmd = args[0];

      await sendBotMessage(cmd, channel, accountabilityChannel);
    }
  } catch(error) {
    const juliusReade: ClientUser | null = client.user;
    // await juliusReade?.send(`neverFapDeluxeBotCommands - ${error}`);
    logger.error(`neverFapDeluxeBotCommands - ${error}`);
    throw new Error(`neverFapDeluxeBotCommands - ${error}`);
  }
};

export default neverFapDeluxeBotCommands;
