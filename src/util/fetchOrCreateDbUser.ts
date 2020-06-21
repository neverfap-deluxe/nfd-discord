import { User } from "discord.js";
import { DBUser } from "../types";
import knex from "./knex";
import { v4 as uuidv4 } from 'uuid';
import { AccountabilityUserType } from "./util";

export const fetchOrCreateDbUser = async (discordUser: User): Promise<DBUser> => {
  const discordUsername: string = discordUser.username;

  const db_user: DBUser | undefined = await knex('db_users').where('discord_id', discordUser.id).first('*');

  if (db_user) {
    if (db_user.username !== discordUsername) {
      await knex('db_users').where('id', db_user.id).update({ username: discordUsername });
    }
  }

  if (!db_user) {
    const created_db_user: DBUser = await knex('db_users').returning('*').insert({
      id: uuidv4(),
      discord_id: discordUser.id,
      username: discordUser.username
    });

    return created_db_user[0];
  }

  return db_user;
}

// export const fetchOrCreateDbUserReddit = async (redditUser: any, userType: AccountabilityUserType): Promise<DBUser> => {
//   const redditUsername: string = redditUser.username;

//   const db_user: DBUser | undefined = await knex('db_users').where('reddit_id', redditUser.id).first('*');

//   if (db_user) {
//     if (db_user.username !== redditUsername) {
//       await knex('db_users').where('id', db_user.id).update({ username: redditUsername });
//     }
//   }

//   if (!db_user) {
//     const created_db_user: DBUser = await knex('db_users').returning('*').insert({
//       id: uuidv4(),
//       discord_id: redditUser.id,
//               reddit_id:

//       username: redditUser.username,
//       userType: ''
//       reddit_id:
//     });

//     return created_db_user[0];
//   }

//   return db_user;
// }