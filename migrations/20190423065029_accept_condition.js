
exports.up = async function(knex, Promise) {
  return knex.schema.table('db_users', function(table) {
    table.boolean('has_accepted').defaultTo(false);
    table.boolean('is_team_leader').defaultTo(false);
    table.uuid('neverfap_team_id').references('neverfap_team.id');
  });
};

exports.down = function(knex, Promise) {
  
};
