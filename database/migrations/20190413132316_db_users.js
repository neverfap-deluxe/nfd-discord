
// table - db_users
// id:guid
// discord_id:string

// This may need to be async/await
exports.up = async function(knex) {
  await knex.schema.createTable('db_users', function(table) {
    table.uuid('id').notNullable().unique().primary();
    table.string('discord_id').notNullable().unique();
    table.boolean('sent36HourMessage').notNullable().defaultTo(false);
    table.boolean('sent72HourMessage').notNullable().defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable('db_users');
};
