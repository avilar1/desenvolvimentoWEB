import Aluno from "../model/Aluno";
import Curso from "../model/Curso";
import { Op } from 'sequelize';

export const alunoRepository = {
  findAll: async () => {
    return await Aluno.findAll();
  },

  findById: async (id: number) => {
    return await Aluno.findByPk(id);
  },

  save: async (aluno: Aluno) => {
    return await Aluno.create(aluno);
  },

  update: async (id: number, aluno: Partial<Aluno>) => {
    const [affectedCount] = await Aluno.update(aluno, { where: { id } });
    if (affectedCount > 0) {
      return await Aluno.findByPk(id);
    }
    return null;
  },

  delete: async (id: number) => {
    const affectedRows = await Aluno.destroy({ where: { id } });
    return affectedRows > 0;
  },

  tamanho: async () => {
    return await Aluno.count();
  },

  addCurso: async (alunoId: number, cursoId: number) => {
    const aluno = await Aluno.findByPk(alunoId);
    if (!aluno) return false;
    
    const curso = await Curso.findByPk(cursoId);
    if (!curso) return false;
    
    await aluno.addCurso(curso);
    return true;
  },

  removeCurso: async (alunoId: number, cursoId: number) => {
    const aluno = await Aluno.findByPk(alunoId);
    if (!aluno) return false;
    
    const curso = await Curso.findByPk(cursoId);
    if (!curso) return false;
    
    await aluno.removeCurso(curso);
    return true;
  },

  getCursos: async (alunoId: number) => {
    const aluno = await Aluno.findByPk(alunoId, {
      include: [{
        model: Curso,
        as: 'cursos',
        through: { attributes: [] } // não inclui atributos da tabela de junção
      }]
    });
    
    return aluno?.get('cursos') || [];
  },

  getAlunoComCursos: async (alunoId: number) => {
    return await Aluno.findByPk(alunoId, {
      include: [{
        model: Curso,
        as: 'cursos',
        through: { attributes: [] }
      }]
    });
  }
};