const moment = require('moment');

const { RichEmbed } = require('discord.js');

const twelveHoursBeforeMessage = (accountabilityChannel, milestoneChannel) => new RichEmbed().setTitle("#daily-milestones 12 hour countdown!").setDescription(
  `We're at the half-way mark everyone! It's Approximately 12 hours until the final ${accountabilityChannel} countdown! :stuck_out_tongue_winking_eye:`
);
const oneFourHoursBeforeMessage = (accountabilityChannel, milestoneChannel) => new RichEmbed().setTitle("#daily-milestones 4 hour countdown!").setDescription(
  `Only four hours to go to get your ${accountabilityChannel} posts in! Don't forget to practice your Healthy Coping Mechanisms! :bow:`
);
const oneTwoHoursBeforeMessage = (accountabilityChannel, milestoneChannel) => new RichEmbed().setTitle("#daily-milestones 2 hour countdown!").setDescription(
  `The ${milestoneChannel} tally ends in approximately 2 hours! Get ready to feel the awe of ${accountabilityChannel}! :boom:`
);
const oneHourBeforeMessage = (accountabilityChannel, milestoneChannel) => new RichEmbed().setTitle("#daily-milestones 1 hour countdown!").setDescription(
  `Only one hour to go till the BIG POP! Get your ${accountabilityChannel} posts in if you haven't yet already! :grin:`
);
const thirtyMinutesBeforeMessage = (accountabilityChannel, milestoneChannel) => new RichEmbed().setTitle("#daily-milestones 30 minute countdown!").setDescription(
  `Thirty minutes to go until the server explodes! Get excited and get your ${accountabilityChannel} posts in quick if you haven't already! :scream:`
);
const tenMinutesBeforeMessage = (accountabilityChannel, milestoneChannel) => new RichEmbed().setTitle("#daily-milestones 10 minute countdown!").setDescription(
  `OMG, it's all going to happen very soon folks! Thank you all for your ${accountabilityChannel} contributions, and enjoy the fireworks in ${milestoneChannel}! :fireworks: :confetti_ball: :tada:`
);

const accountabilityTallyCountdown = async (client, logger, juliusReade) => {
  try {
    const now = moment();
    const accountabilityChannel = client.channels.get(process.env.ACCOUNTABILITY_CHANNEL_ID);
    const milestoneChannel = client.channels.get(process.env.DAILY_MILESTONES_CHANNEL_ID);
    const generalChannel = client.channels.get(process.env.RECOVERY_CHANNEL_ID);

    if (now.isBetween(moment('23:54', 'HH:mm'), moment('00:06', 'HH:mm'))) { // 12 hours before
      milestoneChannel.send(twelveHoursBeforeMessage(accountabilityChannel, milestoneChannel));
    } else if (now.isBetween(moment('07:54', 'HH:mm'), moment('08:06', 'HH:mm'))) { // four hours before
      milestoneChannel.send(oneFourHoursBeforeMessage(accountabilityChannel, milestoneChannel));
    } else if (now.isBetween(moment('09:54', 'HH:mm'), moment('10:06', 'HH:mm'))) { // two hours before
      milestoneChannel.send(oneTwoHoursBeforeMessage(accountabilityChannel, milestoneChannel));
    } else if (now.isBetween(moment('10:54', 'HH:mm'), moment('11:06', 'HH:mm'))) { // one hour before
      milestoneChannel.send(oneHourBeforeMessage(accountabilityChannel, milestoneChannel));
    } else if (now.isBetween(moment('11:24', 'HH:mm'), moment('11:36', 'HH:mm'))) { // 30 minutes before
      milestoneChannel.send(thirtyMinutesBeforeMessage(accountabilityChannel, milestoneChannel));
      generalChannel.send(thirtyMinutesBeforeMessage(accountabilityChannel, milestoneChannel));
    } else if (now.isBetween(moment('11:44', 'HH:mm'), moment('11:56', 'HH:mm'))) { // 10 minutes before
      milestoneChannel.send(tenMinutesBeforeMessage(accountabilityChannel, milestoneChannel));
      generalChannel.send(tenMinutesBeforeMessage(accountabilityChannel, milestoneChannel));
    } else {
      return null;
    }
    
  } catch(error) {
    await juliusReade.send(`accountabilityTallyCountdown - ${error}`);
    logger.error(`accountabilityTallyCountdown - ${error}`)
    throw new Error(`accountabilityTallyCountdown - ${error}`);
  }
};

module.exports = accountabilityTallyCountdown;