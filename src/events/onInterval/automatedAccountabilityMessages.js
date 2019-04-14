const _ = require('lodash');
const { RichEmbed } = require('discord.js');

const {
  generateRandomNumber,
  sendMessageHelper,
} = require('../../util/util');

const accountabilityMessage1 = (accountabilityChannel) => new RichEmbed().setTitle("#accountability advice").setDescription(
  `Don't forget to add emoji reacts to other people's ${accountabilityChannel} posts!`);
const accountabilityMessage2 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  `Need some help? Type and enter \`!cheatsheet\` into the channel for a list of Healthy Coping Mechanisms. :closed_book:`);
const accountabilityMessage3 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  `If you're feeling urges, it means that you've lost balance and you've failed to practice remaining calm and relaxed. :relaxed:`);
const accountabilityMessage4 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  `Remember, remaining calm should be your default state 95% of the time, which requires active practice and a conscious effort to retain balance in our lives. This means sticking to a regular routine, going to bed on time etc. :bed:`);
const accountabilityMessage5 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  `The process is there for a reason. It's there because it works and when you don't stick with the process, you work against it, which means working against yourself. :unamused:`);
const accountabilityMessage6 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  `Self-criticism doesn't work. When you self-criticise, you essentially give up your power for conscious action by reacting sub-consciously on an emotional level. It's possibly one of the most self-destructive things you can do as a human being in terms of developing control over your emotions. :confused:`);
const accountabilityMessage7 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  `Practicing meditation is no different from going to the gym. It's only going to be effective if you practice regularly, with a high level of consistency. Otherwise, you're going to get nowhere. :lifter:`);
const accountabilityMessage8 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  `While the process is important, it cannot exist without you. While you have the power to make the process an important part of your life, you also have the power to make it completely irrelevant. Only you can decide how much your mental health means to you. :grin:`);
const accountabilityMessage9 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  `We all make thousands of decisions each day, a huge portion of them subconscious. The idea behind awareness is to uncover these decisions, so we can better understand how we lose balance and therefore contribute towards our porn addiction. :stuck_out_tongue_winking_eye:`);
const accountabilityMessage10 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  `Don't fear your emotions. Embrace those uneasy feelings and learn to be comfortable with them. In other words, learn to be present with these emotions while not reacting to them. It's one of the most powerful things you can learn to do. :love_letter:`);
const accountabilityMessage11 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  `You absolutely need to develop a list of healthy coping mechanisms for you to practice each day. It's no different to having a list of exercises we do at the gym. It will help you remain consistent. :page_with_curl:`);
const accountabilityMessage12 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  `Don't React. Always Relax. :label:`);
const accountabilityMessage13 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  `What did you do to achieve peace today? :hibiscus:`);
const accountabilityMessage14 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  `Life is easy when you're calm. Remain calm and everything will literally fall into place. Lose your calm and you'll find yourself wondering how you could have been so naive. :tulip:`);
const accountabilityMessage15 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  `If your mind isn't absolutely calm now, there's no chance you'll be able to make it calm when you're having a craving. Practice now while it's easy, so you can prepare while it's hard. :mountain_bicyclist:`);
const accountabilityMessage16 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  `You can't cheat your mind by skipping out on meditation, expecting that it won't know. It knows and it always responds appropriately, whether it be in the form of an emotional breakdown or an intense urge to watch porn. Respect your mind and it will respect you back. :ok_hand:`);
// const accountabilityMessage17 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
//   `Do you have a strategy in place to not take your emotions personally? :smile:`);
// const accountabilityMessage18 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
//   `Are you able to quiet and calm your mind down at will? :smile:`);
// const accountabilityMessage19 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
//   `Are you able to let go when you’re feeling obsessed? :smile:`);
// const accountabilityMessage20 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
//   ``);
// const accountabilityMessage21 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
//   ``);
          

const automatedAccountabilityMessages = async (client) => {
  try {
    const accountabilityChannel = client.channels.get(process.env.ACCOUNTABILITY_CHANNEL_ID);
    const lastMessageID = _.get(accountabilityChannel, 'lastMessageID')
    if (lastMessageID) {
      const lastMessage = await accountabilityChannel.fetchMessage(lastMessageID);
      if (_.get(lastMessage, 'author.id') !== process.env.NEVERFAP_DELUXE_BOT_ID) {
        const randomNumber = generateRandomNumber(0, 16);
        switch(randomNumber) {
          case 1:  sendMessageHelper(accountabilityChannel, accountabilityMessage1(accountabilityChannel), 'automatedAccountabilityMessages'); break;
          case 2:  sendMessageHelper(accountabilityChannel, accountabilityMessage2(), 'automatedAccountabilityMessages'); break;
          case 3:  sendMessageHelper(accountabilityChannel, accountabilityMessage3(), 'automatedAccountabilityMessages'); break;
          case 4:  sendMessageHelper(accountabilityChannel, accountabilityMessage4(), 'automatedAccountabilityMessages'); break;
          case 5:  sendMessageHelper(accountabilityChannel, accountabilityMessage5(), 'automatedAccountabilityMessages'); break;
          case 6:  sendMessageHelper(accountabilityChannel, accountabilityMessage6(), 'automatedAccountabilityMessages'); break;
          case 7:  sendMessageHelper(accountabilityChannel, accountabilityMessage7(), 'automatedAccountabilityMessages'); break;
          case 8:  sendMessageHelper(accountabilityChannel, accountabilityMessage8(), 'automatedAccountabilityMessages'); break;
          case 9:  sendMessageHelper(accountabilityChannel, accountabilityMessage9(), 'automatedAccountabilityMessages'); break;
          case 10: sendMessageHelper(accountabilityChannel, accountabilityMessage10(), 'automatedAccountabilityMessages'); break;
          case 11: sendMessageHelper(accountabilityChannel, accountabilityMessage11(), 'automatedAccountabilityMessages'); break;
          case 12: sendMessageHelper(accountabilityChannel, accountabilityMessage12(), 'automatedAccountabilityMessages'); break;
          case 13: sendMessageHelper(accountabilityChannel, accountabilityMessage13(), 'automatedAccountabilityMessages'); break;
          case 14: sendMessageHelper(accountabilityChannel, accountabilityMessage14(), 'automatedAccountabilityMessages'); break;
          case 15: sendMessageHelper(accountabilityChannel, accountabilityMessage15(), 'automatedAccountabilityMessages'); break;
          case 16: sendMessageHelper(accountabilityChannel, accountabilityMessage16(), 'automatedAccountabilityMessages'); break;
          default: throw new Error(`automatedAccountabilityMessages - generateRandomNumber - created an incorrect generator number - ${randomNumber}`);
        }
      }
    }
  } catch(error) {
    // NOTE: There is an issue (okay, it's not an 'issue' in that it's breaking anything)
    // However if lastMessageID doesn't fetch anything, then it will throw an error.
    // throw new Error(`automatedAccountabilityMessages - ${error}`);
  }
}

module.exports = automatedAccountabilityMessages;