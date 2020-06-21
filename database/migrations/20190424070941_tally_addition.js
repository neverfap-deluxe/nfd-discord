
exports.up = async function(knex) {
  await knex.schema.table('accountability_tally', function(table) {
    table.integer('total_participants');
    table.integer('total_reacts');
  });
};

exports.down = async function(knex) {
  await knex.schema.table('accountability_tally', function(table) {
    table.dropColumn('total_participants');
    table.dropColumn('total_reacts');
  });
};
