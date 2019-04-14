const {
  sendMessageHelper,
} = require('../../util/util');

const {
  ACCOUNTABILITY_EXAMPLE_COMMAND
} = require('../../const/COMMAND');

// const insertAccountabilityMessage = require('./onMessage/insertAccountabilityMessage');

const validateAccountabilityPost = (client, dbUser, discordUser, channel, message, twitterClient, redditClient) => {
  const messageAuthor = message.author;

  const toImproveRegEx = new RegExp("improve", "i");
  const doesContainToImproveRegEx = toImproveRegEx.test(message.content);
  const toImproveChannelMessage = doesContainToImproveRegEx ? "" : "a 'To Improve'";
  
  // const healthyCopingMechanismRegEx = new RegExp("healthy coping mechanisms", "i");
  // const doesContainHealthyCopingMechanismRegEx = healthyCopingMechanismRegEx.test(message.content);
  // const healthyCopingMechanismWarningMessage = doesContainHealthyCopingMechanismRegEx ? "" : "# Missing 'Healthy Coping Mechanisms' section.";
  // const healthyCopingMechanismChannelMessage = doesContainHealthyCopingMechanismRegEx ? "" : "a Healthy Coping Mechanisms.";
  
  // const finalChannelAndMessage = !doesContainToImproveRegEx && !doesContainHealthyCopingMechanismRegEx ? "" : "and";
  const finalChannelMessage = `Hey ${messageAuthor}! Your post needs to include ${toImproveChannelMessage} section. If you need an example of what it should look like please type and enter \`!${ACCOUNTABILITY_EXAMPLE_COMMAND}\` :heart:`; // ${finalChannelAndMessage} ${healthyCopingMechanismChannelMessage}
  
  if (!doesContainToImproveRegEx /* || !doesContainHealthyCopingMechanismRegEx */) {
    sendMessageHelper(channel, finalChannelMessage, 'validateAccountabilityPost');
    // sendMessageHelper(messageAuthor, `Hey buddy!\n ${finalChannelMessage}`, 'validateAccountabilityPost');
    
    // insertAccountabilityMessage(client, dbUser, discordUser, message, twitterClient, redditClient);
  }
}

module.exports = validateAccountabilityPost;