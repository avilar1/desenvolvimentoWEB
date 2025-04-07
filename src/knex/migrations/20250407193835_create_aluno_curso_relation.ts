import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('aluno_curso', (table) => {
    table.increments('id').primary();
    
    table.integer('aluno_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('aluno')
      .onDelete('CASCADE');
    

    table.integer('curso_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('curso')
      .onDelete('CASCADE');
    
    // Garante que cada aluno só pode estar vinculado a um curso uma vez
    //table.unique(['aluno_id', 'curso_id']);
    
    // Timestamps (opcional)
    //table.timestamps(true, true);
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('aluno_curso');
}