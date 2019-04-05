const DbUser = require('../models/DbUser');
const AccountabilityMessage = require('../models/AccountabilityMessage');

// Create database schema. You should use knex migration files to do this.
// We create it here for simplicity.
async function createDbUserSchema() {
  const hasDbUserTable = await knex.schema.hasTable('db_user');
  if (!hasDbUserTable) {
    return knex.schema.createTable('dbUser', (table) => {
      table.increments('id').primary();
      table.string('discord_id'); 
      table.integer('total_accountability_messages');
      table.integer('last_accountability_message_date');
    });
  }
}

async function createAccountabilityMessageSchema() {
  const hasAccountabilityMessageTable = await knex.schema.hasTable('accountability_message');
  if (!hasAccountabilityMessageTable) {
    return knex.schema.createTable('accountability_message', (table) => {
      table.increments('id').primary();
      table.string('message_id');
      table.string('content');
      table.integer('db_user_id').references('db_user.id');
    });
  }
}

createDbUserSchema().then(() => console.log("migration successful")).catch(console.error);
createAccountabilityMessageSchema().then(() => console.log("migration successful")).catch(console.error);
