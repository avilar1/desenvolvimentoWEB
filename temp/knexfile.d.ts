import { Knex } from 'knex';

declare const config: {
  development: Knex.Config;
};

declare const database: Knex;

export { config, database };