const sendMessageHelper = (channel, message) => {
  channel.send(message)
    .then(message => console.log(`Sent channel message: ${message}`))
    .catch(console.error);
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

const isLastMessageTheBot = async (generalChannel) => {
  const lastMessage = await generalChannel.fetchMessage(generalChannel.lastMessageID)
  return lastMessage.author.id === process.env.NEVERFAP_DELUXE_BOT_ID;
}

const fetchChannelMessagesHelper = async (channel) => {
  const messages = await channel.fetchMessages({ limit: 15 }); // channel.fetchMessages({ limit: 10 });
  return messages;
}

const generateRandomNumber = (min, max) => {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin + 1)) + newMin;
}

module.exports = {
  sendMessageHelper,
  deleteMessageHelper,
  configureLogger,
  isLastMessageTheBot,
  fetchChannelMessagesHelper,
  generateRandomNumber,
}
