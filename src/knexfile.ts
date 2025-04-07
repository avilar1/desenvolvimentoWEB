//const { knex } = require('knex');
import path from 'path';
import 'dotenv/config';

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;
const currentDir = path.resolve(__dirname);

console.log(DB_HOST);

const config = {
  development: {
  client: 'pg', //ou postgres, depois testar.
  connection: {
    host: DB_HOST,
    port: parseInt(DB_PORT || '5432'),
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
  },
  seeds: {
    directory: './knex/seeds',
  },
  migrations: {
    directory: `${currentDir}/knex/migrations`},
    tableName: 'knex_migrations',
  },
}

//const database = knex(config.development);

//module.exports = { config, database };

export default config;
//export const database = knex(config.development);