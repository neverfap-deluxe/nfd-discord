const moment = require('moment');
const knex = require('../../db/knex');

const { RichEmbed } = require('discord.js');

const message1 = (discordUser, accountabilityChannel, hoursTillCountdown) => new RichEmbed().setTitle(`We received our 1st #accountability post for the day! Only ${hoursTillCountdown} to go!`).setDescription(
`1st ${accountabilityChannel} message for the tally was posted by ${discordUser}! :apple:`
);
const message5 = (discordUser, accountabilityChannel, hoursTillCountdown) => new RichEmbed().setTitle(`We received our 5th #accountability post for the day! Only ${hoursTillCountdown} to go!`).setDescription(
`We're up to 5 ${accountabilityChannel} posts for today! Thank you ${discordUser}! :smile:`
);
const message10 = (discordUser, accountabilityChannel, hoursTillCountdown) => new RichEmbed().setTitle(`We received our 10th #accountability post for the day! Only ${hoursTillCountdown} to go!`).setDescription(
`Another ${accountabilityChannel} post was just submitted by ${discordUser}! That brings us up to a total of 10 participants today! :ok_hand:`
);
const message15 = (discordUser, accountabilityChannel, hoursTillCountdown) => new RichEmbed().setTitle(`1We received our 15th #accountability post for the day! Only ${hoursTillCountdown} to go!`).setDescription(
`Woah! 15 posts into ${accountabilityChannel}! Incredible effort everyone! :candy:`
);
const message20 = (discordUser, accountabilityChannel, hoursTillCountdown) => new RichEmbed().setTitle(`We received our 20th #accountability post for the day! Only ${hoursTillCountdown} to go!`).setDescription(
`We officially have 20 posts in today's ${accountabilityChannel} tally! Keep up the great work folks! :stuck_out_tongue_closed_eyes:`
);
const message25 = (discordUser, accountabilityChannel, hoursTillCountdown) => new RichEmbed().setTitle(`We received our 25th #accountability post for the day! Only ${hoursTillCountdown} to go!`).setDescription(
`Incredible! 25 people have posted in ${accountabilityChannel} today, what an effort! :military_medal:`
);
// FUTURE: Finish these messages.

// const message30 = (discordUser, accountabilityChannel, hoursTillCountdown) => new RichEmbed().setTitle("#daily-milestones update").setDescription(
// ``
// );
// const message35 = (discordUser, accountabilityChannel, hoursTillCountdown) => new RichEmbed().setTitle("#daily-milestones update").setDescription(
// ``
// );
// const message40 = (discordUser, accountabilityChannel, hoursTillCountdown) => new RichEmbed().setTitle("#daily-milestones update").setDescription(
// ``
// );
// const message45 = (discordUser, accountabilityChannel, hoursTillCountdown) => new RichEmbed().setTitle("#daily-milestones update").setDescription(
// ``
// );
// const message50 = (discordUser, accountabilityChannel, hoursTillCountdown) => new RichEmbed().setTitle("#daily-milestones update").setDescription(
// ``
// );
// const message55 = (discordUser, accountabilityChannel, hoursTillCountdown) => new RichEmbed().setTitle("#daily-milestones update").setDescription(
// ``
// );
// const message60 = (discordUser, accountabilityChannel, hoursTillCountdown) => new RichEmbed().setTitle("#daily-milestones update").setDescription(
// ``
// );
// const message65 = (discordUser, accountabilityChannel, hoursTillCountdown) => new RichEmbed().setTitle("#daily-milestones update").setDescription(
// ``
// );
// const message70 = (discordUser, accountabilityChannel, hoursTillCountdown) => new RichEmbed().setTitle("#daily-milestones update").setDescription(
// ``
// );

const postTallyUpdate = async (client, logger, db_user, discordUser, juliusReade) => {
  try {
    const isAfterMidday = moment().hour() > 12;
    const { startOfTally, endOfTally } = isAfterMidday ? (
      {
        startOfTally: moment().endOf('day').subtract(12,'hours'),
        endOfTally: moment().endOf('day').add(12,'hours')
      }
    ) : (
      { 
        startOfTally: moment().startOf('day').subtract(12,'hours'),
        endOfTally: moment().startOf('day').add(12,'hours')
      }
    );

    const hoursNumber = isAfterMidday ? (
      24 - (moment().hour() - 12)
    ) : (
      12 - moment().hour()
    );

    const hoursTillCountdown = hoursNumber === 1 ? (
      `${hoursNumber} hour`
    ) : (
      `${hoursNumber} hours`
    );

    const accountabilityChannel = client.channels.get(process.env.ACCOUNTABILITY_CHANNEL_ID);
    const dailyMilestonesChannel = client.channels.get(process.env.DAILY_MILESTONES_CHANNEL_ID);
    const accountabilityMessageCount = await knex('accountability_messages').whereBetween('created_at', [startOfTally, endOfTally]).count();
    const count = parseInt(accountabilityMessageCount[0].count);
      
    switch(count) {
      case 1:  dailyMilestonesChannel.send(message1(discordUser, accountabilityChannel, hoursTillCountdown)); break;
      case 5:  dailyMilestonesChannel.send(message5(discordUser, accountabilityChannel, hoursTillCountdown)); break;
      case 10: dailyMilestonesChannel.send(message10(discordUser, accountabilityChannel, hoursTillCountdown)); break;
      case 15: dailyMilestonesChannel.send(message15(discordUser, accountabilityChannel, hoursTillCountdown)); break;
      case 20: dailyMilestonesChannel.send(message20(discordUser, accountabilityChannel, hoursTillCountdown)); break;
      case 25: dailyMilestonesChannel.send(message25(discordUser, accountabilityChannel, hoursTillCountdown)); break;
      // case 30: dailyMilestonesChannel.send(message30(discordUser, accountabilityChannel, hoursTillCountdown)); break;
      // case 35: dailyMilestonesChannel.send(message35(discordUser, accountabilityChannel, hoursTillCountdown)); break;
      // case 40: dailyMilestonesChannel.send(message40(discordUser, accountabilityChannel, hoursTillCountdown)); break;
      // case 45: dailyMilestonesChannel.send(message45(discordUser, accountabilityChannel, hoursTillCountdown)); break;
      // case 50: dailyMilestonesChannel.send(message50(discordUser, accountabilityChannel, hoursTillCountdown)); break;
      // case 55: dailyMilestonesChannel.send(message55(discordUser, accountabilityChannel, hoursTillCountdown)); break;
      // case 60: dailyMilestonesChannel.send(message60(discordUser, accountabilityChannel, hoursTillCountdown)); break;
      // case 65: dailyMilestonesChannel.send(message65(discordUser, accountabilityChannel, hoursTillCountdown)); break;
      // case 70: dailyMilestonesChannel.send(message70(discordUser, accountabilityChannel, hoursTillCountdown)); break;
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
