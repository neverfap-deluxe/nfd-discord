const knex = require('../../db/knex');

const updateTier = async (client, logger, db_user, discordUser, message, juliusReade) => {
  try {
    const tiers1 = 7;
    const tiers2 = 14;
    const tiers3 = 21;
    const tiers4 = 30;
    const tiers5 = 60;
    const tiers6 = 90;
   
    // await juliusReade.send(`hello2 ${message}`);
    // await juliusReade.send(`hello2 ${message.member}`);
    // await juliusReade.send(message.member);

    const isMemberHelpfulNeverFapper = message.member.roles.find(r => r.id === process.env.HELPFUL_NEVERFAPPER_ID);
   
    if(!isMemberHelpfulNeverFapper) {
      const accountabilityMessages = await knex('accountability_reacts').count();
      const accountabilityMessagesCount = parseInt(accountabilityMessages[0].count);
  
      if (accountabilityMessagesCount <= tiers1) {
        // TODO check current user role first and then check if they have been.
        if (message.member.roles.find(r => r.id === process.env.NEW_NEVERFAPPER_ID)) {
          await message.member.removeRole(process.env.NEW_NEVERFAPPER_ID);
        }
        if (message.member.roles.find(r => r.id !== process.env.TIER1_ID)) {
          await message.member.addRole(process.env.TIER1_ID);
        }
      } else if (accountabilityMessagesCount >= tiers1 && accountabilityMessagesCount < tiers2) {
        if (message.member.roles.find(r => r.id === process.env.TIER1_ID)) {
          await message.member.removeRole(process.env.TIER1_ID);
        }
        if (message.member.roles.find(r => r.id !== process.env.TIER2_ID)) {
          await message.member.addRole(process.env.TIER2_ID);
        }
      } else if (accountabilityMessagesCount >= tiers2 && accountabilityMessagesCount < tiers3) {
        if (message.member.roles.find(r => r.id === process.env.TIER2_ID)) {
          await message.member.removeRole(process.env.TIER2_ID);
        }
        if (message.member.roles.find(r => r.id !== process.env.TIER3_ID)) {
          await message.member.addRole(process.env.TIER3_ID);
        }
      } else if (accountabilityMessagesCount >= tiers3 && accountabilityMessagesCount < tiers4) {
        if (message.member.roles.find(r => r.id === process.env.TIER3_ID)) {
          await message.member.removeRole(process.env.TIER3_ID);
        }
        if (message.member.roles.find(r => r.id !== process.env.TIER4_ID)) {
          await message.member.addRole(process.env.TIER4_ID);
        }
      } else if (accountabilityMessagesCount >= tiers5 && accountabilityMessagesCount < tiers6) {
        if (message.member.roles.find(r => r.id === process.env.TIER4_ID)) {
          await message.member.removeRole(process.env.TIER4_ID);
        }
        if (message.member.roles.find(r => r.id !== process.env.TIER5_ID)) {
          await message.member.addRole(process.env.TIER5_ID);
        }
      } else if (tiers6 <= accountabilityMessagesCount) {
        if (message.member.roles.find(r => r.id === process.env.TIER5_ID)) {
          await message.member.removeRole(process.env.TIER5_ID);
        }
        if (message.member.roles.find(r => r.id !== process.env.TIER6_ID)) {
          await message.member.addRole(process.env.TIER6_ID);
        }
      }
    }

  } catch(error) {
    await juliusReade.send(`updateTier error - ${message} - ${message.member} - ${discordUser.username} - ${error}`);
    logger.error(`updateTier - ${error}`);
    throw new Error(`updateTier - ${error}`);
  }  
 }

 module.exports = updateTier;
