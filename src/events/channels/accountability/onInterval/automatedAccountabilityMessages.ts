import { Client, TextChannel, MessageEmbed, ClientUser } from 'discord.js';

import { generateRandomNumber, getChannel, getNFDBotId } from '../../../../util/util';
import logger from '../../../../util/logger';
import { NFDChannelType } from '../../../../types';

const accountabilityMessage1 = (accountabilityChannel) => new MessageEmbed().setTitle("#accountability advice").setDescription(
  `Don't forget to add emoji reacts to other people's <#${accountabilityChannel}> posts!`);
const accountabilityMessage2 = () => new MessageEmbed().setTitle("#accountability advice").setDescription(
  `Need some help? Type and enter \`!cheatsheet\` into the channel for a list of Healthy Coping Mechanisms. :closed_book:`);
const accountabilityMessage3 = () => new MessageEmbed().setTitle("#accountability advice").setDescription(
  `If you're feeling urges, it means that you've lost balance and you're failing to remain calm and relaxed. Thankfully, practice makes perfect! :relaxed:`);
const accountabilityMessage4 = () => new MessageEmbed().setTitle("#accountability advice").setDescription(
  `Remember, remaining calm should be your default state 95% of the time. :grin:`);
const accountabilityMessage5 = () => new MessageEmbed().setTitle("#accountability advice").setDescription(
  `If you don't work with the process, you work against it. Which ultimately means working against yourself. :unamused:`);
const accountabilityMessage6 = () => new MessageEmbed().setTitle("#accountability advice").setDescription(
  `Self-criticism is harmful. When you self-criticise, you essentially give up your power for conscious action by reacting sub-consciously on an emotional level. :confused:`);
const accountabilityMessage7 = () => new MessageEmbed().setTitle("#accountability advice").setDescription(
  `Practicing meditation is no different from going to the gym. It's only going to be effective if you practice regularly, with a high level of consistency. :lifter:`);
const accountabilityMessage8 = () => new MessageEmbed().setTitle("#accountability advice").setDescription(
  `While the process is important, it cannot exist without you. Only you have the power to make the process an important part of your life. :grin:`);
const accountabilityMessage9 = () => new MessageEmbed().setTitle("#accountability advice").setDescription(
  `We all make thousands of decisions each day, a huge portion of them subconscious. Let's uncover some of them so we can be more effective :stuck_out_tongue_winking_eye:`);
const accountabilityMessage10 = () => new MessageEmbed().setTitle("#accountability advice").setDescription(
  `Embrace those uneasy feelings and learn to be comfortable with them. Learning to be present with our emotions and not react to them is one of the most powerful things you can learn to do. :love_letter:`);
const accountabilityMessage11 = () => new MessageEmbed().setTitle("#accountability advice").setDescription(
  `You absolutely need to develop a list of healthy coping mechanisms for you to practice each day. It's no different to having a list of exercises we do at the gym. :page_with_curl:`);
const accountabilityMessage12 = () => new MessageEmbed().setTitle("#accountability advice").setDescription(
  `Don't React. Always Relax. :label:`);
const accountabilityMessage13 = () => new MessageEmbed().setTitle("#accountability advice").setDescription(
  `What did you do to achieve peace today? :hibiscus:`);
const accountabilityMessage14 = () => new MessageEmbed().setTitle("#accountability advice").setDescription(
  `Life is easy when you're calm. Remain calm and everything will literally fall into place. :tulip:`);
const accountabilityMessage15 = () => new MessageEmbed().setTitle("#accountability advice").setDescription(
  `If your mind isn't absolutely calm now, there's no chance you'll be able to make it calm when you're having a craving. Practice now while it's easy, so you can prepare while it's hard. :mountain_bicyclist:`);
const accountabilityMessage16 = () => new MessageEmbed().setTitle("#accountability advice").setDescription(
  `You can't cheat your mind by skipping out on meditation, expecting that it won't know. It knows and it always responds appropriately. :ok_hand:`);

const accountabilityMessage17 = () => new MessageEmbed().setTitle("#accountability advice").setDescription(
  `Do you have a strategy in place to not take your emotions personally? :grin:`);
const accountabilityMessage18 = () => new MessageEmbed().setTitle("#accountability advice").setDescription(
  `Are you able to quiet and calm your mind down at will? It's part of the reason why we have a strong focus on meditation :helmet_with_cross:`);
const accountabilityMessage19 = () => new MessageEmbed().setTitle("#accountability advice").setDescription(
  `Are you able to let go when you’re feeling obsessed? Without this ability, you're going to have a hard time detaching yourself from urges when they arise :grimacing:`);
const accountabilityMessage20 = () => new MessageEmbed().setTitle("#accountability advice").setDescription(
  `It requires an active and conscious effort to retain balance in our lives. :point_up:`);
const accountabilityMessage21 = () => new MessageEmbed().setTitle("#accountability advice").setDescription(
  `Are you sticking to a regular routine? Going to bed on time each day is one of the most productive things you can do for your mental health. :bed:`);
const accountabilityMessage22 = () => new MessageEmbed().setTitle("#accountability advice").setDescription(
  `Like all things in life, consistency is key. The moment you stop being consistency is the moment you leave your recovery to chance. :ski:`);
const accountabilityMessage23 = () => new MessageEmbed().setTitle("#accountability advice").setDescription(
  `The process is there for a reason. If you embrace it then you allow yourself that reason. If you ignore it, you remove that reason from your life. :golfer:`);
const accountabilityMessage24 = () => new MessageEmbed().setTitle("#accountability advice").setDescription(
  `Self-criticism is possibly one of the most self-destructive things you can do as a human being in terms of developing control over your emotions. :laughing:`);
const accountabilityMessage25 = () => new MessageEmbed().setTitle("#accountability advice").setDescription(
  `Only you can decide how much your mental health means to you. :grin:`);
const accountabilityMessage26 = () => new MessageEmbed().setTitle("#accountability advice").setDescription(
  `The idea behind self-awareness is to uncover our hidden agreements, so we can better understand how we lose balance and therefore contribute towards our porn addiction. :flushed:`);
const accountabilityMessage27 = () => new MessageEmbed().setTitle("#accountability advice").setDescription(
  `Don't fear your emotions. They are just signals flowing through your brain. Ultimately, you are always in-control if you practice the right technique. :sushi:`);
const accountabilityMessage28 = () => new MessageEmbed().setTitle("#accountability advice").setDescription(
  `Respect your mind and it will respect you back. :bow:`);
// const accountabilityMessage29 = () => new MessageEmbed().setTitle("#accountability advice").setDescription(
//   ``);
// const accountabilityMessage30 = () => new MessageEmbed().setTitle("#accountability advice").setDescription(
//   ``);
// const accountabilityMessage31 = () => new MessageEmbed().setTitle("#accountability advice").setDescription(
//   ``);

const sendAccountabilityMessage = async (accountabilityChannel) => {
  const count = generateRandomNumber(1, 28);

  switch(count) {
    case 1:{
      const msg = await accountabilityChannel.send(accountabilityMessage1(accountabilityChannel));
      break;
    }
    case 2:  {
      const msg = await accountabilityChannel.send(accountabilityMessage2());
      return msg;
    }
    case 3:  {
      const msg = await accountabilityChannel.send(accountabilityMessage3());
      return msg;
    }
    case 4:  {
      const msg = await accountabilityChannel.send(accountabilityMessage4());
      return msg;
    }
    case 5:  {
      const msg = await accountabilityChannel.send(accountabilityMessage5());
      return msg;
    }
    case 6:  {
      const msg = await accountabilityChannel.send(accountabilityMessage6());
      return msg;
    }
    case 7:  {
      const msg = await accountabilityChannel.send(accountabilityMessage7());
      return msg;
    }
    case 8:  {
      const msg = await accountabilityChannel.send(accountabilityMessage8());
      return msg;
    }
    case 9:  {
      const msg = await accountabilityChannel.send(accountabilityMessage9());
      return msg;
    }
    case 10: {
      const msg = await accountabilityChannel.send(accountabilityMessage10());
      return msg;
    }
    case 11: {
      const msg = await accountabilityChannel.send(accountabilityMessage11());
      return msg;
    }
    case 12: {
      const msg = await accountabilityChannel.send(accountabilityMessage12());
      return msg;
    }
    case 13: {
      const msg = await accountabilityChannel.send(accountabilityMessage13());
      return msg;
    }
    case 14: {
      const msg = await accountabilityChannel.send(accountabilityMessage14());
      return msg;
    }
    case 15: {
      const msg = await accountabilityChannel.send(accountabilityMessage15());
      return msg;
    }
    case 16: {
      const msg = await accountabilityChannel.send(accountabilityMessage16());
      return msg;
    }
    case 17: {
      const msg = await accountabilityChannel.send(accountabilityMessage17());
      return msg;
    }
    case 18: {
      const msg = await accountabilityChannel.send(accountabilityMessage18());
      return msg;
    }
    case 19: {
      const msg = await accountabilityChannel.send(accountabilityMessage19());
      return msg;
    }
    case 20: {
      const msg = await accountabilityChannel.send(accountabilityMessage20());
      return msg;
    }
    case 21: {
      const msg = await accountabilityChannel.send(accountabilityMessage21());
      return msg;
    }
    case 22: {
      const msg = await accountabilityChannel.send(accountabilityMessage22());
      return msg;
    }
    case 23: {
      const msg = await accountabilityChannel.send(accountabilityMessage23());
      return msg;
    }
    case 24: {
      const msg = await accountabilityChannel.send(accountabilityMessage24());
      return msg;
    }
    case 25: {
      const msg = await accountabilityChannel.send(accountabilityMessage25());
      return msg;
    }
    case 26: {
      const msg = await accountabilityChannel.send(accountabilityMessage26());
      return msg;
    }
    case 27: {
      const msg = await accountabilityChannel.send(accountabilityMessage27());
      return msg;
    }
    case 28: {
      const msg = await accountabilityChannel.send(accountabilityMessage28());
      return msg;
    }
    default: throw new Error(`automatedAccountabilityMessages - generateRandomNumber - created an incorrect generator number - ${count}`);
  }
}

const automatedAccountabilityMessages = async (client: Client) => {
  try {
    const accountabilityChannel: TextChannel = await getChannel(client, NFDChannelType.Accountability_Accountability);
    const lastMessageID: string | null = accountabilityChannel.lastMessageID;

    if (lastMessageID) {
      const lastMessage = await accountabilityChannel.messages.fetch(lastMessageID);

      if (lastMessage.author.id !== getNFDBotId()) {
        const msg = await sendAccountabilityMessage(accountabilityChannel);
        logger.info(`Sent channel message: ${msg.id} - automatedAccountabilityMessages`);
      }
    }
  } catch(error) {
    logger.info(`automatedAccountabilityMessages - ${error}`);
    const juliusReade: ClientUser | null = client.user;
    // await juliusReade?.send(`automatedAccountabilityMessages - ${error}`);
    throw new Error(`automatedAccountabilityMessages - ${error}`);
  }
}

export default automatedAccountabilityMessages;