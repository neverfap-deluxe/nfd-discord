const _ = require('lodash');
const { RichEmbed } = require('discord.js');

const {
  generateRandomNumber,
} = require('../../util/util');

const generalMessage1  = () => new RichEmbed().setTitle("#general advice").setDescription(
  `Just a friendly reminder from the NeverFap Deluxe Bot to stay positive! Otherwise, I may have to kill you ^^. :smile:`);
const generalMessage2  = () => new RichEmbed().setTitle("#general advice").setDescription(
  `Empathy, love, kindness and gratitude are your friends. Treat yourself as you would others and beautiful things will follow. :dancer:`);
const generalMessage3  = () => new RichEmbed().setTitle("#general advice").setDescription(
  `Your commitment to the process is the only thing that matters. Once you lose that commitment, you lose absolutely everything. :information_desk_person:`);
const generalMessage4  = () => new RichEmbed().setTitle("#general advice").setDescription(
  `The process truly is your best friend. It will always be there to assist you, even if you abuse it or neglect it. :hatching_chick:`);
const generalMessage5  = () => new RichEmbed().setTitle("#general advice").setDescription(
  `Wondering what the NeverFap Deluxe Bot can do for you? Type \`!commands\` into the channel and press enter to learn what functions my beautiful self can perform. :keyboard:`);
const generalMessage6  = () => new RichEmbed().setTitle("#general advice").setDescription(
  `Meditation allows you to develop control over your emotions, and you are not effective unless if you have control over your emotions. :pensive:`);
const generalMessage7  = () => new RichEmbed().setTitle("#general advice").setDescription(
  `Wanting to learn more about the whole porn addiction recovery process? Please check out the NeverFap Deluxe website! https://neverfapdeluxe.com/ :rainbow:`);
const generalMessage8  = () => new RichEmbed().setTitle("#general advice").setDescription(
  `Have you been craving the taste of some additional mental health practices? Thankfully, there's a whole section of them at https://neverfapdeluxe.com/practices :watermelon:`);
const generalMessage9  = () => new RichEmbed().setTitle("#general advice").setDescription(
  `New to the whole porn recovery thing? Check out the NeverFap Deluxe 7 Day Kickstarter! https://neverfapdeluxe.com/seven-day-neverfap-deluxe-kickstarter :boom:`);
const generalMessage10 = () => new RichEmbed().setTitle("#general advice").setDescription(
  `Looking for a comprehensive guide on how to overcome porn addiction? Well, I wrote one! Check it out https://neverfapdeluxe.com/guide :earth_asia:`);
const generalMessage11 = () => new RichEmbed().setTitle("#general advice").setDescription(
  `Life only ever gets harder. So the more we can focus on preparing for the future, the easier it's going to be moving forward. :male_dancer:`);
const generalMessage12 = () => new RichEmbed().setTitle("#general advice").setDescription(
  `Porn is not a solution to your problems. It never has been and it never will be. :fearful:`);
const generalMessage13 = () => new RichEmbed().setTitle("#general advice").setDescription(
  `It takes people five years on average to overcome porn addiction, because they spend a good four and a half of those years not committing. :disappointed:`);
const generalMessage14 = () => new RichEmbed().setTitle("#general advice").setDescription(
  `Everytime you give up your commitment, you extend your recovery process by 90 days. Please don't forget that consistency really does matter! :slight_smile:`);
const generalMessage15 = () => new RichEmbed().setTitle("#general advice").setDescription(
  `Ultimately, you make your life as difficult or as easy as you want it. There are processes there for you to make it easy, just as there are processes for you to make it difficult. :station:`);
const generalMessage16 = () => new RichEmbed().setTitle("#general advice").setDescription(
  `Porn isn't the reason why you're an addict. You're an addict because you haven't developed control over your mind. Thankfully, it's a skill you can develop through practice! :squid:`);
const generalMessage17 = () => new RichEmbed().setTitle("#general advice").setDescription(
  `Your mind will always believe and seek what it wants to. That is, unless if you learn to actively relax and calm it down. :innocent:`);
const generalMessage18 = () => new RichEmbed().setTitle("#general advice").setDescription(
  `Your brain doesn’t know what it wants. It only knows what it feels, and if you're always feeling anxious and nervous, then it will pursue those kinds of behaviours. :comet:`);
const generalMessage19 = () => new RichEmbed().setTitle("#general advice").setDescription(
  `You can't force self-control, however you can make it very easy to be in-control by letting go and remaining calm. :smile:`);
const generalMessage20 = () => new RichEmbed().setTitle("#general advice").setDescription(
  `Don't focus on the days. Focus on the actions that are going to help you get through those days. They're the things that matter at the end of the day. :construction_worker:`);
const generalMessage21 = () => new RichEmbed().setTitle("#general advice").setDescription(
  `Relapse isn't about PMO. Relapse is anything you do that negatively impacts your mental health, whether it be choosing to neglect the process or choosing to neglect yourself. :heart:`);
const generalMessage22 = () => new RichEmbed().setTitle("#general advice").setDescription(
  `When you neglect the process, you neglect yourself. You distrust the process, you lose. It's that le simple! :bread:`);
const generalMessage23 = () => new RichEmbed().setTitle("#general advice").setDescription(
  `The more time you spend doing something, the better you're going to get at it. Arnold Schwarzenegger didn't get ripped within a day. It took years of hard work, and your 90 day process is no different. :lifter:`);
const generalMessage24 = () => new RichEmbed().setTitle("#general advice").setDescription(
  `Blame isn’t a constructive method of self-improvement. Processes on the other hand are. :date:`);
const generalMessage25 = () => new RichEmbed().setTitle("#general advice").setDescription(
  `Cravings don’t just appear out of thin air. Cravings are the result of an uncalm mind. :sweat:`);

// TODO: Emojis
const generalMessage26 = () => new RichEmbed().setTitle("#general advice").setDescription(
  `When your mind is uncalm you lose focus. Which results in losing balance, which inevitably results in relapse. Focus on your mental health and everything else will follow. :yum:`);
const generalMessage27 = () => new RichEmbed().setTitle("#general advice").setDescription(
  `Focus your efforts on developing processes as opposed to rationalisations. It's better to thrive than be paralyzed in an endless string of indecision. :thinking:`);
const generalMessage28 = () => new RichEmbed().setTitle("#general advice").setDescription(
  `Developing control over your mind is important because it teaches your brain what it actually needs, as opposed to what it desires. :candy:`);
const generalMessage29 = () => new RichEmbed().setTitle("#general advice").setDescription(
  `Make it your mission throughout the day to remain calm and collected. Oh, and deliriously sexy as well. :herb:`);
const generalMessage30 = () => new RichEmbed().setTitle("#general advice").setDescription(
  `Until you learn to develop control over your mind via healthy coping mechanisms such as meditation, you're more-or-less leaving your recovery to chance. :heart_decoration:`);
const generalMessage31 = () => new RichEmbed().setTitle("#general advice").setDescription(
  `The porn recovery process takes approximately 90 days. That's probably also the amount of time you've spent watching porn up until now. :date:`);
const generalMessage32 = () => new RichEmbed().setTitle("#general advice").setDescription(
  `You won't realise how special it was until you lose it. Once your commitment is gone, it truly is ...gone. Cherish it and remember to never let go. :relaxed:`);                              
const generalMessage33 = () => new RichEmbed().setTitle("#general advice").setDescription(
  `When you think about it Healthy Coping Mechanisms are a very positive form of self-love, and so feel free to love yourself daily. :revolving_hearts:`);
const generalMessage34 = () => new RichEmbed().setTitle("#general advice").setDescription(
  `If you need help, then please ask one of our lovely members. We're all more than happy to assist and show you the way of the NeverFap Deluxe. :family_mwgb:`);
// const generalMessage35 = () => new RichEmbed().setTitle("#general advice").setDescription(
//   ``);
// const generalMessage36 = () => new RichEmbed().setTitle("#general advice").setDescription(
//   ``);
// const generalMessage37 = () => new RichEmbed().setTitle("#general advice").setDescription(
//   ``);
// const generalMessage38 = () => new RichEmbed().setTitle("#general advice").setDescription(
//   ``);
// const generalMessage39 = () => new RichEmbed().setTitle("#general advice").setDescription(
//   ``);
// const generalMessage40 = () => new RichEmbed().setTitle("#general advice").setDescription(
//   ``);


const automatedGeneralMessages = async (client, logger, juliusReade) => {
  try {
    const generalChannel = client.channels.get(process.env.RECOVERY_CHANNEL_ID);
    const lastMessageID = _.get(generalChannel, 'lastMessageID');
    if (lastMessageID) {
      const lastMessage = await generalChannel.fetchMessage(lastMessageID);
      if (_.get(lastMessage, 'author.id') !== process.env.NEVERFAP_DELUXE_BOT_ID) {
        const count = generateRandomNumber(1, 34);

        switch(count) {
          case 1: {
            const msg = await generalChannel.send(generalMessage1());
            logger.info(`Sent channel message: ${msg.id} - automatedGeneralMessages`);
            break;
          }
          case 2: {
            const msg = await generalChannel.send(generalMessage2());
            logger.info(`Sent channel message: ${msg.id} - automatedGeneralMessages`);
            break;
          }
          case 3: {
            const msg = await generalChannel.send(generalMessage3());
            logger.info(`Sent channel message: ${msg.id} - automatedGeneralMessages`);
            break;
          }
          case 4: {
            const msg = await generalChannel.send(generalMessage4());
            logger.info(`Sent channel message: ${msg.id} - automatedGeneralMessages`);
            break;
          }
          case 5: {
            const msg = await generalChannel.send(generalMessage5());
            logger.info(`Sent channel message: ${msg.id} - automatedGeneralMessages`);
            break;
          }
          case 6: {
            const msg = await generalChannel.send(generalMessage6());
            logger.info(`Sent channel message: ${msg.id} - automatedGeneralMessages`);
            break;
          }
          case 7: {
            const msg = await generalChannel.send(generalMessage7());
            logger.info(`Sent channel message: ${msg.id} - automatedGeneralMessages`);
            break;
          }
          case 8: {
            const msg = await generalChannel.send(generalMessage8());
            logger.info(`Sent channel message: ${msg.id} - automatedGeneralMessages`);
            break;
          }
          case 9: {
            const msg = await generalChannel.send(generalMessage9());
            logger.info(`Sent channel message: ${msg.id} - automatedGeneralMessages`);
            break;
          }
          case 10:{
            const msg = await generalChannel.send(generalMessage10());
            logger.info(`Sent channel message: ${msg.id} - automatedGeneralMessages`);
            break;
          }
          case 11:{
            const msg = await generalChannel.send(generalMessage11());
            logger.info(`Sent channel message: ${msg.id} - automatedGeneralMessages`);
            break;
          }
          case 12:{
            const msg = await generalChannel.send(generalMessage12());
            logger.info(`Sent channel message: ${msg.id} - automatedGeneralMessages`);
            break;
          }
          case 13:{
            const msg = await generalChannel.send(generalMessage13());
            logger.info(`Sent channel message: ${msg.id} - automatedGeneralMessages`);
            break;
          }
          case 14:{
            const msg = await generalChannel.send(generalMessage14());
            logger.info(`Sent channel message: ${msg.id} - automatedGeneralMessages`);
            break;
          }
          case 15:{
            const msg = await generalChannel.send(generalMessage15());
            logger.info(`Sent channel message: ${msg.id} - automatedGeneralMessages`);
            break;
          }
          case 16:{
            const msg = await generalChannel.send(generalMessage16());
            logger.info(`Sent channel message: ${msg.id} - automatedGeneralMessages`);
            break;
          }
          case 17:{
            const msg = await generalChannel.send(generalMessage17());
            logger.info(`Sent channel message: ${msg.id} - automatedGeneralMessages`);
            break;
          }
          case 18:{
            const msg = await generalChannel.send(generalMessage18());
            logger.info(`Sent channel message: ${msg.id} - automatedGeneralMessages`);
            break;
          }
          case 19:{
            const msg = await generalChannel.send(generalMessage19());
            logger.info(`Sent channel message: ${msg.id} - automatedGeneralMessages`);
            break;
          }
          case 20:{
            const msg = await generalChannel.send(generalMessage20());
            logger.info(`Sent channel message: ${msg.id} - automatedGeneralMessages`);
            break;
          }
          case 21:{
            const msg = await generalChannel.send(generalMessage21());
            logger.info(`Sent channel message: ${msg.id} - automatedGeneralMessages`);
            break;
          }
          case 22:{
            const msg = await generalChannel.send(generalMessage22());
            logger.info(`Sent channel message: ${msg.id} - automatedGeneralMessages`);
            break;
          }
          case 23:{
            const msg = await generalChannel.send(generalMessage23());
            logger.info(`Sent channel message: ${msg.id} - automatedGeneralMessages`);
            break;
          }
          case 24:{
            const msg = await generalChannel.send(generalMessage24());
            logger.info(`Sent channel message: ${msg.id} - automatedGeneralMessages`);
            break;
          }
          case 25:{
            const msg = await generalChannel.send(generalMessage25());
            logger.info(`Sent channel message: ${msg.id} - automatedGeneralMessages`);
            break;
          }
          case 26:{
            const msg = await generalChannel.send(generalMessage26());
            logger.info(`Sent channel message: ${msg.id} - automatedGeneralMessages`);
            break;
          }
          case 27:{
            const msg = await generalChannel.send(generalMessage27());
            logger.info(`Sent channel message: ${msg.id} - automatedGeneralMessages`);
            break;
          }
          case 28:{
            const msg = await generalChannel.send(generalMessage28());
            logger.info(`Sent channel message: ${msg.id} - automatedGeneralMessages`);
            break;
          }
          case 29:{
            const msg = await generalChannel.send(generalMessage29());
            logger.info(`Sent channel message: ${msg.id} - automatedGeneralMessages`);
            break;
          }
          case 30:{
            const msg = await generalChannel.send(generalMessage30());
            logger.info(`Sent channel message: ${msg.id} - automatedGeneralMessages`);
            break;
          }
          case 31:{
            const msg = await generalChannel.send(generalMessage31());
            logger.info(`Sent channel message: ${msg.id} - automatedGeneralMessages`);
            break;
          }
          case 32:{
            const msg = await generalChannel.send(generalMessage32());
            logger.info(`Sent channel message: ${msg.id} - automatedGeneralMessages`);
            break;
          }
          case 33:{
            const msg = await generalChannel.send(generalMessage33());
            logger.info(`Sent channel message: ${msg.id} - automatedGeneralMessages`);
            break;
          }
          case 34:{
            const msg = await generalChannel.send(generalMessage34());
            logger.info(`Sent channel message: ${msg.id} - automatedGeneralMessages`);
            break;
          }
          default: 
            logger.error(`automatedGeneralMessages - generateRandomNumber - created an incorrect generator number - ${count}`);            
            throw new Error(`automatedGeneralMessages - generateRandomNumber - created an incorrect generator number - ${count}`);
        }
      }
    }
  } catch(error) {
    await juliusReade.send(`automatedGeneralMessages - ${error}`);
    logger.error(`automatedGeneralMessages - ${error}`);
    throw new Error(`automatedGeneralMessages - ${error}`);
  }
}


module.exports = automatedGeneralMessages;