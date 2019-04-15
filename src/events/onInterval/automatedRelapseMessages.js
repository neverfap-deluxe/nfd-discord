const _ = require('lodash');
const { RichEmbed } = require('discord.js');

const {
  generateRandomNumber,
  sendMessageHelper,
} = require('../../util/util');

const relapseMessage1 = (relapseChannel) => new RichEmbed().setTitle("#relapse advice").setDescription(
  `Need some help dealing with your relapse? Please checkout this comprehensive guide I've put together https://neverfapdeluxe.com/post-relapse-academy`);

const relapseMessage2 = (relapseChannel) => new RichEmbed().setTitle("#relapse advice").setDescription(
  `You've relapsed and everything feels terrible. Well, I'm here to tell you that everything is going to be OK. For further advice please checkout this comprehensive guide I've put together https://neverfapdeluxe.com/post-relapse-academy`);

const automatedRelapseMessages = async (client) => {
  try {
    const relapseChannel = client.channels.get(process.env.RELAPSE_CHANNEL_ID);
    const lastMessageID = _.get(relapseChannel, 'lastMessageID')
    if (lastMessageID) {
      const lastMessage = await relapseChannel.fetchMessage(lastMessageID);
      if (_.get(lastMessage, 'author.id') !== process.env.NEVERFAP_DELUXE_BOT_ID) {
        const randomNumber = generateRandomNumber(1, 1);
        switch(randomNumber) {
          case 1:  sendMessageHelper(relapseChannel, relapseMessage1(relapseChannel), 'automatedRelapseMessages'); break;
          case 2:  sendMessageHelper(relapseChannel, relapseMessage2(relapseChannel), 'automatedRelapseMessages'); break;
          default: throw new Error(`automatedRelapseMessages - generateRandomNumber - created an incorrect generator number - ${randomNumber}`);
        }
      }
    }
  } catch(error) {
    // NOTE: There is an issue (okay, it's not an 'issue' in that it's breaking anything)
    // However if lastMessageID doesn't fetch anything, then it will throw an error.
    // throw new Error(`automatedRelapseMessages - ${error}`);
  }
}

module.exports = automatedRelapseMessages;