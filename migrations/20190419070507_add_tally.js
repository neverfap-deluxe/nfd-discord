
exports.up = async function(knex, Promise) {
  const hasGlobalStore = await knex.schema.hasTable('accountability_tally');
  if (!hasGlobalStore) {
    return knex.schema.createTable('accountability_tally', (table) => {
      table.uuid('id').notNullable().unique().primary();
      table.datetime('tally_date').notNullable().unique();
      table.text('post_message');
      table.text('react_message');
      table.boolean('completed').default(false);
      table.timestamps(true, true);
    });
  }
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('accountability_tally');  
};
