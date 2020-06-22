export enum NFDChannelType {
  StartHere_Welcome = 'StartHere_Welcome',
  StartHere_ServerGuide = 'StartHere_ServerGuide',
  StartHere_WebsiteGuide = 'StartHere_WebsiteGuide',
  StartHere_HelpfulNeverFappers = 'StartHere_HelpfulNeverFappers',
  StartHere_Announcements = 'StartHere_Announcements',

  Accountability_DailyMilestones = 'Accountability_DailyMilestones',
  Accountability_AccountabilityRules = 'Accountability_AccountabilityRules',
  Accountability_Accountability = 'Accountability_Accountability',
  Accountability_MeditationJournal = 'Accountability_MeditationJournal',
  Accountability_ExerciseJournal = 'Accountability_ExerciseJournal',
  Accountability_GratitudeJournal = 'Accountability_GratitudeJournal',

  RecoveryChat_NewNeverFappers = 'RecoveryChat_NewNeverFappers',
  RecoveryChat_LetsAskJuliusAQuestion = 'RecoveryChat_LetsAskJuliusAQuestion',
  RecoveryChat_ArtChat = 'RecoveryChat_ArtChat',
  RecoveryChat_RecoveryChat = 'RecoveryChat_RecoveryChat',
  RecoveryChat_GeneralChat = 'RecoveryChat_GeneralChat',
  RecoveryChat_NeverFapDeluxePodcast = 'RecoveryChat_NeverFapDeluxePodcast',

  Administration_HelpfulNeverFappersUnite = 'Administration_HelpfulNeverFappersUnite',
}

export interface DBUser {
  id: string;
  email: string;
  username: string;
  created_at: string;
  updated_at: string;
  discord_id: string;
  sent36HourMessage: boolean;
  sent72HourMessage: boolean;
  sentYesterdayPostMessage: boolean;
  has_accepted: boolean;
  is_team_leader: boolean;
  neverfap_team_id: string;
};

export interface AccountabilityMessage {
  id: string;
  username: string;
  content: string;
  db_user: DBUser;
  created_at: string;
  message_id: string;
  db_users_id: string;
  updated_at: string;
}

export interface AccountabilityReact {
  id: string;
  username: string;
  emoji_id: string;
  emoji_name: string;
  created_at: string;
  db_user: DBUser;
  db_user_reacted_to: DBUser;
  accountability_message: AccountabilityMessage;
  db_users_id: string;
  db_users_id_reacted_to: string;
  accountability_messages_id: string;
  updated_at: string;
}

export interface RedditAccountabilitySubmission {
  id: string;
  submission_id: string;
  submission_date: string;
  created_at: string;
  updated_at: string;
}

export interface RedditAccountabilityComment {
  id: string;
  comment_id: string;
  username: string;
  content: string;
  db_users_id: string;
  parent_submission_id: string;
}
