import type { Knex } from "knex";
const tableName = 'curso';


export async function up(knex: Knex) {
    return knex.schema.createTable(tableName, (table) => {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('periodo').notNullable();
      });
}


export async function down(knex: Knex) {
  return knex.schema.dropTableIfExists(tableName);
}

