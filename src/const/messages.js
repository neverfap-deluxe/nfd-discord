const { 
  INFO_COMMAND,
  HELP_COMMAND,
  CHANNELS_COMMAND,
  ACCOUNTABILITY_COMMAND,
  CHEATSHEET_COMMAND,
  EMERGENCY_COMMAND,
  // PROGRESS_COMMAND,

  INFO_COMMAND_DESCRIPTION,
  HELP_COMMAND_DESCRIPTION,
  CHANNELS_COMMAND_DESCRIPTION,
  ACCOUNTABILITY_COMMAND_DESCRIPTION,
  CHEATSHEET_COMMAND_DESCRIPTION,
  EMERGENCY_COMMAND_DESCRIPTION,
  // PROGRESS_COMMAND_DESCRIPTION,
} = require('./commands');

const {
  WELCOME_CHANNEL_NAME,
  GENERAL_CHANNEL_NAME,
  ACCOUNTABILITY_CHANNEL_NAME,
  LOLFAP_CHANNEL_NAME,
  ANNOUNCEMENT_CHANNEL_NAME,
  EMERGENCY_CHANNEL_NAME,

  WELCOME_CHANNEL_DESCRIPTION,
  GENERAL_CHANNEL_DESCRIPTION,
  ACCOUNTABILITY_CHANNEL_DESCRIPTION,
  LOLFAP_CHANNEL_DESCRIPTION,
  ANNOUNCEMENT_CHANNEL_DESCRIPTION,
  EMERGENCY_CHANNEL_DESCRIPTION,
} = require('./channels');


const infoMessage = `

`;

const welcomeMessage = `
  Welcome to the NeverFap Deluxe Discord channel! I'm the NeverFap Deluxe Bot.

  Basically, I've been designed to be a really crappy replacement for the wonderful Julius Reade. Oh man, I really love that guy. Seriously, what an absolute champ. Okay, obviously it's me writing this message, but you should totally love me.

  Please check out the command list. It will prove invaluable if you are experiencing any urges.

  ${channelListMessage}
  ${commandListMessage}
`;

const commandListMessage = `
  Command List
  !${INFO_COMMAND} - ${INFO_COMMAND_DESCRIPTION}
  !${HELP_COMMAND} - ${HELP_COMMAND_DESCRIPTION}
  !${CHANNELS_COMMAND} - ${CHANNELS_COMMAND_DESCRIPTION}
  !${ACCOUNTABILITY_COMMAND} - ${ACCOUNTABILITY_COMMAND_DESCRIPTION}
  !${CHEATSHEET_COMMAND} - ${CHEATSHEET_COMMAND_DESCRIPTION}
  !${EMERGENCY_COMMAND} - ${EMERGENCY_COMMAND_DESCRIPTION}
`;
// !${PROGRESS_COMMAND} - ${PROGRESS_COMMAND_DESCRIPTION}


const channelListMessage = `
  Channel List
  #${WELCOME_CHANNEL_NAME} - ${WELCOME_CHANNEL_DESCRIPTION}
  #${GENERAL_CHANNEL_NAME} - ${GENERAL_CHANNEL_DESCRIPTION}
  #${ACCOUNTABILITY_CHANNEL_NAME} - ${ACCOUNTABILITY_CHANNEL_DESCRIPTION}
  #${LOLFAP_CHANNEL_NAME} - ${LOLFAP_CHANNEL_DESCRIPTION}
  #${ANNOUNCEMENT_CHANNEL_NAME} - ${ANNOUNCEMENT_CHANNEL_DESCRIPTION}
  #${EMERGENCY_CHANNEL_NAME} - ${EMERGENCY_CHANNEL_DESCRIPTION}
`;

const emergencyMessage = `
// /emergency
// The first step is to always relax.
//

`;

module.exports = {
  infoMessage,
  welcomeMessage,
  commandListMessage,
  channelListMessage,
  emergencyMessage,
}

