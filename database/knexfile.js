const path = require('path');
const { config } = require('dotenv-flow');
config({ path: path.resolve(__dirname, '..', 'deployment', 'environment') });

module.exports = {
  local: {
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
      max: 10,
    },
    migrations: {
      directory: path.resolve(__dirname, 'migrations'),
      tableName: 'knex_nfd_discord_local_migrations'
    }
  },

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
      max: 10,
    },
    migrations: {
      directory: path.resolve(__dirname, 'migrations'),
      tableName: 'knex_nfd_discord_local_migrations'
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
      max: 10,
    },
    migrations: {
      directory: path.resolve(__dirname, 'migrations')
    }
  }
};
