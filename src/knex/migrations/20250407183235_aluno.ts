const tableName = 'aluno';

import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments('id').primary();
    table.string('nome').notNullable();
    table.integer('idade').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTableIfExists(tableName);
}