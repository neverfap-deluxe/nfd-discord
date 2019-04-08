const sendMessageHelper = async (channel, message) => {
  try {
    const sendMessage = await channel.send(message);
    console.log(`Sent channel message: ${sendMessage}`);
  } catch(error) {
    console.log(message);
    console.log(error);
  }
}

const deleteMessageHelper = (message) => {
  message.delete()
    .then(msg => console.log(`Deleted message from ${msg.author.username}`))
    .catch(console.error);
}

const configureLogger = (logger) => {
  logger.remove(logger.transports.Console);
  logger.add(new logger.transports.Console, {
    colorize: true
  });
  logger.level = 'debug';
}

const isLastMessageTheBot = async (channel) => {
  try {
    if (channel && channel.lastMessageID) {
      const lastMessage = await channel.fetchMessage(channel.lastMessageID);
      if (
        lastMessage && 
        lastMessage.author && 
        lastMessage.author.id === process.env.NEVERFAP_DELUXE_BOT_ID
        ) {
          return true;
      }
    }
    return false;
  } catch(error) {
    console.log(error);
  }
}

const generateRandomNumber = (min, max) => {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin + 1)) + newMin;
}

const generateDelayValues = (mode) => {
  if (mode === "dev") {
    return {
      onIntervalFiveMinutesDelay: 1000 * 5 * 1, // every 5 seconds
      onIntervalThreeHoursDelay: 1000 * 10 * 1, // every 10 seconds
      onIntervalFourHoursDelay: 1000 * 15 * 1, // every 15 minutes
      onIntervalDayDelay: 1000 * 60 * 60 * 1, // every 5 minutes
      onIntervalWeekDelay: 1000 * 60 * 60 * 1, // every 5 minutes
    }
  }
  return {
    onIntervalFiveMinutesDelay: 1000 * 60 * 5 * 1, // every five minutes
    onIntervalThreeHoursDelay: 1000 * 60 * 60 * 3, // every three hours
    onIntervalFourHoursDelay: 1000 * 60 * 60 * 4, // every four hours
    onIntervalDayDelay: 1000 * 60 * 60 * 24, // every 24 hours
    onIntervalWeekDelay: 1000 * 60 * 60 * 24 * 7, // every week
  }
}

const isAccountabilityMessage = (content) => content.includes("/") || content.includes("19");

module.exports = {
  sendMessageHelper,
  deleteMessageHelper,
  configureLogger,
  isLastMessageTheBot,
  generateRandomNumber,
  generateDelayValues,
  isAccountabilityMessage,
}
