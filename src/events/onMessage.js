const onMessage = (client, logger) => {
  return function (message) {
    const channel = message.channel;
    const discordUser = message.user;
    const member = message.member;
   
    const dbUser = getDbUserOtherwiseCreate(discordUser);
  
    if (channel.id === accountabilityChannelId) {
      whenMessageAccountabilityChannel(message, channel, discordUser, member, dbUser)
    }
  
    // client.sendMessage({
    //   to: channelID,
    //   message: 'Pong!'
    // });
  }
}

const whenMessageAccountabilityChannel = async (message, channel, discordUser, member, dbUser) => {
  const doesMessageContainAccountabilityHash = message.content.includes("#accountability");
  const isFirstMessageForToday = dbUser.accountabilityMessages.filter();

  if (doesMessageContainAccountabilityHash && isFirstMessageForToday) {
    await AccountabilityMessage.query().insert({ discordId: discordUser.id });

    const updatedDbUser =

    currentAccountabilityStreakConsequences(updatedDbUser);
    totalAccountabilityConsequences(updatedDbUser);
  }

  // message.reply('Hey, I\'m a reply!')
  //   .then(sent => console.log(`Sent a reply to ${sent.author.username}`))
  //   .catch(console.error);

}

const currentAccountabilityStreakConsequences = (dbUser) => {
  switch(dbUser.currentAccountabilityStreak) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 10:
    case 14:
    case 21:
    case 28:
    case 35:
    case 42:
    case 49:
  } 
}

const totalAccountabilityConsequences = () => {
  switch(dbUser.currentAccountabilityStreak) {
    case 1:
    case 10:
    case 20:
    case 30:
    case 40:
    case 50:
    case 60:
    case 70:
  }
}

module.exports = onMessage;