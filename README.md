# nfd_discord

npm i -S koa pm2 knex objection pg moment node-cron dotenv discord.js winston

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

- get channel properties n' stuff. 


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

// automated list
// automated message which sends to #emergency if someone is posting in there for the first time within an hour, and that message hasn't yet been posted.


// const cron = require('node-cron');

// cron.schedule('* * * * *', () => {
//   console.log('running a task every minute');
// });




# IDEAS

- Send people messages, asking them if they meditated that day?
- Input DM bot.