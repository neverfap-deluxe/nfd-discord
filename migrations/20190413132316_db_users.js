
// table - db_users
// id:guid
// discord_id:string

// This may need to be async/await
exports.up = async function(knex, Promise) {
  const hasDbUserTable = await knex.schema.hasTable('db_users');
  if (!hasDbUserTable) {
    return knex.schema.createTable('db_users', function(table) {
      table.uuid('id').notNullable().unique().primary();
      table.string('discord_id').notNullable().unique();
      table.boolean('sent36HourMessage').notNullable().defaultTo(false);
      table.boolean('sent72HourMessage').notNullable().defaultTo(false);
      table.timestamps(true, true);
    });
  }
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('db_users');
};
