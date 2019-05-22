const Router = require('koa-router');
const router = new Router();
const knex = require('./db/knex');

const redirectUriInstagram = 'http://localhost:3000/auth/instagram/callback';

router.get('/', async (ctx, next) => {
  // const accountabilityMessages = await knex('accountability_messages').count();

  const accountabilityMessages = await knex('accountability_messages').count('id');
  const accountabilityMessageCount = parseInt(accountabilityMessages[0].count);

  const accountabilityReacts = await knex('accountability_reacts').count('id');
  const accountabilityReactCount = parseInt(accountabilityReacts[0].count);

  await ctx.render('index', {
    accountabilityMessageCount,
    accountabilityReactCount,
  });
})

// // Instagram API
// .get('/auth/instagram', (req, res) => {
//   res.redirect(
//     instagram.getAuthorizationUrl(
//       redirectUriInstagram,
//       {
//         // an array of scopes
//         scope: ['basic', 'likes'],
//       },
//       // an optional state
//       // (state: 'your state')
//     )
//   );
// }).get('/auth/instagram/callback', async (ctx, next) => {
// // Handle auth code and get access_token for user
//   try {
//     // The code from the request, here req.query.code for express
//     const code = ctx.query.code;
//     const data = await instagram.authorizeUser(code, redirectUriInstagram);
//     // data.access_token contain the user access_token
//     res.json(data);
//   } catch (err) {
//     res.json(err);
//   }
// })


// for facebook.
// app.get('/auth/facebook', function(req, res) {

//   // we don't have a code yet
//   // so we'll redirect to the oauth dialog
//   if (!req.query.code) {
//     console.log("Performing oauth for some user right now.");

//     var authUrl = graph.getOauthUrl({
//         "client_id":     conf.client_id
//       , "redirect_uri":  conf.redirect_uri
//       , "scope":         conf.scope
//     });

//     if (!req.query.error) { //checks whether a user denied the app facebook login/permissions
//       res.redirect(authUrl);
//     } else {  //req.query.error == 'access_denied'
//       res.send('access denied');
//     }
//   }
//   // If this branch executes user is already being redirected back with
//   // code (whatever that is)
//   else {
//     console.log("Oauth successful, the code (whatever it is) is: ", req.query.code);
//     // code is set
//     // we'll send that and get the access token
//     graph.authorize({
//         "client_id":      conf.client_id
//       , "redirect_uri":   conf.redirect_uri
//       , "client_secret":  conf.client_secret
//       , "code":           req.query.code
//     }, function (err, facebookRes) {
//       res.redirect('/UserHasLoggedIn');
//     });
//   }
// });


// // user gets sent here after being authorized
// app.get('/UserHasLoggedIn', function(req, res) {
//   res.render("index", {
//       title: "Logged In"
//   });
// });



// })

module.exports = router;
