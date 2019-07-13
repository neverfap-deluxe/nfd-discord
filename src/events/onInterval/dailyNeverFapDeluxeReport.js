// const _ = require('lodash');
const moment = require('moment');

const knex = require('../../db/knex');

const dailyNeverFapDeluxeReport = async (client, logger, juliusReade) => {
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

        const db_user =
          await knex('db_users')
          .where('id', message.db_users_id)
          .select('id', 'discord_id', 'sentYesterdayPostMessage')
          .first();

        if (db_user && !db_user.sentYesterdayPostMessage) {
          await knex('db_users').where('id', db_user.id).update({sentYesterdayPostMessage: true});  

          const discordUser = await client.fetchUser(db_user.discord_id);  
          
          const accountabilityMessageCount = await knex('accountability_messages').where('db_users_id', db_user.id).count();
          const accountabilityReactMessageCount = await knex('accountability_reacts').where('db_users_id', db_user.id).count();

          const accountabilityReacts = 
            await knex('accountability_reacts')
              .andWhere('accountability_messages_id', message.id)
              .select('emoji_name');

          const messageEmojis = accountabilityReacts.map(react => react.emoji_name).join("");

const finalMessage = `**The Daily NeverFap Deluxe Report**\n
Total commitment: ${parseInt(accountabilityMessageCount[0].count)} Days
Total emoji reacts: ${parseInt(accountabilityReactMessageCount[0].count)} Emojis\n
Here's a friendly reminder of what you posted yesterday!\n
\`\`\`${message.content}\`\`\`
Post emojis: ${messageEmojis}\n
If you need any help with anything, please interact with our lovely community! We're more-than happy to help! :heart:`;
    
          await discordUser.send(finalMessage)
          await juliusReade.send(`${discordUser.username} - yesterday post sent`);
          logger.info(`${discordUser.username} - yesterday post sent`)
        } 
      }  
    }
  } catch(error) {
    await juliusReade.send(`dailyNeverFapDeluxeReport - ${error}`);
    logger.error(`dailyNeverFapDeluxeReport - ${error}`)
    throw new Error(`dailyNeverFapDeluxeReport - ${error}`);
  }
};

module.exports = dailyNeverFapDeluxeReport;