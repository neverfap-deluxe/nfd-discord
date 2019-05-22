const knex =  require('../../db/knex');

const commitmentTallyMessage1 = (/* accountability */) =>
`Although it may not seem like it, what you just did was huge. You committed to your mental health and that's more than anyone can ask for. :heart:\n
Thank you for your commitment, and remember that we're all here to help. :grin:
`;
const commitmentTallyMessage2 = (accountability) =>
`Well, well, well. You cheeky little thing! You posted again in ${accountability}!\n
In particular, how is your meditation going? If you've read the rules for ${accountability}, you will have noticed that meditation is mandatory, and for very good reason! If you haven't yet had the chance, please type and enter \`!accountability\` to learn the rules.\n 
Put simply, if you don't meditate you will not succeed. That's why we have such a huge focus on developing our ability to meditate. For more information about meditation, as well as information on the NeverFap Deluxe please check out the website! :earth_asia:\n
https://neverfapdeluxe.com/
`;
const commitmentTallyMessage3 = (accountability) =>
`Look at you go! You're absolute ${accountability} pro now! (I mean, obviously not as good as my dear self *ahem*)\n
The fact that you've consciously decided to commit up until this point is absolutely remarkable. For a lot of people, this is their first time consciously committing to their mental health, and I think what you're doing is pretty awesome. Stay strong, continue practicing the exercises, and one day you will become entirely PMO free.\n
Oh, you lovely thing ^^. *hug*
`;
const commitmentTallyMessage4 = (accountability) =>
`Oh wow! Another post into ${accountability}! I may have to give you some sort of award for being so awe-inspiring!\n
Truth be told, I've actually been feeling a little sad recently. I had a bit of a fight with my bot girlfriend and she hasn't been returning my calls. But that's okay, because I have a very important purpose in life, which is to help you overcome your porn addiction!\n
I believe in you! :grin:
`;
const commitmentTallyMessage5 = (accountability) =>
`Woah! Another delicious entry into the zany world of ${accountability}! I honestly didn't know that you had it in you to keep going on this journey like an absolute BOSS (although what does a silly bot like me know?!)\n
To be quite honest, very few people manage to get this far and so statistically speaking, you are WELL ahead of the pack. But according to my tracky thingy, this is only day 5 of 90 so you're still a young grasshopper in my somewhat pixelated bot eyes ^^.\n
Regardless, I think you're great and you continue to be absolutely amazing to work with. <3
`;
const commitmentTallyMessage6 = (accountability) =>
`As a bot I don't get much contact with the outside world, and so liasing with you is my absolute favourite part of the day!\n
It's great to see you grow and furthermore, contribute to the community with the wonderful things you commit to each day in order to improve your mental health. Not to mention, I've also patched up things with my bot girlfriend and we're super happy and in love again <3.\n
If I can do it, so can you buddy! :smile:
`;
const commitmentTallyMessage7 = (accountability) =>
`The weird thing is that as a bot, I have, like, a database? Actually, it's not that weird come to think about it (given I'm actually a self-aware bot, and not a human clearly writing this hehe).\n
And my database is telling me that you've been doing this for at least one entire week! Holy cow! You did it buddy! You absolute bloody champ! I'm so flippin' proud of you!\n
Now that you have a hang of the ropes, I'll be messaging you less frequently *sad reacts*. Ultimately, I want you to learn to take this journey on your own (at least partially, for now), and boy, I know you've got this :grin:\n
Of course, you'll still receieve special messages at key milestones, so don't fret! We will always be friends forever :D
`;
const commitmentTallyMessage10 = (accountability) =>
`Can you believe that you've been doing this for 10 whole days!? That's a rediculous amount of time, if you consider that prior to this effort you may not have been comitting at all, what you're doing here really is something special.\n
I hope meditation has proven key in helping you develop control over your mind and emotions, and I certainly know that I wouldn't be anywhere near as functional without it (obviously, bots need to look after their mental health too).\n
Just remember, consistency is your key out of this mess. If you remain consistent, you win the race. It really is that simple. :squid:
`;
const commitmentTallyMessage14 = (accountability) =>
`Well, you've been doing this for 2 weeks now and I would say that's an amazingly valiant effort. Well done, soldier.\n
Seriously, you're now in the top 5% of the people participating in this program, which means I have full faith in your ability to do this. The main thing to look out for is whether you feel as if you're able to better cope with your mind, thoughts, emotions. Essentially, that's what healthy coping mechanisms are designed to do, help you cope like an absolute champ, without resulting in self-harmful behaviours such as watching porn.\n
Regardless, you're excellent :D 
`;
const commitmentTallyMessage21 = (accountability) =>
`Wow! You've now been at this for 3 weeks now! That's absolutely outstanding! I'd buy you a Pizza to celebrate, but we're all about healthy coping mechanisms and so unfortunately, you get this lettuce leaf instead. :leaves:\n
In particular, how are you feeling now that you've been committing to these practices for a few weeks now? Do you feel more in control of your emotions? Do you want to just sell everything and give it all to Julius Reade?\n
Yes. You have put too much faith into me, and I am now in control of your mind. You will do everything I say. I want you to proceed to sell the house and give all the dollars to Julius Reade. Yes. Give it all! Give it all to me!!! Muahahahaa...\n
I'm just joshin' around. You're doing great, kid.
`;
const commitmentTallyMessage28 = (accountability) =>
`You my four-legged friend, have officially been committing to this process for around 4 weeks, which equates to around a month, which means you're an bloody superstar!\n
Is it weird to think that you've posted a month's worth of ${accountability} posts? Well, it shouldn't because although it takes around 90 days to overcome porn addiction, even after you've overcome your porn addiction you will still need to continue meditating daily and working on your mental health.\n
It's a bit like healthy eating. Just because you eat healthily for a month, doesn't mean that it allows you the opportunity to feast on McDonalds the next day.\n
Consistency is key and with each post you make, you are proving to yourself that your mental health comes first. :heart:
`;
const commitmentTallyMessage35 = (accountability) =>
`You son-of-a-gun, you made it to 5 full-weeks of committing to your mental health! *happy tears pursue*\n
I am speechless. What you have done is beyond phenomenal and at this point, I imagine nothing I say can disturb or break your commitment to your mental health.\n
Not only are you an incredible role model, however what you've managed to achieve is beyond outstanding.\n
You are strong and beautiful, and don't you ever forget that.
`;
const commitmentTallyMessage42 = (accountability) =>
`So, you're technically six weeks in.\n
At this point I'm pretty sure I can start trolling you, because my gosh, you're like a bloody machine! You really don't stop, do you?\n
Seriously. You should actually stop, otherwise I'll have to keep writing these god-damn milestone messages and it's really just not fair.\n
You suck.
`;
const commitmentTallyMessage49 = (accountability) => 
`Lucky 7.\n
You know, it's weird to think that at one point in your life you were 7 years old.\n
The reason why I bring this up is because much like being 7 years old, your porn addiction at some point will feel like a very distant memory that will become vague to you.\n
Which is really what we're aiming for, a life where porn is not a part of your life in any capacity. Where you don't think about porn, where you are in full control of your emotions and you will no longer have to come here anymore.\n
Well, you're doing great kid. You truly are.
`;
const commitmentTallyMessage50 = (accountability) => 
`You did it.\n
I don't know how, but you actually made 50 days.\n
Personally, I'm astonished because it must mean I'm doing something right with this program, and thank you so much for entrusting in the process and giving me a chance to help you.\n
Honestly, thank you from the bottom of my heart. :heart:\n
*beep boop beep beep*
`;

const automatedCommitmentTally = async (client, logger, dbUser, discordUser, juliusReade) => {
  try {
    const accountabilityChannel = client.channels.get(process.env.ACCOUNTABILITY_CHANNEL_ID);
    const accountabilityMessageCount = await knex('accountability_messages').where('db_users_id', dbUser.id).count();
    
    const count = parseInt(accountabilityMessageCount[0].count);
    switch(count) {
      case 1: {
        const msg = await discordUser.send(`Day ${count}\n${commitmentTallyMessage1(accountabilityChannel)}`);
        logger.info(`Sent channel message: ${msg.id} - automatedCommitmentTally`);
        break;
      }
      case 2: {
        const msg = await discordUser.send(`Day ${count}\n${commitmentTallyMessage2(accountabilityChannel)}`);
        logger.info(`Sent channel message: ${msg.id} - automatedCommitmentTally`);
        break;
      }
      case 3: {
        const msg = await discordUser.send(`Day ${count}\n${commitmentTallyMessage3(accountabilityChannel)}`);
        logger.info(`Sent channel message: ${msg.id} - automatedCommitmentTally`);
        break;
      }
      case 4: {
        const msg = await discordUser.send(`Day ${count}\n${commitmentTallyMessage4(accountabilityChannel)}`);
        logger.info(`Sent channel message: ${msg.id} - automatedCommitmentTally`);
        break;
      }
      case 5: {
        const msg = await discordUser.send(`Day ${count}\n${commitmentTallyMessage5(accountabilityChannel)}`);
        logger.info(`Sent channel message: ${msg.id} - automatedCommitmentTally`);
        break;
      }
      case 6: {
        const msg = await discordUser.send(`Day ${count}\n${commitmentTallyMessage6(accountabilityChannel)}`);
        logger.info(`Sent channel message: ${msg.id} - automatedCommitmentTally`);
        break;
      }
      case 7: {
        const msg = await discordUser.send(`Day ${count}\n${commitmentTallyMessage7(accountabilityChannel)}`);
        logger.info(`Sent channel message: ${msg.id} - automatedCommitmentTally`);
        break;
      }
      case 10: {
        const msg = await discordUser.send(`Day ${count}\n${commitmentTallyMessage10(accountabilityChannel)}`);
        logger.info(`Sent channel message: ${msg.id} - automatedCommitmentTally`);
        break;
      }
      case 14: {
        const msg = await discordUser.send(`Day ${count}\n${commitmentTallyMessage14(accountabilityChannel)}`);
        logger.info(`Sent channel message: ${msg.id} - automatedCommitmentTally`);
        break;
      }
      case 21: {
        const msg = await discordUser.send(`Day ${count}\n${commitmentTallyMessage21(accountabilityChannel)}`);
        logger.info(`Sent channel message: ${msg.id} - automatedCommitmentTally`);
        break;
      }
      case 28: {
        const msg = await discordUser.send(`Day ${count}\n${commitmentTallyMessage28(accountabilityChannel)}`);
        logger.info(`Sent channel message: ${msg.id} - automatedCommitmentTally`);
        break;
      }
      case 35: {
        const msg = await discordUser.send(`Day ${count}\n${commitmentTallyMessage35(accountabilityChannel)}`);
        logger.info(`Sent channel message: ${msg.id} - automatedCommitmentTally`);
        break;
      }
      case 42: {
        const msg = await discordUser.send(`Day ${count}\n${commitmentTallyMessage42(accountabilityChannel)}`);
        logger.info(`Sent channel message: ${msg.id} - automatedCommitmentTally`);
        break;
      }
      case 49: {
        const msg = await discordUser.send(`Day ${count}\n${commitmentTallyMessage49(accountabilityChannel)}`);
        logger.info(`Sent channel message: ${msg.id} - automatedCommitmentTally`);
        break;
      }
      case 50: {
        const msg = await discordUser.send(`Day ${count}\n${commitmentTallyMessage50(accountabilityChannel)}`);
        logger.info(`Sent channel message: ${msg.id} - automatedCommitmentTally`);
        break;
      }
      default: {
        const msg = await discordUser.send(`Day ${count} :D`);
        logger.info(`Sent channel message: ${msg.id} - automatedCommitmentTally`);
        break;
      }
    }

    await juliusReade.send(`${discordUser.username} - Day ${count} :D`);
    logger.info(`Sent julius message for ${discordUser.username} - Day ${count} :D`);

  } catch(error) {
    await juliusReade.send(`${discordUser.username} - automatedCommitmentTally - ${error}`);
    logger.error(`${discordUser.username} - automatedCommitmentTally - ${error}`);
    throw new Error(`${discordUser.username} - automatedCommitmentTally - ${error}`);
  }
}

module.exports = automatedCommitmentTally