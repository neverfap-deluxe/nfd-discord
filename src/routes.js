const Router = require('koa-router');
const router = new Router();
const knex = require('./db/knex');

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
// .get('/', async (ctx, next) => {

// })


module.exports = router;
