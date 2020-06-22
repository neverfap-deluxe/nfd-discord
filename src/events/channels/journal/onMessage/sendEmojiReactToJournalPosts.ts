import { getChannelId } from "../../../../util/util";
import { Client, TextChannel, User, Message, GuildEmoji } from "discord.js";
import { DBUser, NFDChannelType } from "../../../../types";
import emojiNameListCurated from "../../../../util/emojiNameListCurated";
import nodeEmoji from 'node-emoji';

const sendEmojiReactToJournalPosts = async (client: Client, channel: TextChannel, db_user: DBUser, discordUser: User, message: Message): Promise<void> => {
  if (
    [
      getChannelId(NFDChannelType.Accountability_MeditationJournal),
      getChannelId(NFDChannelType.Accountability_ExerciseJournal),
      getChannelId(NFDChannelType.Accountability_GratitudeJournal),
    ].includes(channel.id)
  ) {
    const randomEmoji = emojiNameListCurated[Math.floor(Math.random() * emojiNameListCurated.length)]
    const emoji = nodeEmoji.emojify(`:${randomEmoji}:`);

    const delay = Math.floor(Math.random() * 2000) + 1000;
    setTimeout(async () => {
      await message.react(emoji);
    }, delay);
  }
};

export default sendEmojiReactToJournalPosts;
