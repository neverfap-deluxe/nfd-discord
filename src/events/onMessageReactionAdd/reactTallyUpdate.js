const moment = require('moment');
const { RichEmbed } = require('discord.js');

const knex = require('../../db/knex');

// const message1 = (discordUser, accountabilityChannel) => new RichEmbed().setTitle("1st #accountability react today").setDescription(
// `${discordUser} just posted our first ${accountabilityChannel} react for today! Hooray! :grin:`
// );
const message50 = (discordUser, accountabilityChannel) => new RichEmbed().setTitle("50th emoji react!").setDescription(
`We just reached 50 emoji reacts in ${accountabilityChannel}! Thank you ${discordUser} for the 50th one! :smile:`
);
const message100 = (discordUser, accountabilityChannel) => new RichEmbed().setTitle("100th emoji react!").setDescription(
`OMG 100 emoji reacts in ${accountabilityChannel}! What a time to be alive! :white_sun_rain_cloud:`
);
const message150 = (discordUser, accountabilityChannel) => new RichEmbed().setTitle("150th emoji react!").setDescription(
`I can't believe it but we reached 150 emoji reacts today in ${accountabilityChannel}! :yum:`
);
const message200 = (discordUser, accountabilityChannel) => new RichEmbed().setTitle("200th emoji react!").setDescription(
`Did someone just order 200 emoji reacts in ${accountabilityChannel}!?!??!! :pizza:`
);
const message250 = (discordUser, accountabilityChannel) => new RichEmbed().setTitle("250th emoji react!").setDescription(
`We're up to 250 emoji reacts in ${accountabilityChannel}! Wowweee!!!! :stuck_out_tongue_winking_eye:`
);
const message300 = (discordUser, accountabilityChannel) => new RichEmbed().setTitle("300th emoji react!").setDescription(
`It looks like we have 300 emoji reacts in ${accountabilityChannel}! How on earth did we do it! :innocent:`
);
const message350 = (discordUser, accountabilityChannel) => new RichEmbed().setTitle("350th emoji react!").setDescription(
`OMFG 350 emoji reacts in ${accountabilityChannel}! Surely I'm halucinating right now! :rainbow:`
);
const message400 = (discordUser, accountabilityChannel) => new RichEmbed().setTitle("400th emoji react!").setDescription(
`The database is telling me that we're currently at 400 emoji reacts in ${accountabilityChannel} for today! WTF! :neutral_face:`
);
const message450 = (discordUser, accountabilityChannel) => new RichEmbed().setTitle("450th emoji react!").setDescription(
`Could it be!?!?! Obviously, because this is an automated message and I'm the all-knowing all-seeing bot, but we just hit 450 emoji reacts in ${accountabilityChannel}! :game_die:`
);
const message500 = (discordUser, accountabilityChannel) => new RichEmbed().setTitle("500th emoji react!").setDescription(
`Thank you ${discordUser} for reacting with our 500th emoji today in ${accountabilityChannel}! :bow:`
);
const message550 = (discordUser, accountabilityChannel) => new RichEmbed().setTitle("550th emoji react!").setDescription(
`Wow! 550 emojis reacted with today in ${accountabilityChannel}! You amazing people really have to stop hehe :doughnut:`
);
const message600 = (discordUser, accountabilityChannel) => new RichEmbed().setTitle("600th emoji react!").setDescription(
`I actually can't believe it! 600 emoji reacts in ${accountabilityChannel}, did I just die and go to heaven!?!?! :star2:`
);
const message650 = (discordUser, accountabilityChannel) => new RichEmbed().setTitle("650th emoji react!").setDescription(
`Surely this is just an illusion... 650 emoji reacts in ${accountabilityChannel} and counting! :stuck_out_tongue_closed_eyes:`
);
const message700 = (discordUser, accountabilityChannel) => new RichEmbed().setTitle("700th emoji react!").setDescription(
`We did it folks! We hit 700 emoji reacts in ${accountabilityChannel} and I haven't written anymore of these messages! Well done! :trophy:`
);

const reactTallyUpdate = async (client, logger, db_user, discordUser, discordUserReactedTo, juliusReade, emojiName) => {
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
  
    const accountabilityChannel = client.channels.get(process.env.ACCOUNTABILITY_CHANNEL_ID);
    const dailyMilestonesChannel = client.channels.get(process.env.DAILY_MILESTONES_CHANNEL_ID);
    const accountabilityMessageCount = await knex('accountability_reacts').whereBetween('created_at', [startOfTally, endOfTally]).count();
    const count = parseInt(accountabilityMessageCount[0].count);

    switch(count) {
      // case 1:   dailyMilestonesChannel.send(message1(discordUser, accountabilityChannel)); break;
      case 50:  dailyMilestonesChannel.send(message50(discordUser, accountabilityChannel)); break;
      case 100: dailyMilestonesChannel.send(message100(discordUser, accountabilityChannel)); break;
      case 150: dailyMilestonesChannel.send(message150(discordUser, accountabilityChannel)); break;
      case 200: dailyMilestonesChannel.send(message200(discordUser, accountabilityChannel)); break;
      case 250: dailyMilestonesChannel.send(message250(discordUser, accountabilityChannel)); break;
      case 300: dailyMilestonesChannel.send(message300(discordUser, accountabilityChannel)); break;
      case 350: dailyMilestonesChannel.send(message350(discordUser, accountabilityChannel)); break;
      case 400: dailyMilestonesChannel.send(message400(discordUser, accountabilityChannel)); break;
      case 450: dailyMilestonesChannel.send(message450(discordUser, accountabilityChannel)); break;
      case 500: dailyMilestonesChannel.send(message500(discordUser, accountabilityChannel)); break;
      case 550: dailyMilestonesChannel.send(message550(discordUser, accountabilityChannel)); break;
      case 600: dailyMilestonesChannel.send(message600(discordUser, accountabilityChannel)); break;
      case 650: dailyMilestonesChannel.send(message650(discordUser, accountabilityChannel)); break;
      case 700: dailyMilestonesChannel.send(message700(discordUser, accountabilityChannel)); break;
      default: return null
    }    

    await juliusReade.send(`reactTallyUpdate - ${discordUser.username} - ${count}`);
    logger.info(`reactTallyUpdate - ${discordUser.username} - ${count}`);

  } catch(error) {
    await juliusReade.send(`reactTallyUpdate - ${discordUser.username} - ${error}`);
    logger.error(`reactTallyUpdate - ${discordUser.username} - ${error}`);
    throw new Error(`reactTallyUpdate - ${discordUser.username} - ${error}`);
  }
}  

module.exports = reactTallyUpdate;
