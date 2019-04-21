# nfd_discord

npm i -S koa pm2 knex objection pg moment node-cron dotenv discord.js winston koa-static koa-views nodemailer aws-sdk 

knex migrate:latest
npm start

SSL FOR THIS https://tecadmin.net/install-lets-encrypt-create-ssl-ubuntu/


- Memes chat





<!-- // Render Views
app.use(async function (ctx) {
  ctx.state = {
    session: this.session,
    title: 'app'
  };

  await ctx.render('user', {
    user: 'John'
  });
}); -->



// that is obviously what this is about.
   // a webpage for the neverfap

   // Emergency page needs to be created.
   // Post-Relapse page needs to be created.
   
   league.neverfapdeluxe.com/
   // setup SSL for domain.
   // setup amazon SES
   // koa can return a single webpage.
   // nodemailer.

   // setup a domain.
   // create a hugo website for
   // setup with netlify.
   // marko with
   // Welcome message needs to include the website link

   // Users can provide their email, for updates.
   // so the bot captures keeps a tally of milestones.
   // reminder to post emoji's onto people's posts. If they haven't done it in a while.
   // at a certain point, it'll just start

   // random-chat automated Messages. Hmmm,

   // Does anyone want some candy? *creepily licks lips*
   // Hey! Hands away from those pants! I know where you live buddy, so don't make me get all chop-suey on you! *hiiiiii-yaaa*
   // Addiction is hard, but remaining an addict is even harder. Meditate today and set yourself free.
   // If you're struggling to meditate, I would highly recommend checking out some guided meditations. There's a heap of different resources out there, however I personally
   // If you struggle to relax, then that within itself is the problem.



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
- message.created_at
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







nfd_discord

// https://discord.js.org/#/docs/main/stable/class/Client
// https://dev.to/aspittel/objection--knex--painless-postgresql-in-your-node-app--6n6
// https://vincit.github.io/objection.js/#models
// - get pm2

// https://koajs.com/
// nest.js
// npm i koa
// $ node my-koa-app.js
// Objection or knex.

// Events:
// emojiCreate
// guildMemberAdd
// message
// messageReactionAdd

// Build into the backend, Discord statistics for the users.
// Choose to connect your discord to the backend. O M F G.

// Node.js discord

// what data would we want to store?
// DiscordUser
// totalAccountabilityMessages: 10
// currentAccountabilityStreak:

// send congratulations for starting their first streak!
// send congratulations for starting their seven day streak!


 // message.channel
 // message.content
 // message.created_at
 // message.guild
 // message.member - type GuildMember
 // message.author - type User


 // Maybe? I'm not sure.
 // Reply to a message
// message.reply('Hey, I\'m a reply!')
// .then(sent => console.log(`Sent a reply to ${sent.author.username}`))
// .catch(console.error);


 // user.email
 // user.id
 // user.lastMessage
 // user.lastMessageID
 // user.username

 // user.sendMessage('string')


 // NOTE: addRoleTag


 if (message.substring(0, 1) == '!') {
     var args = message.substring(1).split(' ');
     var cmd = args[0];

     args = args.splice(1);
     switch(cmd) {
         // !ping
         case 'ping':
           bot.sendMessage({
               to: channelID,
               message: 'Pong!'
           });
         break;
         // Just add any case commands if you want to..
       }
   }
});

bot.on('guildMemberAdd', function(member) { // GuildMember
 // member.user
 // member.joinedAt

 // member.addRole() 'role_id'
 // member.removeRole() 'role_id'

 // message.member.addRole('193654001089118208')
 // .then(console.log)
 // .catch(console.error);

 if (member. ) {

 }


 // Send the message to a designated channel on a server:
 const channel = member.guild.channels.find(ch => ch.name === 'member-log');

 // Do nothing if the channel wasn't found on this server
 if (!channel) return;
 // Send the message, mentioning the member
 channel.send(`Welcome to the server, ${member}`);
});

bot.login('your token here');



// Core functions
// - Intermittent messages in #accountability to remind people to use #accountability to interact with our bot and get access to free resources!

// - Check for new messages.
//   - Get tally of all messages from that particular user. Keep it in a database. Discord
//   -






 bot.on('message', function (message) {
 const channel = message.channel;
 const user = message.user;
 const member = message.member;

 if (channel.id === accountabilityChannelId) {

   const dbUser = await dbUser.query().findOne({ discordId: user.id });

   if
   // DiscordUser
   // totalAccountabilityMessages: 10
   // currentAccountabilityStreak:
   // discordId: _id

   // discordId:

   // - get user from the database.
   // - create user if it doesn't yet exist.

   // update currentAccountabilityStreak

   // check currentAccountabilityStreak
   if (currentAccountabilityStreak)

   // if message is

   // message.reply('Hey, I\'m a reply!')
   //   .then(sent => console.log(`Sent a reply to ${sent.author.username}`))
   //   .catch(console.error);
 }





