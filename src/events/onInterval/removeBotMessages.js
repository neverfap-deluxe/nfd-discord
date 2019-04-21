const _ = require('lodash');

const DELETE_COMMAND_DELAY = process.env.MODE === "dev" ? (
  1000 * 1 * 4 // 4 seconds.
) : (
  1000 * 60 * 10 // Ten minutes.
);

const removeBotMessages = async (channels, logger) => {
  // NOTE: This code is if we want to remove the bot messages from EVERY channel.
  // for (const channelCollection of channels) {
  //   const channel = channelCollection[1];
    
    // if (channel.type === "text") {
      const accountabilityChannel = channels.get(process.env.ACCOUNTABILITY_CHANNEL_ID);
      if (accountabilityChannel) {
        const channelMessages = await accountabilityChannel.fetchMessages({ limit: 25 });

        if (channelMessages) {
          for (const message of channelMessages) {
            deleteMessageIfCommand(message, logger);
            deleteMessageIfNeverFapDeluxeBot(message, logger);
          }
        }
      }

    // }
  // }
};

const deleteMessageIfCommand = async (message, logger) => {
  try {
    const messageContent = _.get(message, '[1].content');
    if (messageContent) {
      const isCommand = messageContent.startsWith("!");
      if (isCommand) {
        if ((new(Date) - new Date(message[1].created_at)) > DELETE_COMMAND_DELAY) {
          const msg = await message[1].delete();
          logger.info(`Deleted message from ${msg.author.username} - deleteMessageIfCommand`)
        }   
      }
    }
  } catch(error) {
    logger.error(`deleteMessageIfCommand - ${error}`);
    throw new Error(`deleteMessageIfCommand - ${error}`);
  }
};

const deleteMessageIfNeverFapDeluxeBot = async (message, logger) => {
  try {
    const messageEmbed = _.get(message, '[1].embeds[0]');
    if (messageEmbed) {
      const messageAuthorId = _.get(message, '[1].author.id');
      if (messageAuthorId === process.env.NEVERFAP_DELUXE_BOT_ID) {
        if (messageEmbed.title !== "#general advice" && messageEmbed.title !== "#accountability advice") {
          if ((new(Date) - new Date(messageEmbed.message.created_at)) > DELETE_COMMAND_DELAY) {
            const msg = await message[1].delete();
            logger.info(`Deleted message from ${msg.author.username} - deleteMessageIfNeverFapDeluxeBot`)
          }
        }
      }
    }
  } catch(error) {
    logger.error(`deleteMessageIfCommand - ${error}`);
    throw new Error(`deleteMessageIfNeverFapDeluxeBot - ${error}`);
  }
};

module.exports = removeBotMessages;