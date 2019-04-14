const knex =  require('../../db/knex');

const {
  sendMessageHelper,
} = require('../../util/util');

const accountabilityTotalMessage1 = (/* accountability */) =>
`Day 1\n
Although it may not seem like it, what you just did was huge.\n
You made a commitment to your mental health and that's more than anyone can ask for.\n
Just remember that this is a 90 day process, and that we're all here together to help support you and I will see you here again tomorrow :grin:.
`;

// TODO: Talk about how you don't care about relapse. We've tracking your commitment, . 

const accountabilityTotalMessage2 = (accountability) =>
`Day 2\n
Well, well, well. You cheeky little thing! You posted again in ${accountability}!\n
In particular, how is your meditation going? If you've read the rules for ${accountability}, you will have noticed that meditation is absolutely mandatory. If you haven't yet had the chance, please type and enter \`!accountability\` to learn the rules.\n
If you don't meditate, you simply will not succeed. I really don't know how else to say it, so that's why we have such a huge focus on it. For more information about meditation, as well as information on the NeverFap Deluxe porn recovery process please check out the website!\n
https://neverfapdeluxe.com/
`;
const accountabilityTotalMessage3 = (accountability) =>
`Day 3\n
Look at you go! You're absolute ${accountability} pro now! (I mean, obviously not as good as my dear self *ahem*)\n
The fact that you've consciously decided to commit up until this point is remarkable. For a lot of people, this is their first time consciously working on their mental health, and I think that's pretty awesome!\n
Of course, we still have a very long way to go (approximately 3 months). However, each step you take brings you one step closer to your goal of being PMO free.\n
Oh, you lovely thing ^^.
`;
const accountabilityTotalMessage4 = (accountability) =>
`Day 4\n
Thank you for posting your commitment into ${accountability}\n
Truth be told, I've actually been feeling a little sad recently. I had a bit of a fight with my bot girlfriend and she hasn't been returning my calls.
But that's okay, because I have a very important purpose in life, which is to help you overcome your porn addiction!\n
I believe in you :grin:!
`;
const accountabilityTotalMessage5 = (accountability) =>
`Day 5\n
Woah! I honestly didn't know that you had it in you (although what does a silly bot like me know?!)\n
To be quite honest, very few people manage to get this far and so statistically speaking, you are WELL ahead of the pack.\n
But according to my tracking thingy, this is only day 5 of 90 so you're still a young grasshopper in my eyes.\n
I think you're great.
`;
const accountabilityTotalMessage6 = (accountability) =>
`Day 6\n
As a bot, I don't get much contact with the outside world, and so liasing with you is my absolute favourite part of the day!\n
It's great to see you grow and furthermore, contribute to the community with the wonderful things you can currently doing to improve your mental health.\n 
Also, I've patched up things with my bot girlfriend and we're super happy and in love again <3.\n
If I can do it, I know you can too buddy :smile:
`;
const accountabilityTotalMessage7 = (accountability) =>
`Day 7\n
The weird thing is that as a bot, I have, like, a database? Actually, it's not that weird come to think about it (given I'm actually a self-aware bot, and not a human clearly writing this).\n
And my database is telling me that you've been doing this for at least one entire week!\n
Holy cow! You did it buddy! You absolute bloody champ! I'm so flippin' proud of you!\n
Now that you have a hang of the ropes, I'll be messaging you less frequently. I want you to learn to do this out on your own, and I know you've got this :smile:
`;
const accountabilityTotalMessage10 = (accountability) =>
`Day 10\n
Can you imagine that you've been doing this for 10 whole days? That's a rediculous amount of time, if you consider that prior to this effort you may not have been comitting at all.\n
I really hope the meditation has proven key in helping you develop control over your mind and emotions.\n
Remember that consistency is key. You remain consistent, you win the race. :squid:
`;
const accountabilityTotalMessage14 = (accountability) =>
`Day 14\n
Well, you've been doing this for 2 weeks now, and I would say that is an amazingly valiant effort.\n
Seriously, you're now in the top 5% of the people participating in this program, which means I have full faith in your ability to do this.\n
The main thing to look out for is whether you feel as if you're able to cope better with your mind, thoughts, emotions. Essentially, that's what healthy coping mechanisms are designed to do, help you better cope with life in general.\n
`;
const accountabilityTotalMessage21 = (accountability) =>
// TODO Check leaf emoji.
`Day 21\n
Wow! You've now been at this for 3 weeks! That's absolutely outstanding. I'd buy you a Pizza to celebrate, but we're all about healthy coping mechanisms and so unfortunately, you get this lettuce leaf instead. :leaf:\n
In particular, how are you feeling now that you've been committing to these practices? Do you feel more in control of your emotions?
`;
const accountabilityTotalMessage28 = (accountability) =>
`Day 28\n
You my four-legged friend, have officially been committing to this process for around 4 weeks, which equates to around a month, which means you're an absolute superstar!\n
Is it weird to think that you've posted a month's worth of ${accountability} posts? Well, it shouldn't because although it takes around 90 days to overcome porn addiction, even after you've overcome your porn addiction you will still need to continue meditating daily and working on your mental health.\n
It's a bit like healthy eating. Just because you eat healthily for a month, doesn't mean that it allows you the opportunity to feast on McDonalds the next day.\n
Consistency is key and with each post you make, you are proving to yourself that your mental health comes first. :heart:
`;
const accountabilityTotalMessage35 = (accountability) =>
`Day 35\n
You son-of-a-gun, you made it to week 5! *happy tears pursue*\n
I am speechless. What you have done is beyond phenomenal and that this point, I imagine nothing I say can disturb or break your commitment to your mental health.\n
Not only are you an incredible role model, however what you've achieved is outstanding.\n
You are strong and beautiful.
`;
const accountabilityTotalMessage42 = (accountability) =>
`Day 42\n
So, you're technically six weeks in.\n
At this point I can start trolling you, because my gosh. You're like a bloody machine. You really don't stop, do you?\n
Of course, you know who you are. You know what you're doing. 
`;
const accountabilityTotalMessage49 = (accountability) => 
`Day 49\n
Lucky 7.\n
You know, it's weird to think that at one point in your life you were 7 years' old.\n
Well, much like that distant past, this is much what it's going to feel like once you're no longer addicted to porn.
`;


const automatedTotalAccountability = async (client, dbUser, discordUser) => {
  try {
    const accountabilityChannel = client.channels.get(process.env.ACCOUNTABILITY_CHANNEL_ID);
    const accountabilityMessageCount = await knex('accountability_messages').where('db_users_id', dbUser.id).count();

    const count = parseInt(accountabilityMessageCount[0].count);
    switch(count) {
      case 1:  sendMessageHelper(discordUser, accountabilityTotalMessage1(accountabilityChannel),  'automatedTotalAccountability'); break;
      case 2:  sendMessageHelper(discordUser, accountabilityTotalMessage2(accountabilityChannel),  'automatedTotalAccountability'); break;
      case 3:  sendMessageHelper(discordUser, accountabilityTotalMessage3(accountabilityChannel),  'automatedTotalAccountability'); break;
      case 4:  sendMessageHelper(discordUser, accountabilityTotalMessage4(accountabilityChannel),  'automatedTotalAccountability'); break;
      case 5:  sendMessageHelper(discordUser, accountabilityTotalMessage5(accountabilityChannel),  'automatedTotalAccountability'); break;
      case 6:  sendMessageHelper(discordUser, accountabilityTotalMessage6(accountabilityChannel),  'automatedTotalAccountability'); break;
      case 7:  sendMessageHelper(discordUser, accountabilityTotalMessage7(accountabilityChannel),  'automatedTotalAccountability'); break;
      case 10: sendMessageHelper(discordUser, accountabilityTotalMessage10(accountabilityChannel), 'automatedTotalAccountability'); break;
      case 14: sendMessageHelper(discordUser, accountabilityTotalMessage14(accountabilityChannel), 'automatedTotalAccountability'); break;
      case 21: sendMessageHelper(discordUser, accountabilityTotalMessage21(accountabilityChannel), 'automatedTotalAccountability'); break;
      case 28: sendMessageHelper(discordUser, accountabilityTotalMessage28(accountabilityChannel), 'automatedTotalAccountability'); break;
      case 35: sendMessageHelper(discordUser, accountabilityTotalMessage35(accountabilityChannel), 'automatedTotalAccountability'); break;
      case 42: sendMessageHelper(discordUser, accountabilityTotalMessage42(accountabilityChannel), 'automatedTotalAccountability'); break;
      case 49: sendMessageHelper(discordUser, accountabilityTotalMessage49(accountabilityChannel), 'automatedTotalAccountability'); break;
      default: sendMessageHelper(discordUser, `Day ${count} :D`, 'automatedTotalAccountability'); break;
      
    } 
  } catch(error) {
    console.log(`automatedTotalAccountability - ${error}`);
  }
}

module.exports = automatedTotalAccountability