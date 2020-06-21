import { MessageEmbed, TextChannel } from 'discord.js';

import {
  RULES_COMMAND,
  COMMANDS_COMMAND,
  CHANNELS_COMMAND,
  ACCOUNTABILITY_COMMAND,
  ACCOUNTABILITY_EXAMPLE_COMMAND,
  ANTI_CHEATSHEET_COMMAND,
  CHEATSHEET_COMMAND,
  EMERGENCY_COMMAND,
  // PROGRESS_COMMAND,

  RULES_COMMAND_DESCRIPTION,
  COMMANDS_COMMAND_DESCRIPTION,
  CHANNELS_COMMAND_DESCRIPTION,
  ACCOUNTABILITY_COMMAND_DESCRIPTION,
  ACCOUNTABILITY_EXAMPLE_COMMAND_DESCRIPTION,
  ANTI_CHEATSHEET_COMMAND_DESCRIPTION,
  CHEATSHEET_COMMAND_DESCRIPTION,
  EMERGENCY_COMMAND_DESCRIPTION,
  // PROGRESS_COMMAND_DESCRIPTION,
} from './COMMAND';

import {
  WELCOME_CHANNEL_NAME,
  RECOVERY_CHANNEL_NAME,
  RANDOM_CHANNEL_NAME,
  ACCOUNTABILITY_CHANNEL_NAME,
  ASK_JULIUS_CHANNEL_NAME,
  ANNOUNCEMENT_CHANNEL_NAME,
  POST_RELAPSE_CHANNEL_NAME,
  EMERGENCY_CHANNEL_NAME,
  SERVER_SUGGESTIONS_CHANNEL_NAME,

  WELCOME_CHANNEL_DESCRIPTION,
  RECOVERY_CHANNEL_DESCRIPTION,
  RANDOM_CHANNEL_DESCRIPTION,
  ACCOUNTABILITY_CHANNEL_DESCRIPTION,
  ASK_JULIUS_CHANNEL_DESCRIPTION,
  ANNOUNCEMENT_CHANNEL_DESCRIPTION,
  POST_RELAPSE_CHANNEL_DESCRIPTION,
  EMERGENCY_CHANNEL_DESCRIPTION,
  SERVER_SUGGESTIONS_CHANNEL_DESCRIPTION,
} from './CHANNEL';

const adminCommandListText = `
  \`!${RULES_COMMAND}\` - ${RULES_COMMAND_DESCRIPTION}
  \`!${COMMANDS_COMMAND}\` - ${COMMANDS_COMMAND_DESCRIPTION}
  \`!${CHANNELS_COMMAND}\` - ${CHANNELS_COMMAND_DESCRIPTION}
`;

const informationCommandListText = `
  \`!${ACCOUNTABILITY_COMMAND}\` - ${ACCOUNTABILITY_COMMAND_DESCRIPTION}
  \`!${ACCOUNTABILITY_EXAMPLE_COMMAND}\` - ${ACCOUNTABILITY_EXAMPLE_COMMAND_DESCRIPTION}
  \`!${CHEATSHEET_COMMAND}\` - ${CHEATSHEET_COMMAND_DESCRIPTION}
  \`!${ANTI_CHEATSHEET_COMMAND}\` - ${ANTI_CHEATSHEET_COMMAND_DESCRIPTION}
`;

const emergencyCommandListText = `
  \`!${EMERGENCY_COMMAND}\` - ${EMERGENCY_COMMAND_DESCRIPTION}
`;

// !${PROGRESS_COMMAND} - ${PROGRESS_COMMAND_DESCRIPTION}

export const commandListMessage = new MessageEmbed()
  .setTitle("Command List")
  .setColor(0xFF0000)
  .setDescription("These are the commands the NeverFap Deluxe Bot will respond to.")
  .addField("Admin Commands", adminCommandListText)
  .addField("Information Commands", informationCommandListText)
  .addField("Emergency Commands", emergencyCommandListText)
  .setFooter("A friendly message from the NeverFap Deluxe Bot! ^^", "https://neverfapdeluxe.com/images/logo.png") // This message will self-delete within 5 minutes ^^.

export const channelListMessage = new MessageEmbed()
  .setTitle("NeverFap Deluxe Discord Channel List")
  .setColor(0xFF0000)
  .setDescription("These are the NeverFap Deluxe Channels.")
  .addField(`#${WELCOME_CHANNEL_NAME}`, `${WELCOME_CHANNEL_DESCRIPTION}`)
  .addField(`#${RECOVERY_CHANNEL_NAME}`, `${RECOVERY_CHANNEL_DESCRIPTION}`)
  .addField(`#${RANDOM_CHANNEL_NAME}`, `${RANDOM_CHANNEL_DESCRIPTION}`)
  .addField(`#${ACCOUNTABILITY_CHANNEL_NAME}`, `${ACCOUNTABILITY_CHANNEL_DESCRIPTION}`)
  .addField(`#${ASK_JULIUS_CHANNEL_NAME}`, `${ASK_JULIUS_CHANNEL_DESCRIPTION}`)
  .addField(`#${ANNOUNCEMENT_CHANNEL_NAME}`, `${ANNOUNCEMENT_CHANNEL_DESCRIPTION}`)
  .addField(`#${POST_RELAPSE_CHANNEL_NAME}`, `${POST_RELAPSE_CHANNEL_DESCRIPTION}`)
  .addField(`#${EMERGENCY_CHANNEL_NAME}`, `${EMERGENCY_CHANNEL_DESCRIPTION}`)
  .addField(`#${SERVER_SUGGESTIONS_CHANNEL_NAME}`, `${SERVER_SUGGESTIONS_CHANNEL_DESCRIPTION}`)
  .setFooter("A friendly message from the NeverFap Deluxe Bot! ^^", "https://neverfapdeluxe.com/images/logo.png") // This message will self-delete within 5 minutes ^^.

export const accountabilityMessage = (accountabilityChannel: TextChannel) => new MessageEmbed()
  .setTitle('#accountability guidelines.')
  .setColor(0xFF0000)
  .setDescription(`Welcome to the NeverFap Deluxe process of overcoming porn addiction!\n \nOur <#${accountabilityChannel}> program is a verifiable process, which is verified to work if you follow it step-by-step. Whether you do that however, is entirely up to you. I can only provide you with the system and the support; the rest is up to you.`)
  .addField(
    `The entire process takes around 90 days.`,
    `It takes approximately 90 days to overcome porn addiction. You will only succeed if you commit to the program every single day for the next 90 days. Otherwise, you will not develop the Healthy Coping Mechanisms in order to develop control over your mind.`
  )
  .addField(
    `You must post in #accountability every single day.`,
    `This will prove your commitment to your porn addiction recovery, and it is an excellent way to keep on-top of your progress, and therefore develop your capacity for awareness.`
  )
  // .addField(
  //   `I cannot offer you advice if you stop posting in #accountability.`,
  //   `If you're not putting your mental health first, there's nothing I can do to help you. I am not a substitute for the process, I merely facilitate your journey.`
  // )
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
  .addField(
    `We have strict formatting for #accountability posts.`,
    `The NeverFap Deluxe Bot will validate all your <#${accountabilityChannel}> posts. Please type in \`!example\` in order to see what an ideal post should look like.`
  )
  .addField(
    `Oh, and please don't forget to add emoji reacts to other people's posts!`,
    `It's just a nice thing you can do for others, which helps motivate the community which loves you so much!`
  )
  .addField(
    `For additional information, please check the website.`,
    `The website contain a wealth of information on how best to approach your porn addiction recovery https://neverfapdeluxe.com/` // however there is a specifc page dedicated towards <#${accountabilityChannel}> rules https://neverfapdeluxe.com/accountability-program/
  )
  .setFooter("A friendly message from the NeverFap Deluxe Bot! ^^", "https://neverfapdeluxe.com/images/logo.png") // This message will self-delete within 5 minutes ^^.

export const accountabilityExampleMessage = (accountabilityChannel: TextChannel) => new MessageEmbed()
  .setTitle('#accountability rules')
  .setColor(0xFF0000)
  .setDescription(`These the are the guidelines for posting in <#${accountabilityChannel}>.`)
  .addField("Today's date", "20/01/2018")
  .addField("List of Healthy Coping Mechanisms you practiced", "Healthy Coping Mechanisms\n- Meditated for 10 minutes\n - Completed a huge squat + deadlift workout\n - Remained calm throughout the day and really practiced to keep my mind wide and open")
  .addField("How you will improve tomorrow", "To Improve\n - I'm going to focus on becoming more calm throughout the day\n - I want to continue learning not to take things personally, and instead take things one step at a time")
  .setFooter("A friendly message from the NeverFap Deluxe Bot! ^^", "https://neverfapdeluxe.com/images/logo.png") // This message will self-delete within 5 minutes ^^.

export const rulesMessage = (accountabilityChannel: TextChannel) => new MessageEmbed()
  .setTitle('The NeverFap Deluxe Discord Server Rules')
  .setColor(0xFF0000)
  .setDescription("Welcome to the NeverFap Deluxe Discord channel!\n \n I hope you enjoy your stay! Here are the basic rules for the channel.")
  .addField(
    `Please only message Julius Reade in regards to your #accountability post.`,
    `I am more than happy to help to offer you strategic advice in regards to improving upon your <#${accountabilityChannel}> strategy. Otherwise, everything else is best addressed in #general.`)
  .addField(
    `We can't help you overcome severe mental health issues.`,
    `The focus of this server is around porn addiction recovery. We are not qualified therapists, nor is it fair on everyone else to expect them to diagnose to your trauma. Please seek professional help if you have severe mental health issues.`)
  .addField(
    `Please learn the rules of #accountability.`,
    `We have very clear rules of how <#${accountabilityChannel}> should work. Type in \`!${ACCOUNTABILITY_COMMAND}\` to learn these rules. Those who fail to adhere to these rules may be automatically kicked by the NeverFap Deluxe Bot.`
  )
  .addField(
    `Otherwise, have fun!`,
    `We are a very friendly community. Feel free to chat amongst yourselves and support each other!`
  )
  .setFooter("A friendly message from the NeverFap Deluxe Bot! ^^", "https://neverfapdeluxe.com/images/logo.png") // This message will self-delete within 5 minutes ^^.

export const emergencyMessage = new MessageEmbed()
  .setTitle("Official Emergency Process")
  .setDescription("What you will read is a verifiable process. In other words, it is verified to work if you follow it step-by-step. Of course, in order for it to work you will need to consciously engage with your brain. It's a little irrational right now, so you need to communicate with it. Please proceed.")
  .addField("Step 1 - Your #1 priority as of this moment is to relax.", "Your primary mission at this point is to relax, and as it stands, represents 90% of the battle you're currently facing right now. Once you calm down, you're more-or-less guaranteed not to relapse. Put simply, you cannot be effective without a calm mind, whether experiencing intense urges or not. In practical terms this means you must do whatever is necessary in order to relax yourself, whether it means going for a walk or taking a cold shower. Distractions such as playing video games or eating do not count as relaxation. Failure to truly relax will inevitably result to relapse. Don't risk it. Ever.")
  .addField("Step 2 - Focus first on letting go of all physical tension.", "While your mind may be racing at a million miles per hour, that does not mean you still do not have direct connection to your body. Let go of all the physical tension you are feeling, first in your face, then in your arms, followed by your legs and the rest of your body. Lie down on the floor if you have to.")
  .addField("Step 3 - Focus next on slowing down your breath.", "Consciously direct your breathing, remembering to relax and remain in-control of your lungs. Slow down your breathing, consciously letting go of thoughts and tension within your mind as you breathe out.")
  .addField("Step 4 - Imagine as if time and reality has physically slowed down.", "For the next few minutes I want you to imagine that time has physically slowed down. This means that your movements have become slower. Your ability to think is also moving slower. Everything surrounding your perception is now moving at a snail's pace, including your ability to react.")
  .addField("Step 5 - For more tips and advice please read the website", "Educating yourself and understanding why the process works can be reassuring. You may visit the website at https://neverfapdeluxe.com/")
  // .addField("Step 5 - Read the emergency guide", "Now that you have the basics down, continue to follow and repeat these steps where necessary and read the emergency guide at https://neverfapdeluxe.com/emergency")
  .setColor(0xFF0000)
  .setFooter("A friendly message from the NeverFap Deluxe Bot! ^^", "https://neverfapdeluxe.com/images/logo.png") // This message will self-delete within 5 minutes ^^.

export const cheatsheetMessage = new MessageEmbed()
  .setTitle('Healthy Coping Mechanisms Cheatsheet')
  .setColor(0xFF0000)
  .setDescription("Here are a list of Healthy Coping Mechanisms you can practice on a daily basis if you're struggling to come up with suitable ideas. Please keep in mind that Healthy Coping Mechanisms in some way must improve your mental health. If it does not serve this function in your life, then it is not a Healthy Coping Mechanism.")
  .addField("Meditation", "Meditation is the bare minimum you should be committing to in order to improve your mental health everyday. It is a hard expectation for the NeverFap Deluxe process of overcoing porn addiction. Aim for 10 minutes each day, at a minimum. Remember that consistency is key.")
  .addField("Exercising", "Improving your physical health through targeted exercise does absolute wonders for your mental health. Aim to exercise at least three times each week. Routine is vital to keeping exercise consistent and regular.")
  .addField("Cold Showers", "Cold showers are an excellent way to train your mind to relax while facing unbearable conditions. They can teach you to remain calm during tough situations.")
  .addField("Intermittent Fasting", "Intermittent Fasting is another great way to train the body and mind to control hunger.")
  .addField("Healthy Eating", "Attempt to eat Paleo, or embrace diets which promote ketosis.")
  .addField("Studying", "This is what you should be doing committing to when you have free time and your mind is mentally stable.")
  .addField("Journaling", "Journaling is an excellent way to help us keep on top of our mental health progress, as well as not lose that special spark of motivation which kept us going.")
  .addField("Reading", "Increase your intelligence and learn more about the world through literature. It's a great way to focus your attention on an intellectual pursuit.")
  .addField("Working", "Working is an important function which helps tremendously with not only goal setting, but also creating time pressure so you can better utilise your time.")
  .addField("Socialising", "Spending time with the people you love and cherishing them.")
  .addField("Relaxation", "Includes video gaming, watching TV, napping etc. Should only be relied on if you're needing to wind down, otherwise you should be studying and learning.")
  .addField("Helping others", "Helping others with their goals can be a great way to learn how you can better help yourself.")
  .addField("Awareness Exercises", "Expand your mental capacity for conscious action.")
  .addField("Practicing Gratitude", "An excellent way to gain an appreciation of your own life.")
  .addField("Express Yourself", "Whether through writing, speech or art, learning to express yourself is a great way to learn more about yourself.")
  .addField("Stay Hydrated", "It's important that you remain hydrated throughout the day, as that will help you better regulate your health.")
  .setFooter("A friendly message from the NeverFap Deluxe Bot! ^^", "https://neverfapdeluxe.com/images/logo.png") // This message will self-delete within 5 minutes ^^.

export const antiCheatsheetMessage = new MessageEmbed()
  .setTitle('Unhealthy Coping Mechanisms Cheatsheet')
  .setColor(0xFF0000)
  .setDescription("Here are a list of Unhealthy Coping Mechanisms you that you may be committing to subconsciously. It can be helpful to be aware of these behaviours, so that we can consciously stop committing to them.")
  .addField("Escapism", "Often we can use certain activities, such as playing video games, as a distraction from reality and our feelings. It is an indirect and ineffective way of influencing our emotions, and one that is no substitute for relaxation itself.")
  .addField("Edging", "Edging of absolutely any kind is unhealthy, no questions asked. Even if the intention is non-sexual (such as looking at clothed pictures of women on Google) the effect on our brain from a behavioural point of view is no better than watching porn itself.")
  .addField("Self-criticism", "Any time you self-criticise or blame yourself is when you not only react emotionally (which means losing control over your emotions) however also give up your ability to act effectively. Certainly, it is no substitute for remaining calm itself.")
  .addField("Negative emotions", "Emotions such as anger and sadness, although powerful and sometimes unavoidable, do not serve us in any way to help us develop control over our emotions.")
  .addField("Obsession", "Obsession is the worst offender when it comes to losing control over our emotions. There is no better way to derail than consciously deciding to obsess over something, whether it be certain emotions, feelings or even people or things in our lives.")
  .addField("Judging others", "This is the exact same thing as self-criticism, except directed towards others. In fact, they are both different sides of the same coin, which effectively reinforce each other.")
  .addField("Incessant Rationalsation", "Overthinking is not an appropriate response to any situation. ")
  .addField("Overworking", "Pushing ourselves too hard is both a form of obsession, as well as distraction. When you push yourself too hard, not only do you lose awareness, however you also lose balance as well - which in most cases leads to relapse. ")
  .setFooter("A friendly message from the NeverFap Deluxe Bot! ^^", "https://neverfapdeluxe.com/images/logo.png") // This message will self-delete within 5 minutes ^^.
