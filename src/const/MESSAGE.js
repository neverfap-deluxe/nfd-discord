const { RichEmbed } = require('discord.js');

const { 
  // INFO_COMMAND,
  COMMANDS_COMMAND,
  CHANNELS_COMMAND,
  ACCOUNTABILITY_COMMAND,
  CHEATSHEET_COMMAND,
  EMERGENCY_COMMAND,
  // SET_STREAK_COMMAND,
  // PROGRESS_COMMAND,

  // INFO_COMMAND_DESCRIPTION,
  COMMANDS_COMMAND_DESCRIPTION,
  CHANNELS_COMMAND_DESCRIPTION,
  ACCOUNTABILITY_COMMAND_DESCRIPTION,
  CHEATSHEET_COMMAND_DESCRIPTION,
  EMERGENCY_COMMAND_DESCRIPTION,
  // SET_STREAK_COMMAND_DESCRIPTION,
  // PROGRESS_COMMAND_DESCRIPTION,
} = require('./COMMAND');

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
} = require('./CHANNEL');

const commandListMessage = new RichEmbed()
  .setTitle("NeverFap Deluxe Discord Channel List")
  .setColor(0xFF0000)
  .setDescription("These are the NeverFap Deluxe Channels.")
  .addField("Channels", channelListText)

const channelListMessage = new RichEmbed()
  .setTitle("NeverFap Deluxe Discord Channel List")
  .setColor(0xFF0000)
  .setDescription("These are the NeverFap Deluxe Channels.")
  .addField("Channels", channelListText)

const accountabilityMessage = new RichEmbed()
  .setTitle('#accountability rules')
  .setColor(0xFF0000)
  .setDescription("These the are the guidelines for posting in #accountability.")
  .addField("Step 1", "Today's date. i.e. 20/01/2018")
  .addField("Step 2", "List which Healthy Coping Mechanisms you practiced for that day.")
  .addField("Step 3", "What you will do differently in order to improve upon that process.")

const emergencyMessage = () => {

};
  
const welcomeMessage = new RichEmbed()
  .setTitle('Welcome to the channel!')
  .setColor(0xFF0000)
  .setDescription("Welcome to the NeverFap Deluxe Discord channel! I'm the NeverFap Deluxe Bot.!")
  .addField("Command List", commandListText)
  .addField("Channel List", channelListText)
 
const commandListText = `
  !${COMMANDS_COMMAND} - ${COMMANDS_COMMAND_DESCRIPTION}
  !${CHANNELS_COMMAND} - ${CHANNELS_COMMAND_DESCRIPTION}
  !${ACCOUNTABILITY_COMMAND} - ${ACCOUNTABILITY_COMMAND_DESCRIPTION}
  !${CHEATSHEET_COMMAND} - ${CHEATSHEET_COMMAND_DESCRIPTION}
  !${EMERGENCY_COMMAND} - ${EMERGENCY_COMMAND_DESCRIPTION}
`;
// !${INFO_COMMAND} - ${INFO_COMMAND_DESCRIPTION}
// !${SET_STREAK_COMMAND} - ${SET_STREAK_COMMAND_DESCRIPTION}
// !${PROGRESS_COMMAND} - ${PROGRESS_COMMAND_DESCRIPTION}

const channelListText = `
  #${WELCOME_CHANNEL_NAME} - ${WELCOME_CHANNEL_DESCRIPTION}
  #${GENERAL_CHANNEL_NAME} - ${GENERAL_CHANNEL_DESCRIPTION}
  #${ACCOUNTABILITY_CHANNEL_NAME} - ${ACCOUNTABILITY_CHANNEL_DESCRIPTION}
  #${LOLFAP_CHANNEL_NAME} - ${LOLFAP_CHANNEL_DESCRIPTION}
  #${ANNOUNCEMENT_CHANNEL_NAME} - ${ANNOUNCEMENT_CHANNEL_DESCRIPTION}
  #${EMERGENCY_CHANNEL_NAME} - ${EMERGENCY_CHANNEL_DESCRIPTION}
`;

const automatedMessageGeneral1  = "Just a friendly reminder from the NeverFap Deluxe Bot to stay positive! Otherwise, I may have to kill you ^^.";
const automatedMessageGeneral2  = "You have a wonderful smile... the kind of smile that refuses to PMO, because you're just fantastic!";
const automatedMessageGeneral3  = "I slept with your mother, because old habits die hard. Please don't make the same mistake with your porn addiction.";
const automatedMessageGeneral4  = "Please stop touching your tight gank. It's rude, especially when there's young children sitting so close to you.";
const automatedMessageGeneral5  = "Remember: Empathy, love, kindness and gratitude are your friends. Treat yourself as you would others.";
const automatedMessageGeneral6  = "Remember: Your commitment to the process is the only thing that matters. Everything else is just noise.";
const automatedMessageGeneral7  = "This is a friendly reminder to trust the process. The process is always right, as much as you'd like to prove it wrong.";
const automatedMessageGeneral8  = "If you have to ask ...it's most likely a bad idea, and edging under any circumstances is definitely not OK.";
const automatedMessageGeneral9  = "Relapse is nothing more than an extension of your lack of commitment. If you commit, you will succeed.";
const automatedMessageGeneral10 = "Remember: Your first response to experiencing an urge is to relax. You are not effective if you are not relaxed.";
const automatedMessageGeneral11 = "You have great breas... I mean, you have great potential. You see, your addiction really is messing with your mind.";
const automatedMessageGeneral12 = "The idea behind meditation is to help you develop control over your emotions. You are not effective unless if you can control your emotions.";
const automatedMessageGeneral13 = "Needing some advice? Please check out the NeverFap Deluxe website! https://neverfapdeluxe.com/";
const automatedMessageGeneral14 = "Needing some more mental health practices? Thankfully, there's a whole section of them at https://neverfapdeluxe.com/practices";
const automatedMessageGeneral15 = "New to the whole porn recovery thing? Check out the NeverFap Deluxe 7 Day Kickstarter! https://neverfapdeluxe.com/seven-day-neverfap-deluxe-kickstarter";
const automatedMessageGeneral16 = "I actually wrote a freakin' guide on how to overcome porn addiction. Check it out https://neverfapdeluxe.com/guide";

module.exports = {
  welcomeMessage,
  commandListMessage,
  channelListMessage,
  emergencyMessage,
  accountabilityMessage,
  automatedMessageGeneral: {
    automatedMessageGeneral1,
    automatedMessageGeneral2,
    automatedMessageGeneral3,
    automatedMessageGeneral4,
    automatedMessageGeneral5,
    automatedMessageGeneral6,
    automatedMessageGeneral7,
    automatedMessageGeneral8,
    automatedMessageGeneral9,
    automatedMessageGeneral10,
    automatedMessageGeneral11,
    automatedMessageGeneral12,
    automatedMessageGeneral13,
    automatedMessageGeneral14,
    automatedMessageGeneral15,
    automatedMessageGeneral16,
  },
}

