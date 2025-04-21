import Aluno from './Aluno';
import Curso from './Curso';


Aluno.belongsToMany(Curso, {
  through: 'aluno_curso',
  as: 'cursos',
  foreignKey: 'aluno_id',
});

Curso.belongsToMany(Aluno, {
  through: 'aluno_curso',
  as: 'alunos',
  foreignKey: 'curso_id',
});

export { Aluno, Curso };