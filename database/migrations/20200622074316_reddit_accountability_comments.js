
exports.up = async function(knex) {
  await knex.schema.createTable('reddit_accountability_comments', function(table) {
    table.uuid('id').notNullable().unique().primary();
    table.integer('comment_id').notNullable();
    table.string('username');
    table.string('content');
    table.uuid('db_users_id').references('db_users.id');
    table.uuid('parent_submission_id').references('reddit_accountability_submissions.id');

    table.timestamps(true, true);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable('reddit_accountability_comments');
};
