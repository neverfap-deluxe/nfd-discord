// require('dotenv').config({path: 'path_to_env_file'});
require('dotenv').config();

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: process.env.POSTGRES_HOST,
      port: process.env.CUSTOM_DB_PORT,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations'
      // tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host: process.env.POSTGRES_HOST,
      port: process.env.CUSTOM_DB_PORT,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations'
      // tableName: 'knex_migrations'
    }
  }

};
