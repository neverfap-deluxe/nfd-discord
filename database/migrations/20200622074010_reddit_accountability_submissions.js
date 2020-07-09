
exports.up = async function(knex) {
  await knex.schema.createTable('reddit_accountability_submissions', function(table) {
    table.uuid('id').notNullable().unique().primary();
    table.string('submission_id');
    table.string('submission_date');
    table.string('submission_title');
    table.string('submission_text');
    table.timestamps(true, true);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable('reddit_accountability_submissions');
};
