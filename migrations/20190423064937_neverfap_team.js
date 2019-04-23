
exports.up = async function(knex, Promise) {
  const hasNeverFapTeamTable = await knex.schema.hasTable('neverfap_team');
  if (!hasNeverFapTeamTable) {
    return knex.schema.createTable('neverfap_team', function(table) {
      table.uuid('id').notNullable().unique().primary();
      table.string('team_name').unique();
      table.string('team_channel_id').unique();
      table.uuid('neverfap_league_id').references('neverfap_league.id');
      table.timestamps(true, true);
    });
  }
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('neverfap_team');  
};
