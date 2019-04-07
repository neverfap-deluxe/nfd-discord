const {
  automatedMessageGeneral,
  automatedMessageAccountability,
} = require('../const/MESSAGE');

const {
  generateRandomNumber,
  sendMessageHelper,
  isLastMessageTheBot,
  deleteMessageHelper,
} = require('../util/util');

const onIntervalFiveMinutes = (client) => {
  return function (evt) {
    if (process.env.CLEAN_UP_NEVER_FAP_DELUXE_POSTS === "true") {
      cleanUpNeverFapDeluxeBotPosts(client.channels);
    }
  }
};
const onIntervalSixHours = (client) => {
  return function (evt) {
    if (process.env.GENERAL_CHANNEL_AUTOMATED_MESSAGES === "true") {
      generalChannelAutomatedMessages(client.channels);
    }
    if (process.env.NOT_POSTED_IN_30_HOURS === "true") {
      checkUserWhoHasNotPostedBetween24To48Hours(client);
    }
  }
};
const onIntervalTenHours = (client) => {
  return function (evt) {
    if (process.env.ACCOUNTABILITY_CHANNEL_AUTOMATED_MESSAGES === "true") {
      accountabilityChannelAutomatedMessages(client.channels);
    }
  }
};
const onIntervalDay = (client) => {
  return function (evt) {
    if (process.env.KICK_USERS_WHO_HAVE_NOT_COMMITTED === "true") {
      kickUsersWhoHaveNotCommitted(client);
    }
  }
};
const onIntervalWeek = (client) => {
  return function (evt) {
  }
};


const FIVE_MINUTES = process.env.MODE === "dev" ? (
  1000 * 1 * 10 // 10 seconds.
) : (
  1000 * 60 * 5 // Five minutes.
);

const cleanUpNeverFapDeluxeBotPosts = async (channels) => {
  for (const channelCollection of channels) {
    const channel = channelCollection[1];
    
    if (channel.type === "text") {
      const channelMessages = await channel.fetchMessages({ limit: 15 });

      if (channelMessages) {
        for (const message of channelMessages) {
          deleteMessageIfCommand(message);
          deleteMessageIfNeverFapDeluxeBot(message);
        }
      }
    }
  }
};

const deleteMessageIfCommand = (message) => {
  if (message && message[1] && message[1].content) {
    const isCommand = message[1].content.startsWith("!");
    if (isCommand) {
      if (
        (new(Date) - new Date(message[1].createdAt)) > FIVE_MINUTES
      ) {
        deleteMessageHelper(message[1]); 
      }   
    }
  }
};

const deleteMessageIfNeverFapDeluxeBot = (message) => {
  const messageEmbed = message && message[1] && message[1].embeds && message[1].embeds[0];
  if (
    messageEmbed && 
    messageEmbed.message && 
    messageEmbed.message.author && 
    messageEmbed.message.author.id === process.env.NEVERFAP_DELUXE_BOT_ID
  ) {
    if (
      messageEmbed.title !== "#general advice" &&
      messageEmbed.title !== "#accountability advice"
    ) {
      if (
        (new(Date) - new Date(messageEmbed.message.createdAt)) > FIVE_MINUTES
      ) {
        deleteMessageHelper(message[1]);    
      }    
    }
  }
};

const generalChannelAutomatedMessages = async (channels) => {
  const generalChannel = channels.get(process.env.GENERAL_CHANNEL_ID);

  if (generalChannel) {
    const lastMessageIsBot = await isLastMessageTheBot(generalChannel);
    if (lastMessageIsBot) return;
  }
  
  switch(generateRandomNumber(0, 9)) {
    case 0:  await sendMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral1); break;
    case 1:  await sendMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral2); break;
    case 2:  await sendMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral3); break;
    case 3:  await sendMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral4); break;
    case 4:  await sendMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral5); break;
    case 5:  await sendMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral6); break;
    case 6:  await sendMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral7); break;
    case 7:  await sendMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral8); break;
    case 8:  await sendMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral9); break;
    case 9:  await sendMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral10); break;
    // case 10: sendMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral11); break;
    // case 11: sendMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral12); break;
    // case 12: sendMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral13); break;
    // case 13: sendMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral14); break;
    // case 14: sendMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral15); break;
    // case 15: sendMessageHelper(generalChannel, automatedMessageGeneral.automatedMessageGeneral16); break;
    default:
      throw new Error('generalChannelAutomatedMessages - generateRandomNumber - created an incorrect generator number');
  }
}

const accountabilityChannelAutomatedMessages = async (channels) => {
  const accountabilityChannel = channels.get(process.env.ACCOUNTABILITY_CHANNEL_ID);

  if (accountabilityChannel) {
    const lastMessageIsBot = await isLastMessageTheBot(accountabilityChannel);
    if (lastMessageIsBot) return;  
  }
  switch(generateRandomNumber(0, 1)) {
    case 0: await sendMessageHelper(accountabilityChannel, automatedMessageAccountability.automatedMessageAccountability1(accountabilityChannel)); break;
    case 1: await sendMessageHelper(accountabilityChannel, automatedMessageAccountability.automatedMessageAccountability2()); break;
  
    default:
      throw new Error('generalChannelAutomatedMessages - generateRandomNumber - created an incorrect generator number');
  }
}

const checkUserWhoHasNotPostedBetween24To48Hours = (client) => {
  // get list of users within the database. 
  // Get date of last accountabilityMessage.

}

const kickUsersWhoHaveNotCommitted = (client) => {
  // check how many accountability posts a user has made. 
  // Will probably need database for this.
};

module.exports = {
  onIntervalFiveMinutes,
  onIntervalSixHours,
  onIntervalTenHours,
  onIntervalDay,
  onIntervalWeek,
};
