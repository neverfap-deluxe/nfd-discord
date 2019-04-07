const { RichEmbed } = require('discord.js');

const { 
  RULES_COMMAND,
  COMMANDS_COMMAND,
  CHANNELS_COMMAND,
  ACCOUNTABILITY_COMMAND,
  ACCOUNTABILITY_EXAMPLE_COMMAND,
  CHEATSHEET_COMMAND,
  EMERGENCY_COMMAND,
  // SET_STREAK_COMMAND,
  // PROGRESS_COMMAND,

  RULES_COMMAND_DESCRIPTION,
  COMMANDS_COMMAND_DESCRIPTION,
  CHANNELS_COMMAND_DESCRIPTION,
  ACCOUNTABILITY_COMMAND_DESCRIPTION,
  ACCOUNTABILITY_EXAMPLE_COMMAND_DESCRIPTION,
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
  \`!${RULES_COMMAND}\` - ${RULES_COMMAND_DESCRIPTION}
  \`!${COMMANDS_COMMAND}\` - ${COMMANDS_COMMAND_DESCRIPTION}
  \`!${CHANNELS_COMMAND}\` - ${CHANNELS_COMMAND_DESCRIPTION}
`;

const informationCommandListText = `
  \`!${ACCOUNTABILITY_COMMAND}\` - ${ACCOUNTABILITY_COMMAND_DESCRIPTION}
  \`!${ACCOUNTABILITY_EXAMPLE_COMMAND}\` - ${ACCOUNTABILITY_EXAMPLE_COMMAND_DESCRIPTION}
  \`!${CHEATSHEET_COMMAND}\` - ${CHEATSHEET_COMMAND_DESCRIPTION}
`;

const emergencyCommandListText = `
  \`!${EMERGENCY_COMMAND}\` - ${EMERGENCY_COMMAND_DESCRIPTION}
`;

// !${SET_STREAK_COMMAND} - ${SET_STREAK_COMMAND_DESCRIPTION}
// !${PROGRESS_COMMAND} - ${PROGRESS_COMMAND_DESCRIPTION}

// TODO: Pass in the actual channels so that they light-up as links inside the messages.

const accountabilityMessage = (accountabilityChannel) => new RichEmbed()
  .setTitle('#accountability guidelines.')
  .setColor(0xFF0000)
  .setDescription(`Welcome to the NeverFap Deluxe process of overcoming porn addiction!\n \n The ${accountabilityChannel} program is a verifiable process. In other words, it is verified to work if you follow it step-by-step. Whether you do that however, is entirely up to you. I can only provide you with the system and the support; the rest is up to you.`)
  .addField(
    `The entire process takes around 90 days.`,
    `It takes approximately 90 days to overcome porn addiction. You will only succeed if you commit to the program every single day for the next 90 days. Otherwise, you will not develop the Healthy Coping Mechanisms in order to develop control over your mind.`
  )
  .addField(
    `You must post in #${accountabilityChannel} every single day.`,
    `This will prove your commitment to your porn addiction recovery, and is an excellent way to keep on-top of your progress, and therefore develop your capacity for awareness.`
  )
  .addField(
    `95% of your time should be spent remaining calm.`,
    `Calmness should be your default state of mind. It's what makes you powerful and act with intention. You can only be in-control of your thoughts, feelings and emotions when you are calm. However, you will only learn to become calm if you practice it throughout your day.`
  )
  .addField(
    `The other 5% of your time should be spent practicing Healthy Coping Mechanisms.`,
    `This equates to around 40 minutes per day. Healthy Coping Mechanisms are designed to help you build your capacity for awareness, and is what will allow you to remain calm.`
  )
  .addField(
    `Your Healthy Coping Mechanism list must include daily meditation.`,
    `Meditation is the most powerful Healthy Coping Mechanism in allowing you to regain control over your emotions. It is a hard expectation that you begin your journey with a daily routine of meditation. Otherwise, you will fail.`
  )
  // .addField(
  //   `Users who do not stick to the process may be removed from the server.`,
  //   `If you are not sticking to the process, I cannot be there to offer you advice. I can only help you if you're willing to help yourself, otherwise you will not succeed.`
  // )
  .addField(
    `We have strict formatting for #accountability posts.`,
    `The NeverFap Deluxe Bot will validate all your ${accountabilityChannel} posts. Please type in \`!accountability-example\` in order to see what an ideal post should look like.`
  )
  .addField(
    `For additional information, please check the website.`,
    `The website contain a wealth of information on how best to approach your porn addiction recovery https://neverfapdeluxe.com/` // however there is a specifc page dedicated towards ${accountabilityChannel} rules https://neverfapdeluxe.com/accountability-program/ 
  )
  .setFooter(`This message will self-delete within 5 minutes ^^.`, `https://neverfapdeluxe.com/images/logo.png`)


const accountabilityExampleMessage = (accountabilityChannel) => new RichEmbed()
  .setTitle('#accountability rules')
  .setColor(0xFF0000)
  .setDescription(`These the are the guidelines for posting in ${accountabilityChannel}.`)
  .addField("Today's date", "20/01/2018")
  .addField("List of Healthy Coping Mechanisms you practiced", "Healthy Coping Mechanisms\n- Meditated for 10 minutes\n - Completed a huge squat + deadlift workout\n - Remained calm throughout the day and really practiced to keep my mind wide and open")
  .addField("How you will improve tomorrow.", "To Improve\n - I'm going to focus on becoming more calm throughout the day\n - I want to continue learning not to take things personally, and instead take things one step at a time")
  .setFooter("This message will self-delete within 5 minutes ^^.", "https://neverfapdeluxe.com/images/logo.png")

const rulesMessage = (accountabilityChannel) => new RichEmbed()
  .setTitle('The NeverFap Deluxe Discord Server Rules')
  .setColor(0xFF0000)
  .setDescription("Welcome to the NeverFap Deluxe Discord channel!\n \n I hope you enjoy your stay! Here are the basic rules for the channel.")
  .addField(
    `Please only message Julius Reade in regards to your #accountability post.`,
    `Send me messages in regards to how I can help you improve upon your ${accountabilityChannel} strategy. I am more than happy to help to offer strategic advice. Otherwise, everything else is best addressed in #general.`)  
  .addField(
    `We can't help you overcome severe mental health issues.`,
    `The focus of this server is around porn addiction recovery. We are not qualified therapists, nor is it fair on everyone else to expect them to listen to your trauma. Please seek professional help if you have severe mental health issues.`)
  .addField(
    `Please learn the rules of #accountability.`,
    `We have very clear rules of how ${accountabilityChannel} should work. Type in \`!${ACCOUNTABILITY_COMMAND}\` to learn these rules. Those who fail to adhere to these rules may be automatically kicked by the NeverFap Deluxe Bot.`
  )
  .addField(
    `Otherwise, have fun!`,
    `We are a very friendly community. Feel free to chat amongst yourselves and support each other!`
  )

  .setFooter("This message will self-delete within 5 minutes ^^.", "https://neverfapdeluxe.com/images/logo.png")


const commandListMessage = new RichEmbed()
  .setTitle("Command List")
  .setColor(0xFF0000)
  .setDescription("These are the commands the NeverFap Deluxe Bot will respond to.")
  .addField("Admin Commands", adminCommandListText)
  .addField("Information Commands", informationCommandListText)
  .addField("Emergency Commands", emergencyCommandListText)
  .setFooter("This message will self-delete within 5 minutes ^^.", "https://neverfapdeluxe.com/images/logo.png")

const channelListMessage = new RichEmbed()
  .setTitle("NeverFap Deluxe Discord Channel List")
  .setColor(0xFF0000)
  .setDescription("These are the NeverFap Deluxe Channels.")
  .addField(`#${WELCOME_CHANNEL_NAME}`, `${WELCOME_CHANNEL_DESCRIPTION}`)
  .addField(`#${GENERAL_CHANNEL_NAME}`, `${GENERAL_CHANNEL_DESCRIPTION}`)
  .addField(`#${ACCOUNTABILITY_CHANNEL_NAME}`, `${ACCOUNTABILITY_CHANNEL_DESCRIPTION}`)
  .addField(`#${LOLFAP_CHANNEL_NAME}`, `${LOLFAP_CHANNEL_DESCRIPTION}`)
  .addField(`#${ANNOUNCEMENT_CHANNEL_NAME}`, `${ANNOUNCEMENT_CHANNEL_DESCRIPTION}`)
  .addField(`#${EMERGENCY_CHANNEL_NAME}`, `${EMERGENCY_CHANNEL_DESCRIPTION}`)
  .setFooter("This message will self-delete within 5 minutes ^^.", "https://neverfapdeluxe.com/images/logo.png")

const emergencyMessage = new RichEmbed()
  .setTitle("Official Emergency Process")
  .setDescription("What you will read is a verifiable process. In other words, it is verified to work if you follow it step-by-step.")
  .addField("Step 1 - Relax into your mind", "No one is effective without a calm mind, whether experiencing urges or not.")
  .addField("Step 2 - Normalise what you're feeling", "The next step is to become comfortable with your emotions. Understand not to take them personally. They mean no harm.")
  .addField("Step 3", "What are your list of healthy coping mechanisms? Have you practiced them yet? Now is the perfect time to work on that list.")
  .setColor(0xFF0000)
  .setFooter("This message will self-delete within 5 minutes ^^.", "https://neverfapdeluxe.com/images/logo.png")

const welcomeMessage = new RichEmbed()
  .setTitle('Welcome to the NeverFap Deluxe Discord!')
  .setColor(0xFF0000)
  .setDescription("Welcome to the NeverFap Deluxe Discord channel! I'm the NeverFap Deluxe Bot!")
  .setDescription("These are the NeverFap Deluxe Commands.")
  .addField("Admin", adminCommandListText)
  .addField("Information", informationCommandListText)
  .addField("Emergency", emergencyCommandListText)
  .setFooter("This message will self-delete within 5 minutes ^^.", "https://neverfapdeluxe.com/images/logo.png")

const welcomeMessageTwo = (accountabilityChannel) => `
Thank you for joining the NeverFap Deluxe Discord Channel!\n
Chances are that you're here to participate in our ${accountabilityChannel} program. In that case, please read the ${accountabilityChannel} rules by typing in \`!accountability\` into the message bar and pressing enter.\n
These rules are super important, and I will be working with you to ensure that you understand and follow them! Although we're a fun bunch, this is also a very serious program and our focus is to help you overcome porn addiction.\n
To get started, please type and enter \`!accountability\` into this direct chat to learn what this channel is all about ^^.
`;

const cheatsheetMessage = new RichEmbed()
  .setTitle('Healthy Coping Mechanisms Cheatsheet')
  .setColor(0xFF0000)
  .setDescription("Here are a list of Healthy Coping Mechanisms you can practice on a daily basis if you're struggling to come up with suitable ideas. Please keep in mind that Healthy Coping Mechanisms in some way must improve your mental health. If it does not serve this function in your life, then it is not a Healthy Coping Mechanism.")
  .addField("Meditation", "Meditation is the bare minimum you should be commiting to in order to improve your mental health everyday. It is a hard expectation for the NeverFap Deluxe process of overcoing porn addiction. Aim for 10 minutes each day, at a minimum. Remember that consistency is key.")
  .addField("Exercising", "Improving your physical health through targeted exercise does absolute wonders for your mental health. Aim to exercise at least three times each week. Routine is vital to keeping exercise consistent and regular.")
  .addField("Cold Showers", "Cold showers are an excellent way to train your mind to relax while facing unbearable conditions. They can teach you to remain calm during tough situations.")
  .addField("Intermittent Fasting", "Intermittent Fasting is another great way to train the body and mind to control hunger.")
  .addField("Healthy Eating", "Attempt to eat Paleo, or embrace diets which promote ketosis.")
  .addField("Studying", "This is what you should be doing committing to when you have free time and your mind is mentally stable.")
  .addField("Reading", "Increase your intelligence and learn more about the world through literature.")
  .addField("Working", "Working is an important function which helps tremendously.")
  .addField("Socialising", "Spending time with the people you love and cherishing them.")
  .addField("Relaxation", "Includes video gaming, watching TV, napping etc. Should only be relied on if you're needing to wind down, otherwise you should be studying and learning.")
  .addField("Helping others", "Helping others with their goals can be a great way to learn how you can better help yourself.")
  .addField("Awareness Exercises", "Expand your mental capacity for conscious action.")
  .addField("Practicing Gratitude", "An excellent way to gain an appreciation of your own life.")
  .addField("Express Yourself", "Whether through writing, speech or art, learning to express yourself is a great way to learn more about yourself.")
  .setFooter("This message will self-delete within 5 minutes ^^.", "https://neverfapdeluxe.com/images/logo.png")
  
const automatedMessageGeneral1  = new RichEmbed().setTitle("#general advice").setDescription(
  "Just a friendly reminder from the NeverFap Deluxe Bot to stay positive! Otherwise, I may have to kill you ^^.");
const automatedMessageGeneral2  = new RichEmbed().setTitle("#general advice").setDescription(
  "Empathy, love, kindness and gratitude are your friends. Treat yourself as you would others.");
const automatedMessageGeneral3  = new RichEmbed().setTitle("#general advice").setDescription(
  "Your commitment to the process is the only thing that matters. Once you lose that commitment, you lose everything and the sad thing is that you won't realise it until a few day later, at which point you'll feel completely lost and oblivious. Unfortunately, most people learn the hard way.");
const automatedMessageGeneral4  = new RichEmbed().setTitle("#general advice").setDescription(
  "This is a friendly reminder to trust the process. The process is your best friend! Much like KFC, only healthier.");
const automatedMessageGeneral5  = new RichEmbed().setTitle("#general advice").setDescription(
  "Wondering what purpose I actually serve? Type and enter \`!commands\` into the channel to learn what I can do for you!");
const automatedMessageGeneral6  = new RichEmbed().setTitle("#general advice").setDescription(
  "Meditation allows you to develop control over your emotions. You are not effective unless if you have control over your emotions. Otherwise, you are effectively leaving your porn addiction to chance, and we all know how that story goes.");
const automatedMessageGeneral7  = new RichEmbed().setTitle("#general advice").setDescription(
  "Wanting to learn more about the whole porn addiction recovery process? Please check out the NeverFap Deluxe website! https://neverfapdeluxe.com/");
const automatedMessageGeneral8  = new RichEmbed().setTitle("#general advice").setDescription(
  "Have you been craving the taste of some additional mental health practices? Thankfully, there's a whole section of them at https://neverfapdeluxe.com/practices");
const automatedMessageGeneral9  = new RichEmbed().setTitle("#general advice").setDescription(
  "New to the whole porn recovery thing? Check out the NeverFap Deluxe 7 Day Kickstarter! https://neverfapdeluxe.com/seven-day-neverfap-deluxe-kickstarter");
const automatedMessageGeneral10 = new RichEmbed().setTitle("#general advice").setDescription(
  "Looking for a comprehensive guide on how to overcome porn addiction? Well, I wrote one! Check it out https://neverfapdeluxe.com/guide");
const automatedMessageGeneral11 = new RichEmbed().setTitle("#general advice").setDescription(
  "Life only ever gets harder. So why not focus on making it hard for yourself now, so you can prepare for the future?");
const automatedMessageGeneral12 = new RichEmbed().setTitle("#general advice").setDescription(
  "Porn is not a solution to your problems. Rather, it's been the cause of all your problems for such a long time now that you've no longer been able to function in all the other areas of your life.");
const automatedMessageGeneral13 = new RichEmbed().setTitle("#general advice").setDescription(
  "The reason why it takes people five years' on average to overcome porn addiction, is because they choose not to commit for a good four and a half years of that period. Starting your porn recovery journey will never get any easier, so why wait?");
const automatedMessageGeneral14 = new RichEmbed().setTitle("#general advice").setDescription(
  "The porn recovery process takes approximately 90 days. Everytime you give up your commitment, you extend your recovery process by 90 days.");
const automatedMessageGeneral15 = new RichEmbed().setTitle("#general advice").setDescription(
  "Ultimately, you make your life as difficult or as easy as you want it. There are processes there for you to make it easy, just as there are processes for you to make it difficult.");
const automatedMessageGeneral16 = new RichEmbed().setTitle("#general advice").setDescription(
  "Porn isn't the reason why you're an addict. You're an addict because you haven't developed control over your mind. Until you learn to develop that control via meditation, you'll more-or-less be a sitting duck until your next relapse.");
const automatedMessageGeneral17 = new RichEmbed().setTitle("#general advice").setDescription(
  "Your mind will always believe and seek what it wants to. That is, unless if you learn to actively relax and calm it down. Make it your mission throughout the day to remain calm and collected.");
const automatedMessageGeneral18 = new RichEmbed().setTitle("#general advice").setDescription(
  "Your brain doesn’t know what it wants. It only knows what it feels, and if you're always feeling nervous and anxious, then it will pursue those kinds of behaviours. That is why it's important to develop control over your mind, so you can teach your brain what it actually needs.");
const automatedMessageGeneral19 = new RichEmbed().setTitle("#general advice").setDescription(
  "You don't develop self-control by forcing yourself into a routine. You develop self-control by letting go and allowing yourself the opportunity to relax.");
const automatedMessageGeneral20 = new RichEmbed().setTitle("#general advice").setDescription(
  "Don't focus on the days. Focus on the actions that are going to help you get through those days. They're the things that matter at the end of the day.");
const automatedMessageGeneral21 = new RichEmbed().setTitle("#general advice").setDescription(
  "Relapse isn't about PMO. Relapse is anything you do that negatively impacts your mental health, whether it be choosing to neglect the process or choosing to neglect yourself.");
const automatedMessageGeneral22 = new RichEmbed().setTitle("#general advice").setDescription(
  "When you neglect the process, you neglect yourself. You distrust the process, you lose. It's that simple.");
const automatedMessageGeneral23 = new RichEmbed().setTitle("#general advice").setDescription(
  "The more time you spend doing something, the better you're going to get at it. No one ever becomes ripped within a day. It takes months of practice to reach a point of fluency, but only if you commit today.");
const automatedMessageGeneral24 = new RichEmbed().setTitle("#general advice").setDescription(
  "Blame isn’t constructive. Processes on the other hand are. Learn to focus on developing process, as opposed to rationalisations for your own behaviour.");
const automatedMessageGeneral25 = new RichEmbed().setTitle("#general advice").setDescription(
  "Cravings don’t just happen out of nowhere. Cravings are the result of an uncalm mind. When your mind is uncalm, you lose focus, which results in losing balance, which inevitably results in relapse. Always keep on top your mental health.");
  
  

const automatedMessageAccountability1 = (accountabilityChannel) => new RichEmbed().setTitle("#accountability advice").setDescription(
  `Don't forget to add emoji reacts to other people's ${accountabilityChannel} posts!`);
const automatedMessageAccountability2 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  "Need some help? Type and enter \`!cheatsheet\` into the channel for a list of Healthy Coping Mechanisms.");
const automatedMessageAccountability3 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  "If you're feeling urges, it means that you've lost balance and you've failed to practice remaining calm and relaxed.");
const automatedMessageAccountability4 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  "Remember, remaining calm should be your default state 95% of the time, which requires active practice and a conscious effort to retain balance in our lives. This means sticking to a regular routine, going to bed on time etc.");
const automatedMessageAccountability5 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  "The process is there for a reason. It's there because it works and when you don't stick with the process, you work against it, which means working against yourself.");
const automatedMessageAccountability6 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  "Self-criticism doesn't work. When you self-criticise, you essentially give up your power for conscious action by reacting sub-consciously on an emotional level. It's possibly one of the most self-destructive things you can do as a human being in terms of developing control over your emotions.");
const automatedMessageAccountability7 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  "Practicing meditation is no different from going to the gym. It's only going to be effective if you practice regularly, with a high level of consistency. Otherwise, you're going to get nowhere.");
const automatedMessageAccountability8 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  "While the process is important, it cannot exist without you. While you have the power to make the process an important part of your life, you also have the power to make it completely irrelevant. Only you can decide how much your mental health means to you.");
const automatedMessageAccountability9 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  "We all make thousands of decisions each day, a huge portion of them subconscious. The idea behind awareness is to uncover these decisions, so we can better understand how we lose balance and therefore contribute towards our porn addiction.");
const automatedMessageAccountability10 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  "Don't fear your emotions. Embrace those uneasy feelings and learn to be comfortable with them. In other words, learn to be present with these emotions while not reacting to them. It's one of the most powerful things you can learn to do.");
const automatedMessageAccountability11 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  "You absolutely need to develop a list of healthy coping mechanisms for you to practice each day. It's no different to having a list of exercises we do at the gym. It will help you remain consistent.");
const automatedMessageAccountability12 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  "Don't React. Always Relax.");
const automatedMessageAccountability13 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  "What did you do to achieve peace today?");
const automatedMessageAccountability14 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  "Life is easy when you're calm. Remain calm and everything will literally fall into place. Lose your calm and you'll find yourself wondering how you could have been so naive.");                                                                                     
const automatedMessageAccountability15 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  "If your mind isn’t absolutely calm now, there's no chance you'll be able to make it calm when you're having a craving. Practice now while it's easy, so you can prepare while it's hard.");
const automatedMessageAccountability16 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
  "You can't cheat your mind by skipping out on meditation, expecting that it won't know. It knows and it always responds appropriately, whether it be in the form of an emotional breakdown or an intense urge to watch porn. Respect your mind and it will respect you back.");
// const automatedMessageAccountability17 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
//   "Do you have a strategy in place to not take your emotions personally?");
// const automatedMessageAccountability18 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
//   "Are you able to quiet and calm your mind down at will?");
// const automatedMessageAccountability19 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
//   "Are you able to let go when you’re feeling obsessed?");
// const automatedMessageAccountability20 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
//   "");
// const automatedMessageAccountability21 = () => new RichEmbed().setTitle("#accountability advice").setDescription(
//   "");
                                                                                                                              
                                                                                                              

  


module.exports = {
  rulesMessage,
  accountabilityMessage,
  welcomeMessage,
  welcomeMessageTwo,
  commandListMessage,
  channelListMessage,
  emergencyMessage,
  accountabilityExampleMessage,
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
    automatedMessageGeneral11,
    automatedMessageGeneral12,
    automatedMessageGeneral13,
    automatedMessageGeneral14,
    automatedMessageGeneral15,
    automatedMessageGeneral16,
    automatedMessageGeneral17,
    automatedMessageGeneral18,
    automatedMessageGeneral19,
    automatedMessageGeneral20,
    automatedMessageGeneral21,
    automatedMessageGeneral22,
    automatedMessageGeneral23,
    automatedMessageGeneral24,
    automatedMessageGeneral25,
  },
  automatedMessageAccountability: {
    automatedMessageAccountability1,
    automatedMessageAccountability2,
    automatedMessageAccountability3,
    automatedMessageAccountability4,
    automatedMessageAccountability5,
    automatedMessageAccountability6,
    automatedMessageAccountability7,
    automatedMessageAccountability8,
    automatedMessageAccountability9,
    automatedMessageAccountability10,
    automatedMessageAccountability11,
    automatedMessageAccountability12,
    automatedMessageAccountability13,
    automatedMessageAccountability14,
    automatedMessageAccountability15,
    automatedMessageAccountability16,
  }
}

