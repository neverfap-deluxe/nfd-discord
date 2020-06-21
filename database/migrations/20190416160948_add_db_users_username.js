
exports.up = async function(knex) {
  await knex.schema.table('db_users', function(table) {
    table.string('username');
  });
};

exports.down = async function(knex) {
  await knex.schema.table('db_users', function(table) {
    table.dropColumn('username');
  });
};
