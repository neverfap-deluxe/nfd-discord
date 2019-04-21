const knex =  require('../../db/knex');
const { RichEmbed } = require('discord.js');

const upvoteUserPost1 = (discordUser, accountabilityChannel) => new RichEmbed().setTitle("#accountability update").setDescription(
`${discordUser} just posted their 1st ever ${accountabilityChannel} post! Let's give them a warm welcome with some awesome reacts! :tada:`
);
const upvoteUserPost3 = (discordUser, accountabilityChannel) => new RichEmbed().setTitle("#accountability update").setDescription(
`${discordUser} just posted their 3rd ever ${accountabilityChannel} post! What an absolute champion! :champagne_glass:`
);
const upvoteUserPost7 = (discordUser, accountabilityChannel) => new RichEmbed().setTitle("#accountability update").setDescription(
`${discordUser} just posted their 7th ever ${accountabilityChannel} post! One whole week, whaaaaa :heart_eyes:`
);
const upvoteUserPost10 = (discordUser, accountabilityChannel) => new RichEmbed().setTitle("#accountability update").setDescription(
`${discordUser} just posted their 10th ever ${accountabilityChannel} post! Ummmmmm, will you marry me? :ring:`
);
const upvoteUserPost14 = (discordUser, accountabilityChannel) => new RichEmbed().setTitle("#accountability update").setDescription(
`${discordUser} just posted their 14th ever ${accountabilityChannel} post! Two weeks of commitment is incredible! Keep up the DOMINATION! :boom: :boom: :boom:`
);
const upvoteUserPost20 = (discordUser, accountabilityChannel) => new RichEmbed().setTitle("#accountability update").setDescription(
`${discordUser} just posted their 20th ever ${accountabilityChannel} post! Twenty whole days of absolutely killing it! :dizzy_face:`
);
const upvoteUserPost21 = (discordUser, accountabilityChannel) => new RichEmbed().setTitle("#accountability update").setDescription(
`${discordUser} just posted their 21st ever ${accountabilityChannel} post! Did anyone order 3 WHOLE WEEKS OF BLOODY COMMITMENT!!! :scream:`
);
const upvoteUserPost25 = (discordUser, accountabilityChannel) => new RichEmbed().setTitle("#accountability update").setDescription(
`${discordUser} just posted their 25th ever ${accountabilityChannel} post! Quarter of a century! Absolute role model! :family_mwgb:`
);
const upvoteUserPost28 = (discordUser, accountabilityChannel) => new RichEmbed().setTitle("#accountability update").setDescription(
`${discordUser} just posted their 28th ever ${accountabilityChannel} post! 4 whole weeks of being a complete BOSS! :gorilla:`
);
const upvoteUserPost30 = (discordUser, accountabilityChannel) => new RichEmbed().setTitle("#accountability update").setDescription(
`${discordUser} just posted their 30th ever ${accountabilityChannel} post! 30 days of proving yourself right! :laughing:`
);
const upvoteUserPost35 = (discordUser, accountabilityChannel) => new RichEmbed().setTitle("#accountability update").setDescription(
`${discordUser} just posted their 35th ever ${accountabilityChannel} post! 5 weeks. My gosh. 5 WEEKS YOU ABSOLUTE MONSTER! :smiling_imp:`
);
const upvoteUserPost40 = (discordUser, accountabilityChannel) => new RichEmbed().setTitle("#accountability update").setDescription(
`${discordUser} just posted their 40th ever ${accountabilityChannel} post! Did you seriously just make 40 days? YUSSSSSS! :man_dancing:`
);
const upvoteUserPost42 = (discordUser, accountabilityChannel) => new RichEmbed().setTitle("#accountability update").setDescription(
`${discordUser} just posted their 42th ever ${accountabilityChannel} post! 6 weeks of commitment, I can't believe it! Take all my money, NOW! :dollar::dollar::dollar::dollar::dollar:`
);
const upvoteUserPost49 = (discordUser, accountabilityChannel) => new RichEmbed().setTitle("#accountability update").setDescription(
`${discordUser} just posted their 49th ever ${accountabilityChannel} post! 7 week special coming right up! :hamburger: :fries: :hotdog: :pizza: :spaghetti: :taco: :burrito:`
);
const upvoteUserPost50 = (discordUser, accountabilityChannel) => new RichEmbed().setTitle("#accountability update").setDescription(
`${discordUser} just posted their 50th ever ${accountabilityChannel} post! It happened. Like, it actually happened. I am speechless. Well done! :hugging:`
);

const upvoteUserPost = async (client, logger, db_user, discordUser, message, juliusReade) => {
  try {
    // const recoveryChannel = client.channels.get(process.env.RECOVERY_CHANNEL_ID);
    const milestonesChannel = client.channels.get(process.env.DAILY_MILESTONES_CHANNEL_ID);
    const accountabilityChannel = client.channels.get(process.env.ACCOUNTABILITY_CHANNEL_ID);
    const accountabilityMessageCount = await knex('accountability_messages').where('db_users_id', db_user.id).count();
    const count = parseInt(accountabilityMessageCount[0].count);

    switch(count) {
      case 1:  milestonesChannel.send(upvoteUserPost1(discordUser, accountabilityChannel)); break;
      case 3:  milestonesChannel.send(upvoteUserPost3(discordUser, accountabilityChannel)); break;
      case 7:  milestonesChannel.send(upvoteUserPost7(discordUser, accountabilityChannel)); break;
      case 10: milestonesChannel.send(upvoteUserPost10(discordUser, accountabilityChannel)); break;
      case 14: milestonesChannel.send(upvoteUserPost14(discordUser, accountabilityChannel)); break;
      case 20: milestonesChannel.send(upvoteUserPost20(discordUser, accountabilityChannel)); break;
      case 21: milestonesChannel.send(upvoteUserPost21(discordUser, accountabilityChannel)); break;
      case 25: milestonesChannel.send(upvoteUserPost25(discordUser, accountabilityChannel)); break;
      case 28: milestonesChannel.send(upvoteUserPost28(discordUser, accountabilityChannel)); break;
      case 30: milestonesChannel.send(upvoteUserPost30(discordUser, accountabilityChannel)); break;
      case 35: milestonesChannel.send(upvoteUserPost35(discordUser, accountabilityChannel)); break;
      case 40: milestonesChannel.send(upvoteUserPost40(discordUser, accountabilityChannel)); break;
      case 42: milestonesChannel.send(upvoteUserPost42(discordUser, accountabilityChannel)); break;
      case 49: milestonesChannel.send(upvoteUserPost49(discordUser, accountabilityChannel)); break;
      case 50: milestonesChannel.send(upvoteUserPost50(discordUser, accountabilityChannel)); break;
      default: return null;
    }

    logger.info(`upvoteUserPost1 message sent - ${count} - ${discordUser.username}`);

  } catch(error) {
    await juliusReade.send(`upvoteUserPost - ${discordUser.username} - ${error}`);
    logger.error(`upvoteUserPost - ${error}`);
    throw new Error(`upvoteUserPost - ${error}`);
  }
}

module.exports = upvoteUserPost;
