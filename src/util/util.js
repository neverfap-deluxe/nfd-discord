const generateRandomNumber = (min, max) => {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin + 1)) + newMin;
}

const generateDelayValues = (mode) => {
  if (mode === "dev") {
    return {
      onIntervalTenMinutesDelay: 1000 * 2, // every 2 seconds
      onIntervalThreeHoursDelay: 1000 * 5, // every 5 seconds
      onIntervalFourHoursDelay: 1000 * 6, // every 6 seconds
      onIntervalDayHalfDelay: 1000 * 10, // every 10 seconds
      onIntervalDayDelay: 1000 * 60 * 10, // every 10 seconds
      onIntervalWeekDelay: 1000 * 60 * 10, // every 10 seconds
    }
  }
  return {
    onIntervalTenMinutesDelay: 1000 * 60 * 10 * 1, // every ten minutes
    onIntervalThreeHoursDelay: 1000 * 60 * 60 * 3, // every three hours
    onIntervalFourHoursDelay: 1000 * 60 * 60 * 4, // every four hours
    onIntervalDayHalfDelay: 1000 * 60 * 60 * 12, // every 10 seconds
    onIntervalDayDelay: 1000 * 60 * 60 * 24, // every 24 hours
    onIntervalWeekDelay: 1000 * 60 * 60 * 24 * 7, // every week
  }
}

const isAccountabilityMessage = (content) => content.includes("/") || content.includes("19") || content.includes("#track");

const configureLogger = (Winston) => {  
  const logger = Winston.createLogger({
    level: 'info',
    format: Winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      //
      // - Write to all logs with level `info` and below to `combined.log` 
      // - Write all logs error (and below) to `error.log`.
      //
      new Winston.transports.File({ filename: 'error.log', level: 'error' }),
      new Winston.transports.File({ filename: 'combined.log' })
    ]
  });
  
  if (process.env.MODE === 'dev') {
    logger.add(new Winston.transports.Console({
      format: Winston.format.simple(),
      colorize: true
    }));
    logger.level = 'debug';
  }
  return logger;
}

const configureTwitter = (Twit) => {
  return new Twit({
    consumer_key:         '...',
    consumer_secret:      '...',
    access_token:         '...',
    access_token_secret:  '...',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
  });

  // I believe this is 
  // T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
  //   console.log(data)
  // })
  
}

const configureReddit = (SnooWrap) => {
  return new SnooWrap({
    userAgent: 'put your user-agent string here',
    clientId: 'put your client id here',
    clientSecret: 'put your client secret here',
    refreshToken: 'put your refresh token here'
  });

  // r.getSubreddit('NeverFapDeluxe').submitLink({
  //   title: 'Mt. Cameramanjaro',
  //   url: 'https://i.imgur.com/n5iOc72.gifv'
  // });  
}

module.exports = {
  configureLogger,
  generateRandomNumber,
  generateDelayValues,
  isAccountabilityMessage,
  configureTwitter,
  configureReddit,
}
