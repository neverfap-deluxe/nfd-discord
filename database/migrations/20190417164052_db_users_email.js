
exports.up = async function(knex) {
  await knex.schema.table('db_users', function(table) {
    table.string('email');
  });
};

exports.down = async function(knex) {
  await knex.schema.table('db_users', function(table) {
    table.dropColumn('email');
  });
};
