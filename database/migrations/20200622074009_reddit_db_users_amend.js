
exports.up = async function(knex) {
  await knex.schema.table('db_users', function(table) {
    table.string('reddit_id');
    table.string('user_type');
  });
};

exports.down = async function(knex) {
  await knex.schema.table('db_users', function(table) {
    table.dropColumn('reddit_id');
    table.dropColumn('user_type');
  });
};
