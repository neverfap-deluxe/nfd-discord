// const _ = require('lodash');
const moment = require('moment');
const knex = require('../../db/knex');
const uuidv4 = require('uuid/v4');
const { generateTallyDates } = require('../../util/util-time');

const theseUsersReactedToday = require('../onInterval/theseUsersReactedToday');

const theseUsersPostedToday = async (client, logger, juliusReade) => {
  try {
    const today1153 = process.env.MODE === 'dev' ? moment('0:28', 'HH:mm') : moment('11:53', 'HH:mm');
    const today1207 = process.env.MODE === 'dev' ? moment('23:30', 'HH:mm') : moment('12:07', 'HH:mm');

    const normalTallyDate = process.env.MODE === 'dev' ? moment('11:00', 'HH:mm') : moment('12:00', 'HH:mm')

    const accountability_tally = await knex('accountability_tally').whereBetween('tally_date', [today1153, today1207]).first();
    
    if (accountability_tally) {
      if (!accountability_tally.completed) {
        processUsersPostedToday(client, logger, juliusReade, today1153, today1207);
      }
    } else {
      await knex('accountability_tally').insert({id: uuidv4(), tally_date: normalTallyDate.format()});

      logger.info(`theseUsersPostedToday - created accountability tally for today.`);
      await juliusReade.send(`theseUsersPostedToday - created accountability tally for today.`);

      processUsersPostedToday(client, logger, juliusReade, today1153, today1207);
    }
  } catch(error) {
    await juliusReade.send(`theseUsersPostedToday - ${error}`);
    logger.error(`theseUsersPostedToday - ${error}`)
    throw new Error(`theseUsersPostedToday - ${error}`);
  }
};

const processUsersPostedToday = async (client, logger, juliusReade, today1153, today1207) => {
  try {
    const { startOfTally, endOfTally } = generateTallyDates();
    const accountabilityChannel = client.channels.get(process.env.ACCOUNTABILITY_CHANNEL_ID);
    const dailyMilestonesChannel = client.channels.get(process.env.DAILY_MILESTONES_CHANNEL_ID);

    await knex('accountability_tally').whereBetween('tally_date', [today1153, today1207]).update({completed: true});

    const accountabilityMessages = 
      await knex('accountability_messages')
        .whereBetween('created_at', [startOfTally, endOfTally])
        .select('id', 'db_users_id');

    let finalMessageTitle = `${accountabilityChannel} update!\n\n`;
    let finalMessageCount = 0;
    let finalMessageBody = '';
    let finalTextString = finalMessageTitle;
  
    await dailyMilestonesChannel.send(finalMessageTitle);
  
    for (const message of accountabilityMessages) {
      const db_user = 
        await knex('db_users')
          .where('id', message.db_users_id)
          .select('id', 'discord_id')
          .first();
    
      if (db_user) {
        const discordUser = await client.fetchUser(db_user.discord_id);
        const accountabilityMessageCount = 
          await knex('accountability_messages')
            .where('db_users_id', db_user.id)
            .count();
        const count = parseInt(accountabilityMessageCount[0].count);
  
        // NOTE: Because we're not getting the total number of days committed, we're getting the number of people participated.
        finalMessageCount += 1;
  
        switch(count) {
          case 1:  finalMessageBody += `\`${discordUser.username}\` - Day ${count} - First Day Dynamite! :boom:\n`; break;
          case 3:  finalMessageBody += `\`${discordUser.username}\` - Day ${count} - Triple Threat! :stuck_out_tongue_closed_eyes:\n`; break;
          case 7:  finalMessageBody += `\`${discordUser.username}\` - Day ${count} - One Week Champion! :lifter:\n`; break;
          case 10: finalMessageBody += `\`${discordUser.username}\` - Day ${count} - 10 Day Mania! :christmas_tree:\n`; break;
          case 14: finalMessageBody += `\`${discordUser.username}\` - Day ${count} - Two Week Wonder! :surfer:\n`; break;
          case 20: finalMessageBody += `\`${discordUser.username}\` - Day ${count} - 20 Day Admiration :rainbow:!\n`; break;
          case 21: finalMessageBody += `\`${discordUser.username}\` - Day ${count} - 3 Week Hedonist! :cherry_blossom:\n`; break;
          case 25: finalMessageBody += `\`${discordUser.username}\` - Day ${count} - Quarter Master! :gem:\n`; break;
          case 28: finalMessageBody += `\`${discordUser.username}\` - Day ${count} - 4 Week OMFG! :bangbang:\n`; break;
          case 30: finalMessageBody += `\`${discordUser.username}\` - Day ${count} - 30 Day Craze! :tada:\n`; break;
          case 35: finalMessageBody += `\`${discordUser.username}\` - Day ${count} - 5 Week Wowzer! :punch:\n`; break;
          case 40: finalMessageBody += `\`${discordUser.username}\` - Day ${count} - 40 Day Domination! :100:\n`; break;
          case 42: finalMessageBody += `\`${discordUser.username}\` - Day ${count} - 6 Week Kaiser! :squid:\n`; break;
          case 49: finalMessageBody += `\`${discordUser.username}\` - Day ${count} - 7 Week Emperor! :crossed_swords:\n`; break;
          case 50: finalMessageBody += `\`${discordUser.username}\` - Day ${count} - HALF A BLOODY CENTURY! :statue_of_liberty:\n`; break;
          default: finalMessageBody += `\`${discordUser.username}\` - Day ${count}\n`;
        }

        await juliusReade.send(finalMessageBody);
        // if (finalMessageBody.length > 1600) {
        await dailyMilestonesChannel.send(finalMessageBody);      
        finalTextString += finalMessageBody;
        finalMessageBody = '';
        // }
      }
    }
  
    // if (finalMessageBody.length > 0) {
    //   await dailyMilestonesChannel.send(finalMessageBody);
    // }
    
    const finalMessageCountFull = `Total accountability participants: ${finalMessageCount}\n\n`;
    await dailyMilestonesChannel.send(finalMessageCountFull);
  
    logger.info(`Accountability tally posted for today.`);
    await juliusReade.send(`Accountability tally posted for today.`);
  
    finalTextString += finalMessageCountFull;
    await knex('accountability_tally').whereBetween('tally_date', [today1153, today1207]).update({post_message: finalTextString, total_participants: finalMessageCount});
  
    theseUsersReactedToday(client, logger, juliusReade, today1153, today1207);
  } catch (error) {
    await juliusReade.send(`processUsersPostedToday - ${error}`);
    logger.error(`processUsersPostedToday - ${error}`)
    throw new Error(`processUsersPostedToday - ${error}`);
  }
}


module.exports = theseUsersPostedToday;