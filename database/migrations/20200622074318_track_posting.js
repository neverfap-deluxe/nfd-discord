
exports.up = async function(knex) {
  await knex.schema.createTable('track_posting', function(table) {
    table.uuid('id').notNullable().unique().primary();
    table.string('title');
    table.string('author');
    table.string('subreddit');
    table.string('permalink');

    table.timestamps(true, true);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable('track_posting');
};
