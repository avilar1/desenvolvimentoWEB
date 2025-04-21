import  Aluno from "../model/Aluno";
import Curso from "../model/Curso";

export const cursoRepository = {
  findAll: async () => {
    return await Curso.findAll();
  },

  findById: async (id: number) => {
    return await Curso.findByPk(id);
  },

  save: async (curso: Omit<Curso, 'id'>) => {
    return await Curso.create(curso);
  },

  update: async (id: number, curso: Partial<Curso>) => {
    const [affectedCount] = await Curso.update(curso, { where: { id } });
    if (affectedCount > 0) {
      return await Curso.findByPk(id);
    }
    return null;
  },

  delete: async (id: number) => {
    const affectedRows = await Curso.destroy({ where: { id } });
    return affectedRows > 0;
  },

  addAluno: async (cursoId: number, alunoId: number) => {
    const curso = await Curso.findByPk(cursoId);
    if (!curso) return false;
    
    const aluno = await Aluno.findByPk(alunoId);
    if (!aluno) return false;
    
    await curso.addAluno(aluno);
    return true;
  },

  removeAluno: async (cursoId: number, alunoId: number) => {
    const curso = await Curso.findByPk(cursoId);
    if (!curso) return false;
    
    const aluno = await Aluno.findByPk(alunoId);
    if (!aluno) return false;
    
    await curso.removeAluno(aluno);
    return true;
  },

  getAlunos: async (cursoId: number) => {
    const curso = await Curso.findByPk(cursoId, {
      include: [{
        model: Aluno,
        as: 'alunos',
        through: { attributes: [] }
      }]
    });
    
    return curso?.get('alunos') || [];
  },

  getCursoComAlunos: async (cursoId: number) => {
    return await Curso.findByPk(cursoId, {
      include: [{
        model: Aluno,
        as: 'alunos',
        through: { attributes: [] }
      }]
    });
  }
};