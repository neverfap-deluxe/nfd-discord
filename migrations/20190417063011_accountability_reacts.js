
// table - accountability_reacts
// id:guid
// message_id:string
// content:string
// db_users_id:reference

exports.up = async function(knex, Promise) {
  const hasAccountabilityMessageTable = await knex.schema.hasTable('accountability_reacts');
  if (!hasAccountabilityMessageTable) {
    return knex.schema.createTable('accountability_reacts', (table) => {
      table.uuid('id').notNullable().unique().primary();
      table.string('username');
      table.string('emoji_id');
      table.string('emoji_name');
      table.uuid('db_users_id').references('db_users.id');
      table.uuid('db_users_id_reacted_to').references('db_users.id');
      table.uuid('accountability_messages_id').references('accountability_messages.id');
      table.timestamps(true, true);
    });
  }
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('accountability_reacts');  
};
