const {
  ACCOUNTABILITY_COMMAND,
  ACCOUNTABILITY_EXAMPLE_COMMAND
} = require('../../const/COMMAND');

const validateAccountabilityPost = async (client, logger, dbUser, discordUser, channel, message, twitterClient, redditClient) => {
  try {

    const messageAuthor = message.author;

    const toImproveRegEx = new RegExp("improve", "i");
    const doesContainToImproveRegEx = toImproveRegEx.test(message.content);
    // const toImproveChannelMessage = doesContainToImproveRegEx ? "" : "a 'To Improve'";

    const finalChannelMessage = `Hey ${messageAuthor}! Your post needs to include a 'To Improve' section. If you need an example of what it should look like please type and enter \`!${ACCOUNTABILITY_EXAMPLE_COMMAND}\` :heart:`; // ${finalChannelAndMessage} ${healthyCopingMechanismChannelMessage}
    
    const meditateRegEx = new RegExp("meditat", "i");
    const doesContainMeditateRegEx = meditateRegEx.test(message.content);
    const meditateMessage = `Hey ${messageAuthor}! I noticed your post didn't include any mention of meditation! As part of the #accountability rules, you must be meditating everyday otherwise you're gonna struggle big time! For the ${channel} guidelines please type and enter \`!${ACCOUNTABILITY_COMMAND}\``;

    // TODO - Check if they've put a PMO counter of any sort. 'day 89'

    if (!doesContainToImproveRegEx) {
      const msg = await channel.send(finalChannelMessage);
      logger.info(`Sent channel message: ${msg.id} - validateAccountabilityPost`);
    } 

    if (!doesContainMeditateRegEx) {
      const msg = await channel.send(meditateMessage);
      logger.info(`Sent channel message: ${msg.id} - validateAccountabilityPost`);
    }
  } catch(error) {
    logger.error(`sending message failed - send message - ${error} - validateAccountabilityPost`);
    throw new Error(`sending message failed - send message - ${error} - validateAccountabilityPost`);
  }
}


module.exports = validateAccountabilityPost;







// // const healthyCopingMechanismRegEx = new RegExp("healthy coping mechanisms", "i");
// // const doesContainHealthyCopingMechanismRegEx = healthyCopingMechanismRegEx.test(message.content);
// // const healthyCopingMechanismWarningMessage = doesContainHealthyCopingMechanismRegEx ? "" : "# Missing 'Healthy Coping Mechanisms' section.";
// // const healthyCopingMechanismChannelMessage = doesContainHealthyCopingMechanismRegEx ? "" : "a Healthy Coping Mechanisms.";

// // const finalChannelAndMessage = !doesContainToImproveRegEx && !doesContainHealthyCopingMechanismRegEx ? "" : "and";
// const finalChannelMessage = `Hey ${messageAuthor}! Your post needs to include ${toImproveChannelMessage} section. If you need an example of what it should look like please type and enter \`!${ACCOUNTABILITY_EXAMPLE_COMMAND}\` :heart:`; // ${finalChannelAndMessage} ${healthyCopingMechanismChannelMessage}

// // POSSIBLE - Maybe check to see if the word 'meditation' was used.

// if (!doesContainToImproveRegEx /* || !doesContainHealthyCopingMechanismRegEx */) {
