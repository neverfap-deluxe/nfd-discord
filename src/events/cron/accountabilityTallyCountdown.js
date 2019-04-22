const { RichEmbed } = require('discord.js');

const twelveHoursBeforeMessage = (accountabilityChannel, milestoneChannel) => new RichEmbed().setTitle("Only 12 hours to go until the final countdown!").setDescription(
  `We're at the half-way mark everyone! It's Approximately 12 hours until the final ${accountabilityChannel} countdown! :stuck_out_tongue_winking_eye:`
);
const oneFourHoursBeforeMessage = (accountabilityChannel, milestoneChannel) => new RichEmbed().setTitle("Only 4 hours to go until the final countdown!").setDescription(
  `Only four hours to go to get your ${accountabilityChannel} posts in! Don't forget to practice your Healthy Coping Mechanisms! :bow:`
);
const oneTwoHoursBeforeMessage = (accountabilityChannel, milestoneChannel) => new RichEmbed().setTitle("Only 2 hours to go until the final countdown!").setDescription(
  `The ${milestoneChannel} tally ends in approximately 2 hours! Get ready to feel the awe of ${accountabilityChannel}! :boom:`
);
const oneHourBeforeMessage = (accountabilityChannel, milestoneChannel) => new RichEmbed().setTitle("Only 1 hour to go until the final countdown!").setDescription(
  `Only one hour to go till the BIG POP! Get your ${accountabilityChannel} posts in if you haven't yet already! :grin:`
);
const thirtyMinutesBeforeMessage = (accountabilityChannel, milestoneChannel) => new RichEmbed().setTitle("Only 30 minutes to go until the final countdown!").setDescription(
  `Thirty minutes to go until the server explodes! Get excited and get your ${accountabilityChannel} posts in quick if you haven't already! :scream:`
);
const fiveMinutesBeforeMessage = (accountabilityChannel, milestoneChannel) => new RichEmbed().setTitle("Only 5 minutes to go until the final countdown!").setDescription(
  `OMG, it's all going to happen very soon folks! Thank you all for your ${accountabilityChannel} contributions, and enjoy the fireworks in ${milestoneChannel}! :fireworks: :confetti_ball: :tada:`
);
const oneMinuteBeforeMessage = (accountabilityChannel, milestoneChannel) => new RichEmbed().setTitle("Only 1 minute to go until the final countdown!").setDescription(
  `SHEEEEEEEET ${milestoneChannel} is gonna blow! :scream: :scream: :scream: :scream: :scream: :scream:`
);

const accountabilityTallyCountdown = async (client, logger, juliusReade, type) => {
  try {
    const accountabilityChannel = client.channels.get(process.env.ACCOUNTABILITY_CHANNEL_ID);
    const milestoneChannel = client.channels.get(process.env.DAILY_MILESTONES_CHANNEL_ID);

    switch(type) {
      case "twelveHoursBeforeMessage": 
        milestoneChannel.send(twelveHoursBeforeMessage(accountabilityChannel, milestoneChannel));
        break;
      case "oneFourHoursBeforeMessage": 
        milestoneChannel.send(oneFourHoursBeforeMessage(accountabilityChannel, milestoneChannel));
        break;
      case "oneTwoHoursBeforeMessage": 
        milestoneChannel.send(oneTwoHoursBeforeMessage(accountabilityChannel, milestoneChannel));
        break;
      case "oneHourBeforeMessage": 
        milestoneChannel.send(oneHourBeforeMessage(accountabilityChannel, milestoneChannel));
        break;
      case "thirtyMinutesBeforeMessage": 
        milestoneChannel.send(thirtyMinutesBeforeMessage(accountabilityChannel, milestoneChannel));
        break;
      case "fiveMinutesBeforeMessage": 
        milestoneChannel.send(fiveMinutesBeforeMessage(accountabilityChannel, milestoneChannel));
        break;
      case "oneMinuteBeforeMessage": 
        milestoneChannel.send(oneMinuteBeforeMessage(accountabilityChannel, milestoneChannel));
        break;
      default: 
        await juliusReade.send(`accountabilityTallyCountdown - the switch was given a type that does not exist`);
        logger.error(`accountabilityTallyCountdown - the switch was given a type that does not exist`);
    }
  } catch(error) {
    await juliusReade.send(`accountabilityTallyCountdown - ${error}`);
    logger.error(`accountabilityTallyCountdown - ${error}`)
    throw new Error(`accountabilityTallyCountdown - ${error}`);
  }
};

module.exports = accountabilityTallyCountdown;