
exports.up = async function(knex) {
  await knex.schema.createTable('accountability_tally', (table) => {
    table.uuid('id').notNullable().unique().primary();
    table.datetime('tally_date').notNullable().unique();
    table.text('post_message');
    table.text('react_message');
    table.boolean('completed').default(false);
    table.timestamps(true, true);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable('accountability_tally');
};
