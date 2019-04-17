// const _ = require('lodash');
const moment = require('moment');

const knex = require('../../db/knex');

const sendYesterdayPostReminder = async (client, logger, juliusReade) => {
  try {
    const twentyFourHoursBeforeToday =  process.env.MODE === 'dev' ? (
      moment().subtract(20, 'seconds')
    ) : (
      moment().subtract(24, 'hours')
    );

    const twelveHoursBeforeToday =  process.env.MODE === 'dev' ? (
      moment().subtract(10, 'seconds')
    ) : (
      moment().subtract(12, 'hours')
    );

    const accountabilityMessages = 
      await knex('accountability_messages')
        .whereBetween('created_at', [twentyFourHoursBeforeToday, twelveHoursBeforeToday])
        .select('id', 'content', 'db_users_id');
  
    if (accountabilityMessages.length > 0) {
      for (const message of accountabilityMessages) {

        const db_user = await knex('db_users').where('id', message.db_users_id).select('id', 'discord_id', 'sentYesterdayPostMessage').first();

        if (db_user && !db_user.sentYesterdayPostMessage) {
          const discordUser = await client.fetchUser(db_user.discord_id);
  
          const finalMessage = `Here's a friendly reminder of what you posted yesterday!\n\n\`\`\`${message.content}\`\`\`\nIf you need any help with anything, please feel free to interact with the community. We're more-than happy to help :heart:`;
    
          await discordUser.send(finalMessage)
          await juliusReade.send(`${discordUser.username} - yesterday post sent`);
          logger.info(`${discordUser.username} - yesterday post sent`)
    
          await knex('db_users').where('id', db_user.id).update({sentYesterdayPostMessage: true});  
        } 
      }  
    }
  } catch(error) {
    await juliusReade.send(`sendYesterdayPostReminder - ${error}`);
    logger.error(`sendYesterdayPostReminder - ${error}`)
    throw new Error(`sendYesterdayPostReminder - ${error}`);
  }
};

module.exports = sendYesterdayPostReminder;