import Knex from 'knex';

// Initialize knex.
const knex: Knex = Knex({
  client: 'pg',
  useNullAsDefault: true,
  connection: {
    host: process.env.POSTGRES_HOST as string,
    port: Number(process.env.CUSTOM_DB_PORT) as number,
    user: process.env.POSTGRES_USER as string,
    password: process.env.POSTGRES_PASSWORD as string,
    database: process.env.POSTGRES_DB as string
  }
});

export default knex;
