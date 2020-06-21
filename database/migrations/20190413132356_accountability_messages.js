
// table - accountability_message
// id:guid
// message_id:string
// content:string
// db_users_id:reference

exports.up = async function(knex) {
  await knex.schema.createTable('accountability_messages', (table) => {
    table.uuid('id').notNullable().unique().primary();
    table.string('message_id').notNullable();
    table.text('content').notNullable();
    table.uuid('db_users_id').references('db_users.id');
    table.timestamps(true, true);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable('accountability_messages');
};
