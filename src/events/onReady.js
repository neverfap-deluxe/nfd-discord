const onReady = (client, logger) => {
  return function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(client.user.username + ' - (' + client.user.id + ')');
  }
}

module.exports = onReady;