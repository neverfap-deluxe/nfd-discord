const generateRandomNumber = (min, max) => {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin + 1)) + newMin;
}

const generateDelayValues = (mode) => {
  if (mode === "dev") {
    return {
      onIntervalTenMinutesDelay: 1000 * 2, // every 2 seconds
      onIntervalOneHourDelay: 1000 * 3, // every 5 seconds
      onIntervalThreeHoursDelay: 1000 * 5, // every 5 seconds
      onIntervalFourHoursDelay: 1000 * 6, // every 6 seconds
      onIntervalDayHalfDelay: 1000 * 10, // every 10 seconds
      onIntervalDayDelay: 1000 * 10, // every 10 seconds
      onIntervalWeekDelay: 1000 * 10, // every 10 seconds
    }
  }
  return {
    onIntervalTenMinutesDelay: 1000 * 60 * 10 * 1, // every ten minutes
    onIntervalOneHourDelay: 1000 * 60 * 60 * 1, // every one hour
    onIntervalThreeHoursDelay: 1000 * 60 * 60 * 3, // every three hours
    onIntervalFourHoursDelay: 1000 * 60 * 60 * 4, // every four hours
    onIntervalDayHalfDelay: 1000 * 60 * 60 * 12, // every 10 seconds
    onIntervalDayDelay: 1000 * 60 * 60 * 24, // every 24 hours
    onIntervalWeekDelay: 1000 * 60 * 60 * 24 * 7, // every week
  }
}

const isAccountabilityMessage = (content) => content.includes("/") || content.includes("19") || content.includes("#accountability");

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
      new Winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
      new Winston.transports.File({ filename: 'logs/combined.log' })
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
  // return new Twit({
  //   consumer_key:         '...',
  //   consumer_secret:      '...',
  //   access_token:         '...',
  //   access_token_secret:  '...',
  //   timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  //   strictSSL:            true,     // optional - requires SSL certificates to be valid.
  // });
  return {};

  // I believe this is 
  // T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
  //   console.log(data)
  // })
}

const configureReddit = (SnooWrap) => {
  // return new SnooWrap({
  //   userAgent: 'put your user-agent string here',
  //   clientId: 'put your client id here',
  //   clientSecret: 'put your client secret here',
  //   refreshToken: 'put your refresh token here'
  // });

  return {};

  // r.getSubreddit('NeverFapDeluxe').submitLink({
  //   title: 'Mt. Cameramanjaro',
  //   url: 'https://i.imgur.com/n5iOc72.gifv'
  // });  
}

const getChannel = (client, channelType) => {
  switch(channelType) {
    case "welcome": return client.channels.get(process.env.WELCOME_CHANNEL_ID);
    case "recovery": return client.channels.get(process.env.RECOVERY_CHANNEL_ID);
    case "random": return client.channels.get(process.env.RANDOM_CHANNEL_ID);
    case "accountability": return client.channels.get(process.env.ACCOUNTABILITY_CHANNEL_ID);
    case "daily_milestones": return client.channels.get(process.env.DAILY_MILESTONES_CHANNEL_ID);
    case "announcement": return client.channels.get(process.env.ANNOUNCEMENT_CHANNEL_ID);
    case "ask_julius": return client.channels.get(process.env.ASK_JULIUS_CHANNEL_ID);
    case "relapse": return client.channels.get(process.env.RELAPSE_CHANNEL_ID);
    case "emergency": return client.channels.get(process.env.EMERGENCY_CHANNEL_ID);
    case "suggestions": return client.channels.get(process.env.SUGGESTIONS_CHANNEL_ID);
    default: throw new Error('Incorrect channel type provided');
  }
}


// still need to set policy

// {
//   "Version": "2012-10-17",
//   "Statement": [
//       {
//           "Effect": "Allow",
//           "Principal": {
//               "AWS": "arn:aws:iam::711757277897:root"
//           },
//           "Action": "ses:*",
//           "Resource": "arn:aws:ses:us-east-1:711757277897:identity/discord-bot.neverfapdeluxe.com"
//       },
//       {
//           "Effect": "Allow",
//           "Action": "ses:SendRawEmail",
//           "Resource": "*"
//       }
//   ]
// }

const configureEmail = async (aws, nodemailer) => {
  if (process.env.MODE === "dev") {
    // const testAccount = await nodemailer.createTestAccount();
    
    // Clay Schimmel
    // clay29@ethereal.email
    // CbWWt2DJcVWyNdj47b

    // create reusable transporter object using the default SMTP transport
    return nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        // user: testAccount.user, // generated ethereal user
        // pass: testAccount.pass // generated ethereal password
        user: "clay29@ethereal.email",
        pass: "CbWWt2DJcVWyNdj47b",
      }
    });
    // console.log("Message sent: %s", info.messageId);
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } else {
    // configure AWS SDK
    aws.config.loadFromPath('config.json');

    // create Nodemailer SES transporter
    return nodemailer.createTransport({
        SES: new aws.SES({
            apiVersion: '2010-12-01'
        })
    });
  }
}

const createEmailObject = (email, subject, text) => ({
  from: '"Julius Reade" <admin@neverfapdeluxe.com>', // sender address
  to: email, // list of receivers
  subject, // Subject line
  text, // plain text body
  // html: "<b>Hello world?</b>" // html body
});
  
// // send mail with defined transport object
// let info = await transporter.sendMail({
//   from: '"Fred Foo 👻" <foo@example.com>', // sender address
//   to: "bar@example.com, baz@example.com", // list of receivers
//   subject: "Hello ✔", // Subject line
//   text: "Hello world?", // plain text body
//   html: "<b>Hello world?</b>" // html body
// });

// // send some mail
// await transporter.sendMail({
//     from: 'sender@example.com',
//     to: 'recipient@example.com',
//     subject: 'Message',
//     text: 'I hope this message gets sent!',
//     ses: { // optional extra arguments for SendRawEmail
//         Tags: [{
//             Name: 'tag name',
//             Value: 'tag value'
//         }]
//     }
// }, (err, info) => {
//     console.log(info.envelope);
//     console.log(info.messageId);
// });

module.exports = {
  generateRandomNumber,
  generateDelayValues,
  isAccountabilityMessage,
  configureLogger,
  configureTwitter,
  configureReddit,
  configureEmail,
  createEmailObject,
  getChannel,
}
