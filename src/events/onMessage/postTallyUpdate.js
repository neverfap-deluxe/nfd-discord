const knex = require('../../db/knex');
const { generateTallyDates, generateHoursTillCountdown } = require('../../util/util-time');

const { RichEmbed } = require('discord.js');

const message1 = (discordUser, accountabilityChannel, hoursTillCountdown) => new RichEmbed().setTitle(`We received our 1st #accountability post for the day! Only ${hoursTillCountdown} to go!`).setDescription(
`1st ${accountabilityChannel} message for the tally was posted by ${discordUser}! :apple:`
);
const message10 = (discordUser, accountabilityChannel, hoursTillCountdown) => new RichEmbed().setTitle(`We received our 10th #accountability post for the day! Only ${hoursTillCountdown} to go!`).setDescription(
`We're up to 10 ${accountabilityChannel} posts for today! Thank you ${discordUser}! :smile:`
);
const message20 = (discordUser, accountabilityChannel, hoursTillCountdown) => new RichEmbed().setTitle(`We received our 20th #accountability post for the day! Only ${hoursTillCountdown} to go!`).setDescription(
`Another ${accountabilityChannel} post was just submitted by ${discordUser}! That brings us up to a total of 20 participants today! :ok_hand:`
);
const message30 = (discordUser, accountabilityChannel, hoursTillCountdown) => new RichEmbed().setTitle(`We received our 30th #accountability post for the day! Only ${hoursTillCountdown} to go!`).setDescription(
`Woah! 30 posts into ${accountabilityChannel}! Incredible effort everyone! :candy:`
);
const message40 = (discordUser, accountabilityChannel, hoursTillCountdown) => new RichEmbed().setTitle(`We received our 40th #accountability post for the day! Only ${hoursTillCountdown} to go!`).setDescription(
`We officially have 40 posts in today's ${accountabilityChannel} tally! Keep up the great work folks! :stuck_out_tongue_closed_eyes:`
);
const message50 = (discordUser, accountabilityChannel, hoursTillCountdown) => new RichEmbed().setTitle(`We received our 50th #accountability post for the day! Only ${hoursTillCountdown} to go!`).setDescription(
`Incredible! 50 people have posted in ${accountabilityChannel} today, what an effort! :military_medal:`
);
// FUTURE: Finish these messages.

// const message60 = (discordUser, accountabilityChannel, hoursTillCountdown) => new RichEmbed().setTitle("#daily-milestones update").setDescription(
// ``
// );
// const message70 = (discordUser, accountabilityChannel, hoursTillCountdown) => new RichEmbed().setTitle("#daily-milestones update").setDescription(
// ``
// );
// const message80 = (discordUser, accountabilityChannel, hoursTillCountdown) => new RichEmbed().setTitle("#daily-milestones update").setDescription(
// ``
// );
// const message90 = (discordUser, accountabilityChannel, hoursTillCountdown) => new RichEmbed().setTitle("#daily-milestones update").setDescription(
// ``
// );
// const message100 = (discordUser, accountabilityChannel, hoursTillCountdown) => new RichEmbed().setTitle("#daily-milestones update").setDescription(
// ``
// );
// const message110 = (discordUser, accountabilityChannel, hoursTillCountdown) => new RichEmbed().setTitle("#daily-milestones update").setDescription(
// ``
// );
// const message120 = (discordUser, accountabilityChannel, hoursTillCountdown) => new RichEmbed().setTitle("#daily-milestones update").setDescription(
// ``
// );
// const message130 = (discordUser, accountabilityChannel, hoursTillCountdown) => new RichEmbed().setTitle("#daily-milestones update").setDescription(
// ``
// );
// const message140 = (discordUser, accountabilityChannel, hoursTillCountdown) => new RichEmbed().setTitle("#daily-milestones update").setDescription(
// ``
// );

const postTallyUpdate = async (client, logger, db_user, discordUser, juliusReade) => {
  try {
    const { startOfTally, endOfTally } = generateTallyDates();
    const hoursTillCountdown = generateHoursTillCountdown();

    const accountabilityChannel = client.channels.get(process.env.ACCOUNTABILITY_CHANNEL_ID);
    const dailyMilestonesChannel = client.channels.get(process.env.DAILY_MILESTONES_CHANNEL_ID);
    const accountabilityMessageCount = await knex('accountability_messages').whereBetween('created_at', [startOfTally, endOfTally]).count();
    const count = parseInt(accountabilityMessageCount[0].count);
      
    switch(count) {
      case 1:  dailyMilestonesChannel.send(message1(discordUser, accountabilityChannel, hoursTillCountdown)); break;
      case 10:  dailyMilestonesChannel.send(message10(discordUser, accountabilityChannel, hoursTillCountdown)); break;
      case 20: dailyMilestonesChannel.send(message20(discordUser, accountabilityChannel, hoursTillCountdown)); break;
      case 30: dailyMilestonesChannel.send(message30(discordUser, accountabilityChannel, hoursTillCountdown)); break;
      case 40: dailyMilestonesChannel.send(message40(discordUser, accountabilityChannel, hoursTillCountdown)); break;
      case 50: dailyMilestonesChannel.send(message50(discordUser, accountabilityChannel, hoursTillCountdown)); break;
      // case 60: dailyMilestonesChannel.send(message30(discordUser, accountabilityChannel, hoursTillCountdown)); break;
      // case 70: dailyMilestonesChannel.send(message35(discordUser, accountabilityChannel, hoursTillCountdown)); break;
      // case 80: dailyMilestonesChannel.send(message40(discordUser, accountabilityChannel, hoursTillCountdown)); break;
      // case 90: dailyMilestonesChannel.send(message45(discordUser, accountabilityChannel, hoursTillCountdown)); break;
      // case 100: dailyMilestonesChannel.send(message50(discordUser, accountabilityChannel, hoursTillCountdown)); break;
      // case 110: dailyMilestonesChannel.send(message55(discordUser, accountabilityChannel, hoursTillCountdown)); break;
      // case 120: dailyMilestonesChannel.send(message60(discordUser, accountabilityChannel, hoursTillCountdown)); break;
      // case 130: dailyMilestonesChannel.send(message65(discordUser, accountabilityChannel, hoursTillCountdown)); break;
      // case 140: dailyMilestonesChannel.send(message70(discordUser, accountabilityChannel, hoursTillCountdown)); break;
      default: 
        return null
    }    

    await juliusReade.send(`postTallyUpdate - ${discordUser.username} - ${count}`);
    logger.info(`postTallyUpdate -  ${discordUser.username} - ${count}`);

  } catch(error) {
    await juliusReade.send(`postTallyUpdate - ${discordUser.username} - ${error}`);
    logger.error(`postTallyUpdate - ${discordUser.username} - ${error}`);
    throw new Error(`postTallyUpdate - ${discordUser.username} - ${error}`);
  }
}  

module.exports = postTallyUpdate;
