/**
 * @param {import('knex').Knex} knex
 */

exports.up = function(knex) {
    return knex.schema
      .createTable('aluno', (table) => {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.integer('idade').notNullable();
        table.timestamps(true, true);
      })
      .createTable('curso', (table) => {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('periodo').notNullable();
        table.timestamps(true, true);
      })
      .createTable('aluno_curso', (table) => {
        table.increments('id').primary();
        table.integer('aluno_id').unsigned().references('id').inTable('aluno').onDelete('CASCADE');
        table.integer('curso_id').unsigned().references('id').inTable('curso').onDelete('CASCADE');
        table.unique(['aluno_id', 'curso_id']);
        table.timestamps(true, true);
      });
  };
  
  /**
 * @param {import('knex').Knex} knex
 */

  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('aluno_curso')
      .dropTableIfExists('curso')
      .dropTableIfExists('aluno');
  };