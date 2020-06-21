
exports.up = async function(knex) {
  await knex.schema.table('accountability_messages', function(table) {
    table.string('username');
  });
};

exports.down = async function(knex) {
  await knex.schema.table('accountability_messages', function(table) {
    table.dropColumn('username');
  });
};
