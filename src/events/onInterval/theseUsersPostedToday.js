// const _ = require('lodash');
const moment = require('moment');
const knex = require('../../db/knex');
const uuidv4 = require('uuid/v4');

const theseUsersReactedToday = require('./theseUsersReactedToday');

const theseUsersPostedToday = async (client, logger, juliusReade) => {
  try {
    const today1128 = process.env.MODE === 'dev' ? moment('9:28', 'HH:mm') : moment('11:28', 'HH:mm');
    const today1232 = process.env.MODE === 'dev' ? moment('11:30', 'HH:mm') : moment('12:32', 'HH:mm');

    const normalTallyDate = process.env.MODE === 'dev' ? moment('11:00', 'HH:mm') : moment('12:00', 'HH:mm')

    if (moment().isBetween(today1128, today1232)) {
      const accountability_tally = await knex('accountability_tally').whereBetween('tally_date', [today1128, today1232]).first();
      
      if (accountability_tally) {
        if (!accountability_tally.completed) {
          processUsersPostedToday(client, logger, juliusReade, today1128, today1232);
        }
      } else {
        await knex('accountability_tally').insert({id: uuidv4(), tally_date: normalTallyDate.format()});

        logger.info(`theseUsersPostedToday - created accountability tally for today.`);
        await juliusReade.send(`theseUsersPostedToday - created accountability tally for today.`);

        processUsersPostedToday(client, logger, juliusReade, today1128, today1232);
      }
    }
  } catch(error) {
    await juliusReade.send(`theseUsersPostedToday - ${error}`);
    logger.error(`theseUsersPostedToday - ${error}`)
    throw new Error(`theseUsersPostedToday - ${error}`);
  }
};

const processUsersPostedToday = async (client, logger, juliusReade, today1128, today1232) => {

  const today = moment().format();
  const twentyFourHoursBeforeToday = process.env.MODE === 'dev' ? (
    moment().subtract(20, 'seconds')
  ) : (
    moment().subtract(24, 'hours')
  );

  const accountabilityMessages = await knex('accountability_messages').whereBetween('created_at', [twentyFourHoursBeforeToday, today]);
  const accountabilityChannel = client.channels.get(process.env.ACCOUNTABILITY_CHANNEL_ID);
  let finalMessage = `${accountabilityChannel} update!\n\n`;

  for (const message of accountabilityMessages) {
    const db_user = await knex('db_users').where('id', message.db_users_id).select('id', 'discord_id').first();
    if (db_user) {
      const discordUser = await client.fetchUser(db_user.discord_id);
      const accountabilityMessageCount = await knex('accountability_messages').where('db_users_id', db_user.id).count();
      const count = parseInt(accountabilityMessageCount[0].count);

      switch(count) {
        case 1: 
          finalMessage += `${discordUser} - Day ${count} - First Day Dynamite! :boom:\n`; break;
        case 3: 
          finalMessage += `${discordUser} - Day ${count} - Triple Threat! :stuck_out_tongue_closed_eyes:\n`; break;
        case 7:
          finalMessage += `${discordUser} - Day ${count} - One Week Champion! :lifter:\n`; break;
        case 10: 
          finalMessage += `${discordUser} - Day ${count} - 10 Day Mania! :christmas_tree:\n`; break;
        case 14: 
          finalMessage += `${discordUser} - Day ${count} - Two Week Wonder! :surfer:\n`; break;
        case 20: 
          finalMessage += `${discordUser} - Day ${count} - 20 Day Admiration :rainbow:!\n`; break;
        case 21: 
          finalMessage += `${discordUser} - Day ${count} - 3 Week Hedonist! :cherry_blossom:\n`; break;
        case 25: 
          finalMessage += `${discordUser} - Day ${count} - Quarter Master! :gem:\n`; break;
        case 28: 
          finalMessage += `${discordUser} - Day ${count} - 4 Week OMFG! :bangbang:\n`; break;
        case 30: 
          finalMessage += `${discordUser} - Day ${count} - 30 Day Craze! :tada:\n`; break;
        case 35: 
          finalMessage += `${discordUser} - Day ${count} - 5 Week Wowzer! :punch:\n`; break;
        case 40:
          finalMessage += `${discordUser} - Day ${count} - 40 Day Domination! :100:\n`; break;
        case 42:
          finalMessage += `${discordUser} - Day ${count} - 6 Week Kaiser! :squid:\n`; break;
        case 49:
          finalMessage += `${discordUser} - Day ${count} - 7 Week Emperor! :crossed_swords:\n`; break;
        case 50:
          finalMessage += `${discordUser} - Day ${count} - HALF A BLOODY CENTURY! :statue_of_liberty:\n`; break;
        default:
          finalMessage += `${discordUser} - Day ${count}\n`;
      }
    }
  }
  
  const dailyMilestonesChannel = client.channels.get(process.env.DAILY_MILESTONES_CHANNEL_ID);
  await dailyMilestonesChannel.send(finalMessage);

  logger.info(`Accountability tally posted for today.`);
  await juliusReade.send(`Accountability tally posted for today.`);

  await knex('accountability_tally').whereBetween('tally_date', [today1128, today1232]).update({post_message: finalMessage, completed: true});

  theseUsersReactedToday(client, logger, juliusReade, today1128, today1232);
}


module.exports = theseUsersPostedToday;