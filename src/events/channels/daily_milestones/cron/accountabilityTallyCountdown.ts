import { MessageEmbed, TextChannel, ClientUser, Client } from 'discord.js';

import logger from '../../../../util/logger';
import { getChannel } from '../../../../util/util';
import { NFDChannelType } from '../../../../types';

const twelveHoursBeforeMessage = (accountabilityChannel: TextChannel, _milestoneChannel: TextChannel): MessageEmbed => new MessageEmbed().setTitle("Only 12 hours to go until the final countdown!").setDescription(
  `We're at the half-way mark everyone! It's Approximately 12 hours until the final <#${accountabilityChannel}> countdown! :stuck_out_tongue_winking_eye:`
);
const oneFourHoursBeforeMessage = (accountabilityChannel: TextChannel, _milestoneChannel: TextChannel): MessageEmbed => new MessageEmbed().setTitle("Only 4 hours to go until the final countdown!").setDescription(
  `Only four hours to go to get your <#${accountabilityChannel}> posts in! Don't forget to practice your Healthy Coping Mechanisms! :bow:`
);
const oneTwoHoursBeforeMessage = (accountabilityChannel: TextChannel, milestoneChannel: TextChannel): MessageEmbed => new MessageEmbed().setTitle("Only 2 hours to go until the final countdown!").setDescription(
  `The <#${milestoneChannel}> tally ends in approximately 2 hours! Get ready to feel the awe of <#${accountabilityChannel}>! :boom:`
);
const oneHourBeforeMessage = (accountabilityChannel: TextChannel, _milestoneChannel: TextChannel): MessageEmbed => new MessageEmbed().setTitle("Only 1 hour to go until the final countdown!").setDescription(
  `Only one hour to go till the BIG POP! Get your <#${accountabilityChannel}> posts in if you haven't yet already! :grin:`
);
const thirtyMinutesBeforeMessage = (accountabilityChannel: TextChannel, _milestoneChannel: TextChannel): MessageEmbed => new MessageEmbed().setTitle("Only 30 minutes to go until the final countdown!").setDescription(
  `Thirty minutes to go until the server explodes! Get excited and get your <#${accountabilityChannel}> posts in quick if you haven't already! :scream:`
);
const fiveMinutesBeforeMessage = (accountabilityChannel: TextChannel, milestoneChannel: TextChannel): MessageEmbed => new MessageEmbed().setTitle("Only 5 minutes to go until the final countdown!").setDescription(
  `OMG, it's all going to happen very soon folks! Thank you all for your <#${accountabilityChannel}> contributions, and enjoy the fireworks in <#${milestoneChannel}>! :fireworks: :confetti_ball: :tada:`
);
const oneMinuteBeforeMessage = (_accountabilityChannel: TextChannel, milestoneChannel: TextChannel): MessageEmbed => new MessageEmbed().setTitle("Only 1 minute to go until the final countdown!").setDescription(
  `SHEEEEEEEET <#${milestoneChannel}> is gonna blow! :scream: :scream: :scream: :scream: :scream: :scream:`
);

const sendAccountabilityMessage = async (type: string, milestoneChannel: TextChannel, accountabilityChannel: TextChannel) => {
  switch(type) {
    case "twelveHoursBeforeMessage":
      await milestoneChannel.send(twelveHoursBeforeMessage(accountabilityChannel, milestoneChannel));
      break;
    case "oneFourHoursBeforeMessage":
      await milestoneChannel.send(oneFourHoursBeforeMessage(accountabilityChannel, milestoneChannel));
      break;
    case "oneTwoHoursBeforeMessage":
      await milestoneChannel.send(oneTwoHoursBeforeMessage(accountabilityChannel, milestoneChannel));
      break;
    case "oneHourBeforeMessage":
      await milestoneChannel.send(oneHourBeforeMessage(accountabilityChannel, milestoneChannel));
      break;
    case "thirtyMinutesBeforeMessage":
      await milestoneChannel.send(thirtyMinutesBeforeMessage(accountabilityChannel, milestoneChannel));
      break;
    case "fiveMinutesBeforeMessage":
      await milestoneChannel.send(fiveMinutesBeforeMessage(accountabilityChannel, milestoneChannel));
      break;
    case "oneMinuteBeforeMessage":
      await milestoneChannel.send(oneMinuteBeforeMessage(accountabilityChannel, milestoneChannel));
      break;
  }
}

const accountabilityTallyCountdown = async (client: Client, type: string) => {
  try {
    const accountabilityChannel: TextChannel = await getChannel(client, NFDChannelType.Accountability_Accountability);
    const milestoneChannel: TextChannel = await getChannel(client, NFDChannelType.Accountability_DailyMilestones);

    await sendAccountabilityMessage(type, milestoneChannel, accountabilityChannel);
  } catch(error) {
    const juliusReade: ClientUser | null = client.user;
    // await juliusReade?.send(`accountabilityTallyCountdown - ${error}`);
    logger.error(`accountabilityTallyCountdown - ${error}`)
    throw new Error(`accountabilityTallyCountdown - ${error}`);
  }
};

export default accountabilityTallyCountdown;
