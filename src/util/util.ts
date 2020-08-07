import { Client, Channel, TextChannel } from 'discord.js';
import { NFDChannelType } from '../types';
import { generateTallyDates } from './time';
import knex from './knex';

export const generateRandomNumber = (min: number, max: number): number => {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin + 1)) + newMin;
}

export const getNFDBotId = (): string => process.env.NEVERFAP_DELUXE_BOT_ID as string;

export const generateDelayValues = (): {
  onIntervalTenMinutesDelay: number;
  onIntervalOneHourDelay: number;
  onIntervalThreeHoursDelay: number;
  onIntervalFourHoursDelay: number;
  onIntervalFiveHoursDelay: number;
  onIntervalDayHalfDelay: number;
} => {
  if (process.env.NODE_ENV !== 'production') {
    return {
      onIntervalTenMinutesDelay: 1000 * 2, // every 2 seconds
      onIntervalOneHourDelay: 1000 * 3, // every 3 seconds
      onIntervalThreeHoursDelay: 1000 * 4, // every 4 seconds
      onIntervalFourHoursDelay: 1000 * 5, // every 5 seconds
      onIntervalFiveHoursDelay: 1000 * 6, // every 6 seconds
      onIntervalDayHalfDelay: 1000 * 10, // every 10 seconds
      // onIntervalDayDelay: 1000 * 10, // every 10 seconds
      // onIntervalWeekDelay: 1000 * 10, // every 10 seconds
    }
  }
  return {
    onIntervalTenMinutesDelay: 1000 * 60 * 10 * 1, // every ten minutes
    onIntervalOneHourDelay: 1000 * 60 * 60 * 1, // every one hour
    onIntervalThreeHoursDelay: 1000 * 60 * 60 * 3, // every four hours
    onIntervalFourHoursDelay: 1000 * 60 * 60 * 4, // every four hours
    onIntervalFiveHoursDelay: 1000 * 60 * 60 * 5, // every five hours
    onIntervalDayHalfDelay: 1000 * 60 * 60 * 12, // every 12 hours
    // onIntervalDayDelay: 1000 * 60 * 60 * 24, // every 24 hours
    // onIntervalWeekDelay: 1000 * 60 * 60 * 24 * 7, // every week
  }
}

export const isAccountabilityMessage = (content: string): boolean => content.includes("/") || content.includes("20") || content.includes("21") || content.includes("#accountability");

export const getChannel = async (client: Client, channelType: NFDChannelType): Promise<TextChannel> => {
  switch(channelType) {

    // START HERE
    case NFDChannelType.StartHere_Welcome: {
      const channel: Channel = await client.channels.fetch(process.env.STARTHERE_WELCOME as string);
      return channel as TextChannel;
    }
    case NFDChannelType.StartHere_ServerGuide: {
      const channel: Channel = await client.channels.fetch(process.env.STARTHERE_SERVERGUIDE as string);
      return channel as TextChannel;
    }
    case NFDChannelType.StartHere_WebsiteGuide: {
      const channel: Channel = await client.channels.fetch(process.env.STARTHERE_WEBSITEGUIDE as string);
      return channel as TextChannel;
    }
    case NFDChannelType.StartHere_Announcements: {
      const channel: Channel = await client.channels.fetch(process.env.STARTHERE_ANNOUNCEMENTS as string);
      return channel as TextChannel;
    }
    case NFDChannelType.StartHere_NeverFapDeluxePodcast: {
      const channel: Channel = await client.channels.fetch(process.env.STARTHERE_NEVERFAPDELUXEPODCAST as string);
      return channel as TextChannel;
    }
    case NFDChannelType.StartHere_HelpfulNeverFappers: {
      const channel: Channel = await client.channels.fetch(process.env.STARTHERE_HELPFULNEVERFAPPERS as string);
      return channel as TextChannel;
    }
    case NFDChannelType.StartHere_NewNeverFappers: {
      const channel: Channel = await client.channels.fetch(process.env.STARTHERE_NEWNEVERFAPPERS as string);
      return channel as TextChannel;
    }

    // RECOVERY CHAT
    case NFDChannelType.RecoveryChat_GeneralChat: {
      const channel: Channel = await client.channels.fetch(process.env.RECOVERYCHAT_GENERALCHAT as string);
      return channel as TextChannel;
    }
    case NFDChannelType.RecoveryChat_LetsAskJuliusAQuestion: {
      const channel: Channel = await client.channels.fetch(process.env.RECOVERYCHAT_LETSASKJULIUSAQUESTION as string);
      return channel as TextChannel;
    }
    case NFDChannelType.RecoveryChat_MentalHealthChat: {
      const channel: Channel = await client.channels.fetch(process.env.RECOVERYCHAT_MENTALHEALTHCHAT as string);
      return channel as TextChannel;
    }
    case NFDChannelType.RecoveryChat_PhilosophyChat: {
      const channel: Channel = await client.channels.fetch(process.env.RECOVERYCHAT_PHILOSOPHYCHAT as string);
      return channel as TextChannel;
    }
    case NFDChannelType.RecoveryChat_RecoveryChat: {
      const channel: Channel = await client.channels.fetch(process.env.RECOVERYCHAT_RECOVERYCHAT as string);
      return channel as TextChannel;
    }
    case NFDChannelType.RecoveryChat_MemeChat: {
      const channel: Channel = await client.channels.fetch(process.env.RECOVERYCHAT_MEMECHAT as string);
      return channel as TextChannel;
    }
    case NFDChannelType.RecoveryChat_MusicChat: {
      const channel: Channel = await client.channels.fetch(process.env.RECOVERYCHAT_MUSICCHAT as string);
      return channel as TextChannel;
    }
    case NFDChannelType.RecoveryChat_RantChat: {
      const channel: Channel = await client.channels.fetch(process.env.RECOVERYCHAT_RANTCHAT as string);
      return channel as TextChannel;
    }

    case NFDChannelType.RecoveryChat_ArtChat: {
      const channel: Channel = await client.channels.fetch(process.env.RECOVERYCHAT_ARTCHAT as string);
      return channel as TextChannel;
    }

    // ACCOUNTABILITY
    case NFDChannelType.Accountability_Accountability: {
      const channel: Channel = await client.channels.fetch(process.env.ACCOUNTABILITY_ACCOUNTABILITY as string);
      return channel as TextChannel;
    }
    case NFDChannelType.Accountability_AccountabilityRules: {
      const channel: Channel = await client.channels.fetch(process.env.ACCOUNTABILITY_ACCOUNTABILITYRULES as string);
      return channel as TextChannel;
    }
    case NFDChannelType.Accountability_FindAnAccountabilityPartner: {
      const channel: Channel = await client.channels.fetch(process.env.ACCOUNTABILITY_FINDANACCOUNTABILITYPARTNER as string);
      return channel as TextChannel;
    }
    case NFDChannelType.Accountability_VideoAccountability: {
      const channel: Channel = await client.channels.fetch(process.env.ACCOUNTABILITY_VIDEOACCOUNTABILITY as string);
      return channel as TextChannel;
    }
    case NFDChannelType.Accountability_MeditationJournal: {
      const channel: Channel = await client.channels.fetch(process.env.ACCOUNTABILITY_MEDITATIONJOURNAL as string);
      return channel as TextChannel;
    }
    case NFDChannelType.Accountability_ExerciseJournal: {
      const channel: Channel = await client.channels.fetch(process.env.ACCOUNTABILITY_EXERCISEJOURNAL as string);
      return channel as TextChannel;
    }
    case NFDChannelType.Accountability_HealthyEatingJournal: {
      const channel: Channel = await client.channels.fetch(process.env.ACCOUNTABILITY_HEALTHYEATINGJOURNAL as string);
      return channel as TextChannel;
    }
    case NFDChannelType.Accountability_ReadingJournal: {
      const channel: Channel = await client.channels.fetch(process.env.ACCOUNTABILITY_READINGJOURNAL as string);
      return channel as TextChannel;
    }
    case NFDChannelType.Accountability_RelapseJournal: {
      const channel: Channel = await client.channels.fetch(process.env.ACCOUNTABILITY_RELAPSEJOURNAL as string);
      return channel as TextChannel;
    }
    case NFDChannelType.Accountability_GratitudeJournal: {
      const channel: Channel = await client.channels.fetch(process.env.ACCOUNTABILITY_GRATITUDEJOURNAL as string);
      return channel as TextChannel;
    }
    case NFDChannelType.Accountability_DailyMilestones: {
      const channel: Channel = await client.channels.fetch(process.env.ACCOUNTABILITY_DAILYMILESTONES as string);
      return channel as TextChannel;
    }

    // ADMINISTRATION
    case NFDChannelType.Administration_ServerSuggestions: {
      const channel: Channel = await client.channels.fetch(process.env.ADMINISTRATION_SERVERSUGGESTIONS as string);
      return channel as TextChannel;
    }
    case NFDChannelType.Administration_HelpfulNeverFappersUnite: {
      const channel: Channel = await client.channels.fetch(process.env.ADMINISTRATION_HELPFULNEVERFAPPERSUNITE as string);
      return channel as TextChannel;
    }
    case NFDChannelType.Administration_BotCommands: {
      const channel: Channel = await client.channels.fetch(process.env.ADMINISTRATION_BOTCOMMANDS as string);
      return channel as TextChannel;
    }

    default: throw new Error(`Incorrect channel type provided: ${channelType}`);
  }
}

export const getChannelId = (channelType: NFDChannelType): string => {
  switch(channelType) {
    // START HERE
    case NFDChannelType.StartHere_Welcome: {
      return process.env.STARTHERE_WELCOME as string;
    }
    case NFDChannelType.StartHere_ServerGuide: {
      return process.env.STARTHERE_SERVERGUIDE as string;
    }
    case NFDChannelType.StartHere_WebsiteGuide: {
      return process.env.STARTHERE_WEBSITEGUIDE as string;
    }
    case NFDChannelType.StartHere_Announcements: {
      return process.env.STARTHERE_ANNOUNCEMENTS as string;
    }
    case NFDChannelType.StartHere_NeverFapDeluxePodcast: {
      return process.env.STARTHERE_NEVERFAPDELUXEPODCAST as string;
    }
    case NFDChannelType.StartHere_HelpfulNeverFappers: {
      return process.env.STARTHERE_HELPFULNEVERFAPPERS as string;
    }
    case NFDChannelType.StartHere_NewNeverFappers: {
      return process.env.STARTHERE_NEWNEVERFAPPERS as string;
    }

    // RECOVERY CHAT
    case NFDChannelType.RecoveryChat_GeneralChat: {
      return process.env.RECOVERYCHAT_GENERALCHAT as string;
    }
    case NFDChannelType.RecoveryChat_LetsAskJuliusAQuestion: {
      return process.env.RECOVERYCHAT_LETSASKJULIUSAQUESTION as string;
    }
    case NFDChannelType.RecoveryChat_MentalHealthChat: {
      return process.env.RECOVERYCHAT_MENTALHEALTHCHAT as string;
    }
    case NFDChannelType.RecoveryChat_PhilosophyChat: {
      return process.env.RECOVERYCHAT_PHILOSOPHYCHAT as string;
    }
    case NFDChannelType.RecoveryChat_RecoveryChat: {
      return process.env.RECOVERYCHAT_RECOVERYCHAT as string;
    }
    case NFDChannelType.RecoveryChat_MemeChat: {
      return process.env.RECOVERYCHAT_MEMECHAT as string;
    }
    case NFDChannelType.RecoveryChat_MusicChat: {
      return process.env.RECOVERYCHAT_MUSICCHAT as string;
    }
    case NFDChannelType.RecoveryChat_RantChat: {
      return process.env.RECOVERYCHAT_RANTCHAT as string;
    }
    case NFDChannelType.RecoveryChat_ArtChat: {
      return process.env.RECOVERYCHAT_ARTCHAT as string;
    }

    // ACCOUNTABILITY
    case NFDChannelType.Accountability_Accountability: {
      return process.env.ACCOUNTABILITY_ACCOUNTABILITY as string;
    }
    case NFDChannelType.Accountability_AccountabilityRules: {
      return process.env.ACCOUNTABILITY_ACCOUNTABILITYRULES as string;
    }
    case NFDChannelType.Accountability_FindAnAccountabilityPartner: {
      return process.env.ACCOUNTABILITY_FINDANACCOUNTABILITYPARTNER as string;
    }
    case NFDChannelType.Accountability_VideoAccountability: {
      return process.env.ACCOUNTABILITY_VIDEOACCOUNTABILITY as string;
    }
    case NFDChannelType.Accountability_MeditationJournal: {
      return process.env.ACCOUNTABILITY_MEDITATIONJOURNAL as string;
    }
    case NFDChannelType.Accountability_ExerciseJournal: {
      return process.env.ACCOUNTABILITY_EXERCISEJOURNAL as string;
    }
    case NFDChannelType.Accountability_HealthyEatingJournal: {
      return process.env.ACCOUNTABILITY_HEALTHYEATINGJOURNAL as string;
    }
    case NFDChannelType.Accountability_GratitudeJournal: {
      return process.env.ACCOUNTABILITY_GRATITUDEJOURNAL as string;
    }
    case NFDChannelType.Accountability_ReadingJournal: {
      return process.env.ACCOUNTABILITY_READINGJOURNAL as string;
    }
    case NFDChannelType.Accountability_RelapseJournal: {
      return process.env.ACCOUNTABILITY_RELAPSEJOURNAL as string;
    }
    case NFDChannelType.Accountability_DailyMilestones: {
      return process.env.ACCOUNTABILITY_DAILYMILESTONES as string;
    }

    // ADMINISTRATION
    case NFDChannelType.Administration_ServerSuggestions: {
      return process.env.ADMINISTRATION_SERVERSUGGESTIONS as string;
    }
    case NFDChannelType.Administration_HelpfulNeverFappersUnite: {
      return process.env.ADMINISTRATION_HELPFULNEVERFAPPERSUNITE as string;
    }
    case NFDChannelType.Administration_BotCommands: {
      return process.env.ADMINISTRATION_BOTCOMMANDS as string;
    }
    default: throw new Error(`Incorrect channel type provided: ${channelType}`);
  }
}

export enum AccountabilityUserType {
  DiscordUserType='discord_user_type',
  RedditUserType='reddit_user_type',
};

export const getTallyCount = async (): Promise<number> => {
  const { startOfTally, endOfTally } = generateTallyDates();

  const redditAccountabilityMessages =
    await knex('reddit_accountability_comments')
      .whereBetween('reddit_accountability_comments.created_at', [startOfTally.toDate(), endOfTally.toDate()])
      .count('reddit_accountability_comments.id');
  const redditCount: number = parseInt(redditAccountabilityMessages[0].count as string);

  const discordAccountabilityMessages =
    await knex('accountability_messages')
      .whereBetween('accountability_messages.created_at', [startOfTally.toDate(), endOfTally.toDate()])
      .count('accountability_messages.id');
  const discordCount: number = parseInt(discordAccountabilityMessages[0].count as string);

  return redditCount + discordCount;
}
