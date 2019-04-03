
const sendChannelMessageHelper = (channel, message) => {
  channel.send(message)
    .then(message => console.log(`Sent channel message: ${message.content}`))
    .catch(console.error);
}

const sendDirectMessageHelper = (member, message) => {
  console.log(message)
  member.send(message)
    .then(messageResp => console.log(`Sent DM message: ${messageResp}`))
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

const generateRandomNumber = (min, max) => {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin + 1)) + newMin;
}

module.exports = {
  sendChannelMessageHelper,
  sendDirectMessageHelper,
  configureLogger,
  generateRandomNumber,
  isLastMessageTheBot,
}
