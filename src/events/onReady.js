const onReady = (client, logger) => {
  return function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(client.username + ' - (' + client.id + ')');
  }
}

module.exports = onReady;