
// table - accountability_message
// id:guid
// message_id:string
// content:string
// db_users_id:reference

exports.up = async function(knex, Promise) {
  const hasAccountabilityMessageTable = await knex.schema.hasTable('accountability_messages');
  if (!hasAccountabilityMessageTable) {
    return knex.schema.createTable('accountability_messages', (table) => {
      table.uuid('id').notNullable().unique().primary();
      table.string('message_id').notNullable();
      table.string('content').notNullable();
      table.uuid('db_users_id').references('db_users.id');
      table.timestamps(true, true);
    });
  }
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('accountability_messages');  
};
