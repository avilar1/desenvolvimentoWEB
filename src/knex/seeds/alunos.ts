const tableName = 'aluno';

import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(tableName).del();

    // Inserts seed entries
    await knex(tableName).insert([
        {nome: 'João', idade: 20},
        {nome: 'Maria', idade: 22},
        {nome: 'José', idade: 25},
    ]);
};
