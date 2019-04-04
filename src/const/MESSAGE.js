const { RichEmbed } = require('discord.js');

const { 
  RULES_COMMAND,
  METHOD_COMMAND,
  COMMANDS_COMMAND,
  CHANNELS_COMMAND,
  ACCOUNTABILITY_COMMAND,
  CHEATSHEET_COMMAND,
  EMERGENCY_COMMAND,
  // SET_STREAK_COMMAND,
  // PROGRESS_COMMAND,

  RULES_COMMAND_DESCRIPTION,
  METHOD_COMMAND_DESCRIPTION,
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

const adminCommandListText = `
  !${RULES_COMMAND} - ${RULES_COMMAND_DESCRIPTION}
  !${COMMANDS_COMMAND} - ${COMMANDS_COMMAND_DESCRIPTION}
  !${CHANNELS_COMMAND} - ${CHANNELS_COMMAND_DESCRIPTION}
`;

const informationCommandListText = `
  !${METHOD_COMMAND} - ${METHOD_COMMAND_DESCRIPTION}
  !${ACCOUNTABILITY_COMMAND} - ${ACCOUNTABILITY_COMMAND_DESCRIPTION}
  !${CHEATSHEET_COMMAND} - ${CHEATSHEET_COMMAND_DESCRIPTION}
`;

const emergencyCommandListText = `
  !${EMERGENCY_COMMAND} - ${EMERGENCY_COMMAND_DESCRIPTION}
`;

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


const methodMessage = new RichEmbed()
  .setTitle('The NeverFap Deluxe Method.')
  .setColor(0xFF0000)
  .setDescription("Here is how the process works.")
  .addField(
    "80% of your time you should be spent learning/practicing how to remain calm.",
    "Calmness should be your default state of mind. It's what makes you powerful and effect, and act with intention as opposed to reaction. hen you are calm, you are in-control of your emotions"
  )
  .addField(
    "20% of your time should be spent practicing your list of Healthy Coping Mechanisms.",
    "Healthy Coping Mechanisms are designed to build your capacity for awareness, which is what allows you to remain calm."
  )
  .addField(
    "Your Healthy Coping Mechanism list must include daily Meditation at a bare minimum.",
    "Meditation is the most powerful Healthy Coping Mechanism in regards to regaining control over your emotions."
  )

const rulesMessage = new RichEmbed()
  .setTitle('Server Rules')
  .setColor(0xFF0000)
  .setDescription("Welcome to the NeverFap Deluxe Discord channel!")
  .addField(
    "Please only direct message Julius Reade in regards to your #accountability post.",
    "For better or worse, my time is best spent developing strategy and driving the community, rather than helping individuals on a micro level. If you have a question in regards to your #accountability posts and how you can improve with better strategy, I am more than happy to help. Otherwise, everything else is best addressed in #general.")  
  .addField(
    "We have mods who are happy to help you get acquainted with the server.",
    "Mods are those with the orange colours. Although, we're all pretty friendly!")
  .addField(
    "This server can't help you with your depression or other severe mental health issues.",
    "The focus of this server is around porn addiction recovery. We are not qualified psychologists, and furthermore I value the mental health of the members on this server enough, that I don't believe they shouldn be tasked with, nor are equiped with the capacity to professionally help you. Please seek professional help.")
  .addField(
    "Meditation is a bare minimum requirement.",
    "All members must commit to at least 10 minutes of meditation each day.")
  .addField(
    "Please learn the rules of #accountability.",
    "We have very clear rules of how #accountability should work. Type in !accountability to learn these rules or you can check out our post ."
  )

const commandListMessage = new RichEmbed()
  .setTitle("NeverFap Deluxe Discord Command List")
  .setColor(0xFF0000)
  .setDescription("These are the NeverFap Deluxe Commands.")
  .addField("Admin Commands", adminCommandListText)
  .addField("Information Commands", informationCommandListText)
  .addField("Emergency Commands", emergencyCommandListText)

const channelListMessage = new RichEmbed()
  .setTitle("NeverFap Deluxe Discord Channel List")
  .setColor(0xFF0000)
  .setDescription("These are the NeverFap Deluxe Channels.")
  .addField(`#${WELCOME_CHANNEL_NAME}`, `${WELCOME_CHANNEL_DESCRIPTION}`)
  .addField(`#${GENERAL_CHANNEL_NAME}`, `${GENERAL_CHANNEL_DESCRIPTION}`)
  .setDescription("These are the NeverFap Deluxe Channels.")
  .addField(`#${ACCOUNTABILITY_CHANNEL_NAME}`, `${ACCOUNTABILITY_CHANNEL_DESCRIPTION}`)
  .addField(`#${LOLFAP_CHANNEL_NAME}`, `${LOLFAP_CHANNEL_DESCRIPTION}`)
  .addField(`#${ANNOUNCEMENT_CHANNEL_NAME}`, `${ANNOUNCEMENT_CHANNEL_DESCRIPTION}`)
  .addField(`#${EMERGENCY_CHANNEL_NAME}`, `${EMERGENCY_CHANNEL_DESCRIPTION}`)

const accountabilityMessage = new RichEmbed()
  .setTitle('#accountability rules')
  .setColor(0xFF0000)
  .setDescription("These the are the guidelines for posting in #accountability.")
  .addField("Today's date.", "i.e. 20/01/2018")
  .addField("List of Healthy Coping Mechanisms you practiced for that day.", ".i.e. ")
  .addField("How you will improve upon those Healthy Coping Mechanisms tomorrow.", ".i.e. ")
  .addField("Not recommended", "PMO streak.")

const emergencyMessage = new RichEmbed()
  .setTitle("Official Emergency Process")
  .setDescription("What you will read is a verifiable process. In other words, it is verified to work if you follow it step by step.")
  .addField("Step 1 - The first step is to relax", "No one is effective without a calm mind, whether experiencing urges or not.")
  .addField("Step 2", "The next step is to become comfortable with your emotions. Understand not to take them personally. They mean no harm.")
  .addField("Step 3", "What are your list of healthy coping mechanisms? Have you practiced them yet? Now is the perfect time to work on that list.")
  .setColor(0xFF0000)

const welcomeMessage = new RichEmbed()
  .setTitle('Welcome to the channel!')
  .setColor(0xFF0000)
  .setDescription("Welcome to the NeverFap Deluxe Discord channel! I'm the NeverFap Deluxe Bot.!")
  .setDescription("These are the NeverFap Deluxe Commands.")
  .addField("Admin", adminCommandListText)
  .addField("Information", informationCommandListText)
  .addField("Emergency", emergencyCommandListText)
  .setDescription("These are the NeverFap Deluxe Channels.")
  .addField(`#${WELCOME_CHANNEL_NAME}`, `${WELCOME_CHANNEL_DESCRIPTION}`)
  .addField(`#${GENERAL_CHANNEL_NAME}`, `${GENERAL_CHANNEL_DESCRIPTION}`)
  .setDescription("These are the NeverFap Deluxe Channels.")
  .addField(`#${ACCOUNTABILITY_CHANNEL_NAME}`, `${ACCOUNTABILITY_CHANNEL_DESCRIPTION}`)
  .addField(`#${LOLFAP_CHANNEL_NAME}`, `${LOLFAP_CHANNEL_DESCRIPTION}`)
  .addField(`#${ANNOUNCEMENT_CHANNEL_NAME}`, `${ANNOUNCEMENT_CHANNEL_DESCRIPTION}`)
  .addField(`#${EMERGENCY_CHANNEL_NAME}`, `${EMERGENCY_CHANNEL_DESCRIPTION}`)

const cheatsheetMessage = new RichEmbed()
  .setTitle('Healthy Coping Mechanism Cheatsheet')
  .setColor(0xFF0000)
  .setDescription("Here are a list of healthy coping mechanisms if you're struggling to come up with things to do.")
  .addField("Meditation", "The bare minimum you should be doing for your mental health everyday. It is a hard expectation. Aim for 10 minutes each day at a minimum. Consistency is key.")
  .addField("Exercising", "Improve your physical health through targeted exercise. Aim to exercise at least three times each week.")
  .addField("Cold Showers", "Train your mind to relax while facing unbearable conditions. An excellent way to learn calmness")
  .addField("Intermittent Fasting", "Train your body to embrace .")
  .addField("Healthy Eating", "Attempt to eat Paleo, or embrace diets which promote ketosis.")
  .addField("Studying", "This is what you should be doing committing to when you have free time and your mind is mentally stable.")
  .addField("Reading", "Increase your intelligence and learn more about the world through literature.")
  .addField("Working", "Working is an important function which helps tremendously.")
  .addField("Socialising", "Spending time with the people you love and cherishing them.")
  .addField("Relaxation", "Includes video gaming, watching TV, napping etc. Should only be relied on if you're needing to wind down, otherwise you should be studying and learning.")
  .addField("Helping others", "Helping others with their goals can be a great way to .")
  .addField("Awareness Exercises", "Expand your mental capacity for conscious action.")
  .addField("Practicing Gratitude", "An excellent way to gain an appreciation of your own life.")
  .addField("Express Yourself", "Whether through writing, speech or art, learning to express yourself is a great way to learn more about yourself.")
  
const automatedMessageGeneral1  = new RichEmbed().setTitle("#general advice").setDescription("Just a friendly reminder from the NeverFap Deluxe Bot to stay positive! Otherwise, I may have to kill you ^^.");
const automatedMessageGeneral2  = new RichEmbed().setTitle("#general advice").setDescription("Empathy, love, kindness and gratitude are your friends. Treat yourself as you would others.");
const automatedMessageGeneral3  = new RichEmbed().setTitle("#general advice").setDescription("our commitment to the process is the only thing that matters. Everything else is just noise.");
const automatedMessageGeneral4  = new RichEmbed().setTitle("#general advice").setDescription("This is a friendly reminder to trust the process. The process is your best friend.");
const automatedMessageGeneral5  = new RichEmbed().setTitle("#general advice").setDescription("Relapse is nothing more than an extension of your lack of commitment.");
const automatedMessageGeneral6  = new RichEmbed().setTitle("#general advice").setDescription("Meditation allows you to develop control over your emotions. You are not effective unless if you have control over your emotions.");
const automatedMessageGeneral7  = new RichEmbed().setTitle("#general advice").setDescription("Need some advice? Please check out the NeverFap Deluxe website! https://neverfapdeluxe.com/");
const automatedMessageGeneral8  = new RichEmbed().setTitle("#general advice").setDescription("Need some more mental health practices? Thankfully, there's a whole section of them at https://neverfapdeluxe.com/practices");
const automatedMessageGeneral9  = new RichEmbed().setTitle("#general advice").setDescription("New to the whole porn recovery thing? Check out the NeverFap Deluxe 7 Day Kickstarter! https://neverfapdeluxe.com/seven-day-neverfap-deluxe-kickstarter");
const automatedMessageGeneral10 = new RichEmbed().setTitle("#general advice").setDescription("I actually wrote a freakin' guide on how to overcome porn addiction. Check it out https://neverfapdeluxe.com/guide");
// const automatedMessageGeneral11 = 
// const automatedMessageGeneral12 = 
// const automatedMessageGeneral13 = 
// const automatedMessageGeneral14 = 
// const automatedMessageGeneral15 = 
// const automatedMessageGeneral16 = 

const automatedMessageAccountability1 = new RichEmbed().setTitle("#accountability advice").setDescription("Don't forget to add emoji reacts to other people's #accountability posts!");
const automatedMessageAccountability2 = new RichEmbed().setTitle("#accountability advice").setDescription("Need some help? Send the message '!cheatsheet' into the channel for a list of Healthy Coping Mechanisms.");
// const automatedMessageAccountability3  = "";
// const automatedMessageAccountability4  = "";
// const automatedMessageAccountability5  = "";
// const automatedMessageAccountability6  = "";
// const automatedMessageAccountability7  = "";
// const automatedMessageAccountability8  = "";
// const automatedMessageAccountability9  = "";
// const automatedMessageAccountability10 = "";

module.exports = {
  rulesMessage,
  methodMessage,
  welcomeMessage,
  commandListMessage,
  channelListMessage,
  emergencyMessage,
  accountabilityMessage,
  cheatsheetMessage,
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
    // automatedMessageGeneral11,
    // automatedMessageGeneral12,
    // automatedMessageGeneral13,
    // automatedMessageGeneral14,
    // automatedMessageGeneral15,
    // automatedMessageGeneral16,
  },
  automatedMessageAccountability: {
    automatedMessageAccountability1,
    automatedMessageAccountability2,  
    // automatedMessageAccountability3,
    // automatedMessageAccountability4,
    // automatedMessageAccountability5,
    // automatedMessageAccountability6,
    // automatedMessageAccountability7,
    // automatedMessageAccountability8,
    // automatedMessageAccountability9,
    // automatedMessageAccountability10,  
  }
}

