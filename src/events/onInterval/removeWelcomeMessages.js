const welcomeMessageUser = () => `Thank you for joining the NeverFap Deluxe Discord Channel!\n
Before participating it is mandatory that you read the NeverFap Deluxe website! The homepage and guide should explain 90% of what this server is about! https://neverfapdeluxe.com/\n
Next up is our #accountability program which is most likely why you're here! Please enter \`!accountability\` into this direct chat to understand the rules of how it all works! :heart:\n
Lastly, feel free to send \`Julius Reade\` a private message to as he is the creator of this program, and is MORE THAN HAPPY to help you with your journey! :peach: :grapes: :cherries:\n
In order to join this server, please type in \`!accept\` and press enter/send message!\n
...aaaaaand that's about it! Have fun and enjoy your stay ^^.\n
`;

const removeWelcomeMessages = async (channels, logger) => {
  try {
    const welcomeChannel = channels.get(process.env.WELCOME_CHANNEL_ID);
    if (welcomeChannel) {
      const channelMessages = await welcomeChannel.fetchMessages({ limit: 30 });

      if (channelMessages) {
        for (const message of channelMessages) {
          await message[1].delete();
        }
        await welcomeChannel.send(welcomeMessageUser());
      }
    }
  } catch(error) {
    logger.error(`removeWelcomeMessages - ${error}`);
    throw new Error(`removeWelcomeMessages - ${error}`);
  }
};

module.exports = removeWelcomeMessages;