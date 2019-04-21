const {
  ACCOUNTABILITY_EXAMPLE_COMMAND
} = require('../../const/COMMAND');

const validateAccountabilityPost = async (client, logger, dbUser, discordUser, channel, message, twitterClient, redditClient) => {
  const messageAuthor = message.author;

  const toImproveRegEx = new RegExp("improve", "i");
  const doesContainToImproveRegEx = toImproveRegEx.test(message.content);
  const toImproveChannelMessage = doesContainToImproveRegEx ? "" : "a 'To Improve'";

  const finalChannelMessage = `Hey ${messageAuthor}! Your post needs to include ${toImproveChannelMessage} section. If you need an example of what it should look like please type and enter \`!${ACCOUNTABILITY_EXAMPLE_COMMAND}\` :heart:`; // ${finalChannelAndMessage} ${healthyCopingMechanismChannelMessage}
  
  // TODO - Maybe check if the word 'meditation' was used. and prompt the user about it.

  if (!doesContainToImproveRegEx) {
    try {
      const msg = await channel.send(finalChannelMessage);
      logger.info(`Sent channel message: ${msg.id} - validateAccountabilityPost`);
    } catch(error) {
      logger.error(`sending message failed - send message - ${error} - validateAccountabilityPost`);
      throw new Error(`sending message failed - send message - ${error} - validateAccountabilityPost`);
    }
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
