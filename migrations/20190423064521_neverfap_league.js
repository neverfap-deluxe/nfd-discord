
exports.up = async function(knex, Promise) {
  const hasNeverFapLeagueTable = await knex.schema.hasTable('neverfap_league');
  if (!hasNeverFapLeagueTable) {
    return knex.schema.createTable('neverfap_league', function(table) {
      table.uuid('id').notNullable().unique().primary();
      table.string('league_name').unique();
      table.string('league_server_id').unique();
      table.timestamps(true, true);
    });
  }
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('neverfap_league');  
};
