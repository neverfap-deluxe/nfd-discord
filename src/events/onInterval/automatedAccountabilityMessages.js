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
  `If you're feeling urges, it means that you've lost balance and you've failed to practice remaining calm and relaxed. Thankfully practice makes perfect! :relaxed:`);
const accountabilityMessage4 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  `Remember, remaining calm should be your default state 95% of the time. :grin:`);
const accountabilityMessage5 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  `If you don't work with the process, you work against it. Which ultimately means working against yourself. :unamused:`);
const accountabilityMessage6 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  `Self-criticism is harmful. When you self-criticise, you essentially give up your power for conscious action by reacting sub-consciously on an emotional level. :confused:`);
const accountabilityMessage7 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  `Practicing meditation is no different from going to the gym. It's only going to be effective if you practice regularly, with a high level of consistency. :lifter:`);
const accountabilityMessage8 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  `While the process is important, it cannot exist without you. Only you have the power to make the process an important part of your life. :grin:`);
const accountabilityMessage9 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  `We all make thousands of decisions each day, a huge portion of them subconscious. Let's uncover some of them so we can be more effective :stuck_out_tongue_winking_eye:`);
const accountabilityMessage10 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  `Embrace those uneasy feelings and learn to be comfortable with them. Learning to be present with our emotions and not react to them is one of the most powerful things you can learn to do. :love_letter:`);
const accountabilityMessage11 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  `You absolutely need to develop a list of healthy coping mechanisms for you to practice each day. It's no different to having a list of exercises we do at the gym. :page_with_curl:`);
const accountabilityMessage12 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  `Don't React. Always Relax. :label:`);
const accountabilityMessage13 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  `What did you do to achieve peace today? :hibiscus:`);
const accountabilityMessage14 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  `Life is easy when you're calm. Remain calm and everything will literally fall into place. :tulip:`);
const accountabilityMessage15 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  `If your mind isn't absolutely calm now, there's no chance you'll be able to make it calm when you're having a craving. Practice now while it's easy, so you can prepare while it's hard. :mountain_bicyclist:`);
const accountabilityMessage16 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  `You can't cheat your mind by skipping out on meditation, expecting that it won't know. It knows and it always responds appropriately. :ok_hand:`);

const accountabilityMessage17 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  `Do you have a strategy in place to not take your emotions personally? :smile:`);
const accountabilityMessage18 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  `Are you able to quiet and calm your mind down at will? It's part of the reason why we have a strong focus on meditation :smile:`);
const accountabilityMessage19 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  `Are you able to let go when you’re feeling obsessed? Without this ability, you're going to have a hard time detaching yourself from urges when they arise :smile:`);
const accountabilityMessage20 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  `It requires an active and conscious effort to retain balance in our lives. :smile:`);
const accountabilityMessage21 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  `Are you sticking to a regular routine? Going to bed on time each day is one of the most productive things you can do for your mental health. :bed:`);

// TODO: These will need emojis
const accountabilityMessage22 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  `Like all things in life, consistency is key. The moment you stop being consistency is the moment you leave your recovery to chance.`);
const accountabilityMessage23 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  `The process is there for a reason. If you embrace it then you allow yourself that reason. If you ignore it you remove that reason from your life.`);
const accountabilityMessage24 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  `Self-criticism is possibly one of the most self-destructive things you can do as a human being in terms of developing control over your emotions.`);
const accountabilityMessage25 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  `Only you can decide how much your mental health means to you. :grin:`);
const accountabilityMessage26 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  `The idea behind self-awareness is to uncover our hidden agreements, so we can better understand how we lose balance and therefore contribute towards our porn addiction.`);
const accountabilityMessage27 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  `Don't fear your emotions. They are just signals flowing through your brain. Ultimately, you are always in-control.`);
const accountabilityMessage28 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  `Respect your mind and it will respect you back.`);
// const accountabilityMessage29 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
//   ``);
// const accountabilityMessage30 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
//   ``);
// const accountabilityMessage31 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
//   ``);
  

const automatedAccountabilityMessages = async (client) => {
  try {
    const accountabilityChannel = client.channels.get(process.env.ACCOUNTABILITY_CHANNEL_ID);
    const lastMessageID = _.get(accountabilityChannel, 'lastMessageID')
    if (lastMessageID) {
      const lastMessage = await accountabilityChannel.fetchMessage(lastMessageID);
      if (_.get(lastMessage, 'author.id') !== process.env.NEVERFAP_DELUXE_BOT_ID) {
        const randomNumber = generateRandomNumber(1, 28);
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
          case 17: sendMessageHelper(accountabilityChannel, accountabilityMessage17(), 'automatedAccountabilityMessages'); break;
          case 18: sendMessageHelper(accountabilityChannel, accountabilityMessage18(), 'automatedAccountabilityMessages'); break;
          case 19: sendMessageHelper(accountabilityChannel, accountabilityMessage19(), 'automatedAccountabilityMessages'); break;
          case 20: sendMessageHelper(accountabilityChannel, accountabilityMessage20(), 'automatedAccountabilityMessages'); break;
          case 21: sendMessageHelper(accountabilityChannel, accountabilityMessage21(), 'automatedAccountabilityMessages'); break;
          case 22: sendMessageHelper(accountabilityChannel, accountabilityMessage22(), 'automatedAccountabilityMessages'); break;
          case 23: sendMessageHelper(accountabilityChannel, accountabilityMessage23(), 'automatedAccountabilityMessages'); break;
          case 24: sendMessageHelper(accountabilityChannel, accountabilityMessage24(), 'automatedAccountabilityMessages'); break;
          case 25: sendMessageHelper(accountabilityChannel, accountabilityMessage25(), 'automatedAccountabilityMessages'); break;
          case 26: sendMessageHelper(accountabilityChannel, accountabilityMessage26(), 'automatedAccountabilityMessages'); break;
          case 27: sendMessageHelper(accountabilityChannel, accountabilityMessage27(), 'automatedAccountabilityMessages'); break;
          case 28: sendMessageHelper(accountabilityChannel, accountabilityMessage28(), 'automatedAccountabilityMessages'); break;
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