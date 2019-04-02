const sendChannelMessageHelper = (channel, message) => {
  channel.send(message)
    .then(message => console.log(`Sent channel message: ${message.content}`))
    .catch(console.error);
}

const sendDirectMessageHelper = (member, message) => {
  member.createDM(message)
    .then(message => console.log(`Sent DM message: ${message.content}`))
    .catch(console.error);
}

const configureLogger = (logger) => {
  logger.remove(logger.transports.Console);
  logger.add(new logger.transports.Console, {
    colorize: true
  });
  logger.level = 'debug';
}

const generateRandomNumber = () => {

}

module.exports = {
  sendChannelMessageHelper,
  sendDirectMessageHelper,
  configureLogger,
  generateRandomNumber,
}
