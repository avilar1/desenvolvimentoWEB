import { Knex } from 'knex';

export async function up(knex: Knex) {

  await knex.schema.dropTableIfExists('aluno_curso');
  

  return knex.schema.createTable('aluno_curso', (table) => {
    table.increments('id').primary();
    
    table.integer('aluno_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('aluno')
      .onDelete('CASCADE')
      .onUpdate('CASCADE'); 
    
    table.integer('curso_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('curso')
      .onDelete('CASCADE')
      .onUpdate('CASCADE'); 
    
    // Timestamps (opcional)
    //table.timestamps(true, true);
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('aluno_curso');
}