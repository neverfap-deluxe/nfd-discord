import { MessageEmbed, Client, ClientUser, User, TextChannel, PartialUser, Message } from 'discord.js';
import { generateTallyDates, generateHoursTillCountdown } from '../../../../util/time';

import knex from '../../../../util/knex';
import logger from '../../../../util/logger';
import { getChannel } from '../../../../util/util';
import { DBUser, NFDChannelType } from '../../../../types';

const message1 = (discordUser: User | PartialUser, accountabilityChannel: TextChannel, hoursTillCountdown: string) => new MessageEmbed().setTitle(`We just hit our 1st emoji react for today! Only ${hoursTillCountdown} to go!`).setDescription(
`<@${discordUser}> just posted our first <#${accountabilityChannel}> react for today! Hooray! :grin:`
);
const message100 = (discordUser: User | PartialUser, accountabilityChannel: TextChannel, hoursTillCountdown: string) => new MessageEmbed().setTitle(`We just hit 100 emoji reacts for today! Only ${hoursTillCountdown} to go!`).setDescription(
`We just reached 100 emoji reacts in <#${accountabilityChannel}>! Thank you <@${discordUser}> for the 100th one! :smile:`
);
const message200 = (_discordUser: User | PartialUser, accountabilityChannel: TextChannel, hoursTillCountdown: string) => new MessageEmbed().setTitle(`We just hit 200 emoji reacts for today! Only ${hoursTillCountdown} to go!`).setDescription(
`OMG 200 emoji reacts in <#${accountabilityChannel}>! What a time to be alive! :white_sun_rain_cloud:`
);
const message300 = (_discordUser: User | PartialUser, accountabilityChannel: TextChannel, hoursTillCountdown: string) => new MessageEmbed().setTitle(`We just hit 300 emoji reacts for today! Only ${hoursTillCountdown} to go!`).setDescription(
`I can't believe it but we reached 300 emoji reacts today in <#${accountabilityChannel}>! :yum:`
);
const message400 = (_discordUser: User | PartialUser, accountabilityChannel: TextChannel, hoursTillCountdown: string) => new MessageEmbed().setTitle(`We just hit 400 emoji reacts for today! Only ${hoursTillCountdown} to go!`).setDescription(
`Did someone just order 400 emoji reacts in <#${accountabilityChannel}>!?!??!! :pizza:`
);
const message500 = (_discordUser: User | PartialUser, accountabilityChannel: TextChannel, hoursTillCountdown: string) => new MessageEmbed().setTitle(`We just hit 500 emoji reacts for today! Only ${hoursTillCountdown} to go!`).setDescription(
`We're up to 500 emoji reacts in <#${accountabilityChannel}>! Wowweee!!!! :stuck_out_tongue_winking_eye:`
);
const message600 = (_discordUser: User | PartialUser, accountabilityChannel: TextChannel, hoursTillCountdown: string) => new MessageEmbed().setTitle(`We just hit 600 emoji reacts for today! Only ${hoursTillCountdown} to go!`).setDescription(
`It looks like we have 600 emoji reacts in <#${accountabilityChannel}>! How on earth did we do it! :innocent:`
);
const message700 = (_discordUser: User | PartialUser, accountabilityChannel: TextChannel, hoursTillCountdown: string) => new MessageEmbed().setTitle(`We just hit 700 emoji reacts for today! Only ${hoursTillCountdown} to go!`).setDescription(
`OMFG 700 emoji reacts in <#${accountabilityChannel}>! Surely I'm halucinating right now! :rainbow:`
);
const message800 = (_discordUser: User | PartialUser, accountabilityChannel: TextChannel, hoursTillCountdown: string) => new MessageEmbed().setTitle(`We just hit 800 emoji reacts for today! Only ${hoursTillCountdown} to go!`).setDescription(
`The database is telling me that we're currently at 800 emoji reacts in <#${accountabilityChannel}> for today! WTF! :neutral_face:`
);
const message900 = (_discordUser: User | PartialUser, accountabilityChannel: TextChannel, hoursTillCountdown: string) => new MessageEmbed().setTitle(`We just hit 900 emoji reacts for today! Only ${hoursTillCountdown} to go!`).setDescription(
`Could it be!?!?! Obviously, because this is an automated message and I'm the all-knowing all-seeing bot, but we just hit 900 emoji reacts in <#${accountabilityChannel}>! :game_die:`
);
const message1000 = (discordUser: User | PartialUser, accountabilityChannel: TextChannel, hoursTillCountdown: string) => new MessageEmbed().setTitle(`We just hit 1000 emoji reacts for today! Only ${hoursTillCountdown} to go!`).setDescription(
`Thank you <@${discordUser}> for reacting with our 1000th emoji today in <#${accountabilityChannel}>! :bow:`
);
const message1100 = (_discordUser: User | PartialUser, accountabilityChannel: TextChannel, hoursTillCountdown: string) => new MessageEmbed().setTitle(`We just hit 1100 emoji reacts for today! Only ${hoursTillCountdown} to go!`).setDescription(
`Wow! 1100 emojis reacted with today in <#${accountabilityChannel}>! You amazing people really have to stop hehe :doughnut:`
);
const message1200 = (_discordUser: User | PartialUser, accountabilityChannel: TextChannel, hoursTillCountdown: string) => new MessageEmbed().setTitle(`We just hit 1200 emoji reacts for today! Only ${hoursTillCountdown} to go!`).setDescription(
`I actually can't believe it! 1200 emoji reacts in <#${accountabilityChannel}>, did I just die and go to heaven!?!?! :star2:`
);
const message1300 = (_discordUser: User | PartialUser, accountabilityChannel: TextChannel, hoursTillCountdown: string) => new MessageEmbed().setTitle(`We just hit 1300 emoji reacts for today! Only ${hoursTillCountdown} to go!`).setDescription(
`Surely this is just an illusion... 1300 emoji reacts in <#${accountabilityChannel}> and counting! :stuck_out_tongue_closed_eyes:`
);
const message1400 = (_discordUser: User | PartialUser, accountabilityChannel: TextChannel, hoursTillCountdown: string) => new MessageEmbed().setTitle(`We just hit 1400 emoji reacts for today! Only ${hoursTillCountdown} to go!`).setDescription(
`We did it folks! We hit 1400 emoji reacts in <#${accountabilityChannel}> and I haven't written anymore of these messages! Well done! :trophy:`
);

const sendReactUpdate = async (
  count: number,
  dailyMilestonesChannel: TextChannel,
  discordUser: User | PartialUser,
  accountabilityChannel: TextChannel,
  hoursTillCountdown: string
): Promise<Message| void> => {
  switch(count) {
    case 1:    {
      const msg = await dailyMilestonesChannel.send(message1(discordUser, accountabilityChannel, hoursTillCountdown));
      return msg;
    }
    case 100:  {
      const msg = await dailyMilestonesChannel.send(message100(discordUser, accountabilityChannel, hoursTillCountdown));
      return msg;
    }
    case 200:  {
      const msg = await dailyMilestonesChannel.send(message200(discordUser, accountabilityChannel, hoursTillCountdown));
      return msg;
    }
    case 300:  {
      const msg = await dailyMilestonesChannel.send(message300(discordUser, accountabilityChannel, hoursTillCountdown));
      return msg;
    }
    case 400:  {
      const msg = await dailyMilestonesChannel.send(message400(discordUser, accountabilityChannel, hoursTillCountdown));
      return msg;
    }
    case 500:  {
      const msg = await dailyMilestonesChannel.send(message500(discordUser, accountabilityChannel, hoursTillCountdown));
      return msg;
    }
    case 600:  {
      const msg = await dailyMilestonesChannel.send(message600(discordUser, accountabilityChannel, hoursTillCountdown));
      return msg;
    }
    case 700:  {
      const msg = await dailyMilestonesChannel.send(message700(discordUser, accountabilityChannel, hoursTillCountdown));
      return msg;
    }
    case 800:  {
      const msg = await dailyMilestonesChannel.send(message800(discordUser, accountabilityChannel, hoursTillCountdown));
      return msg;
    }
    case 900:  {
      const msg = await dailyMilestonesChannel.send(message900(discordUser, accountabilityChannel, hoursTillCountdown));
      return msg;
    }
    case 1000: {
      const msg = await dailyMilestonesChannel.send(message1000(discordUser, accountabilityChannel, hoursTillCountdown));
      return msg;
    }
    case 1100: {
      const msg = await dailyMilestonesChannel.send(message1100(discordUser, accountabilityChannel, hoursTillCountdown));
      return msg;
    }
    case 1200: {
      const msg = await dailyMilestonesChannel.send(message1200(discordUser, accountabilityChannel, hoursTillCountdown));
      return msg;
    }
    case 1300: {
      const msg = await dailyMilestonesChannel.send(message1300(discordUser, accountabilityChannel, hoursTillCountdown));
      return msg;
    }
    case 1400: {
      const msg = await dailyMilestonesChannel.send(message1400(discordUser, accountabilityChannel, hoursTillCountdown));
      return msg;
    }
  }
}

const reactTallyUpdate = async (client: Client, db_user: DBUser, discordUser: User | PartialUser) => {
  try {
    const { startOfTally, endOfTally } = generateTallyDates();
    const hoursTillCountdown: string = generateHoursTillCountdown();

    const accountabilityChannel: TextChannel = await getChannel(client, NFDChannelType.Accountability_Accountability);
    const dailyMilestonesChannel: TextChannel = await getChannel(client, NFDChannelType.Accountability_DailyMilestones);

    const accountabilityMessageCount = await knex('accountability_reacts').whereBetween('created_at', [startOfTally.toDate(), endOfTally.toDate()]).count();
    const count = parseInt(accountabilityMessageCount[0].count as string);

    if (count <= 1400) {
      await sendReactUpdate(count, dailyMilestonesChannel, discordUser, accountabilityChannel, hoursTillCountdown);
    }

  } catch(error) {
    const juliusReade: ClientUser | null = client.user;
    // await juliusReade?.send(`reactTallyUpdate - ${discordUser.username} - ${error}`);
    logger.error(`reactTallyUpdate - ${discordUser.username} - ${error}`);
    throw new Error(`reactTallyUpdate - ${discordUser.username} - ${error}`);
  }
}

export default reactTallyUpdate;
