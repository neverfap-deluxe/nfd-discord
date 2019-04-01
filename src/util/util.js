// NOTE: Not sure if message is the full message
const sendMessageHelper = (channelId, message) => {
  client.sendMessage({
    to: channelId,
    message: message
  })
  .then(message => console.log(`Sent message: ${message.content}`))
  .catch(console.error);
}

const configureLogger = (logger) => {
  logger.remove(logger.transports.Console);
  logger.add(new logger.transports.Console, {
    colorize: true
  });
  logger.level = 'debug';
}

module.exports = {
  configureLogger,
  sendMessageHelper,
}
