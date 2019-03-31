const onGuildMemberAdd = (client) => {
  return function(member) {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find(ch => ch.id === 'member-log');
  
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Welcome to the server, ${member}`);
  }
}

module.exports = onGuildMemberAdd;

