import { Knex } from "knex";
const tableName = 'curso';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(tableName).del();

    // Inserts seed entries
    await knex(tableName).insert([
        { nome: 'Curso 1', periodo: '2024-1' },
        { nome: 'Curso 2', periodo: '2024-2' },
        { nome: 'Curso 3', periodo: '2025-1' },
    ]);
};
