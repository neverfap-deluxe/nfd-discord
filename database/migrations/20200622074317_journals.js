
exports.up = async function(knex) {
  await knex.schema.createTable('journals', function(table) {
    table.uuid('id').notNullable().unique().primary();
    table.uuid('db_users_id').references('db_users.id').notNullable();
    table.string('message_id').notNullable();
    table.string('journal_type').notNullable();
    table.string('content').notNullable();
    table.boolean('is_valid');

    table.timestamps(true, true);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable('journals');
};
