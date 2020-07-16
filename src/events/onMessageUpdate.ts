import { Client, TextChannel } from 'discord.js';
import nodeEmoji from 'node-emoji';

const onMessageUpdate = (client: Client) =>
  async (oldMessage, newMessage) => {
    const channel: TextChannel = newMessage.channel as TextChannel;
    const newMessageContent = newMessage.content;
    const oldMessageContent = oldMessage.content;

    if (
      new RegExp(/g(a|y| )+/i).test(newMessageContent as string) ||
      new RegExp(/g(a|y| )+/i).test(oldMessageContent as string)
    ) {
      const emoji = nodeEmoji.emojify(`:man_firefighter:`);
      await channel.send(`Yes, Eliott Mahn is gay. Thank you for reminding everyone. ${emoji}`);
    }
  }

export default onMessageUpdate;
