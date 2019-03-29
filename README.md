# nfd_discord

npm i -S koa pm2 knex objection pg moment node-cron dotenv

knex migrate:latest
npm start


// Build into the backend, Discord statistics for the users.
// Choose to connect your discord to the backend. O M F G.

// https://discord.js.org/#/docs/main/stable/class/Client
// https://dev.to/aspittel/objection--knex--painless-postgresql-in-your-node-app--6n6
// https://vincit.github.io/objection.js/#models

// send congratulations for starting their first streak!
// send congratulations for starting their seven day streak!

## Properties 

- message.channel
- message.content
- message.createdAt
- message.guild
- message.member - type GuildMember
- message.author - type User

- user.email
- user.id
- user.lastMessage
- user.lastMessageID
- user.username

- user.sendMessage('string')

- member.user
- member.joinedAt

- member.addRole() 'role_id'
- member.removeRole() 'role_id'

- message.member.addRole('193654001089118208')
- .then(console.log)
- .catch(console.error);


