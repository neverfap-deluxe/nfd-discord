exports.up = async function(knex) {
  await knex.schema.table('db_users', function(table) {
    table.boolean('has_accepted').defaultTo(false);
    table.boolean('is_team_leader').defaultTo(false);
    table.uuid('neverfap_team_id').references('neverfap_team.id');
  });
};

exports.down = async function(knex) {
  await knex.schema.table('db_users', function(table) {
    table.dropColumn('has_accepted');
    table.dropColumn('is_team_leader');
    table.dropColumn('neverfap_team_id');
  });
};
