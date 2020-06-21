
exports.up = async function(knex) {
  await knex.schema.createTable('neverfap_league', function(table) {
    table.uuid('id').notNullable().unique().primary();
    table.string('league_name').unique();
    table.string('league_server_id').unique();
    table.timestamps(true, true);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable('neverfap_league');
};
