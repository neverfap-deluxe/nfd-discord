const _ = require('lodash');
const { RichEmbed } = require('discord.js');

const {
  generateRandomNumber,
  sendMessageHelper,
} = require('../../util/util');

const emergencyMessage1 = (emergencyChannel) => new RichEmbed().setTitle("#emergency advice").setDescription(
  `Oh nooooo, it's an emergency! Type and enter \`!emergency\` to receive some deliciously accurate advice.`);

const emergencyMessage2 = (emergencyChannel) => new RichEmbed().setTitle("#emergency advice").setDescription(
  `You've got this buddy! Type and enter \`!emergency\` for a step-by-step guide on relaxing and calming down.`);
  

const automatedEmergencyMessages = async (client) => {
  try {
    const emergencyChannel = client.channels.get(process.env.EMERGENCY_CHANNEL_ID);
    const lastMessageID = _.get(emergencyChannel, 'lastMessageID')
    if (lastMessageID) {
      const lastMessage = await emergencyChannel.fetchMessage(lastMessageID);
      if (_.get(lastMessage, 'author.id') !== process.env.NEVERFAP_DELUXE_BOT_ID) {
        const randomNumber = generateRandomNumber(1, 2);
        switch(randomNumber) {
          case 1:  sendMessageHelper(emergencyChannel, emergencyMessage1(emergencyChannel), 'automatedEmergencyMessages'); break;
          case 2:  sendMessageHelper(emergencyChannel, emergencyMessage2(emergencyChannel), 'automatedEmergencyMessages'); break;
          default: throw new Error(`automatedEmergencyMessages - generateRandomNumber - created an incorrect generator number - ${randomNumber}`);
        }
      }
    }
  } catch(error) {
    // NOTE: There is an issue (okay, it's not an 'issue' in that it's breaking anything)
    // However if lastMessageID doesn't fetch anything, then it will throw an error.
    // throw new Error(`automatedEmergencyMessages - ${error}`);
  }
}

module.exports = automatedEmergencyMessages;