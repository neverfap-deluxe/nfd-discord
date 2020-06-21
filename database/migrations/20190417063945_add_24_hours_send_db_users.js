
exports.up = async function(knex) {
  await knex.schema.table('db_users', function(table) {
    table.boolean('sentYesterdayPostMessage');
  });
};

exports.down = async function(knex) {
  await knex.schema.table('db_users', function(table) {
    table.dropColumn('sentYesterdayPostMessage');
  });
};
