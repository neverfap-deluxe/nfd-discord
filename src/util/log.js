const sendChannelMessageLog = (msgId, functionName) => {
  console.log(`Sent channel message: ${msgId} - ${functionName} - welcome channel message`);
  // may send me an email confirming that this happened.
}

module.exports = {
  sendChannelMessageLog,
}