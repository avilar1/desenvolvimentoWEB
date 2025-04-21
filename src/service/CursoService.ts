import Curso from "../model/Curso";
import { cursoRepository } from "../repository/CursoRepository";

export const cursoService = {
    findAll: async () => {
        return await cursoRepository.findAll();
    },

    findById: async (id: number) => {
        return await cursoRepository.findById(id);
    },

    save: async (curso: Curso) => {
        return await cursoRepository.save(curso);
    },

    update: async (id: number, curso: Curso) => {
        return await cursoRepository.update(id, curso);
    },

    delete: async (id: number) => {
        return await cursoRepository.delete(id);
    },

    addAluno: async (cursoId: number, alunoId: number) => {
        return await cursoRepository.addAluno(cursoId, alunoId);
    },

    removeAluno: async (cursoId: number, alunoId: number) => {
        return await cursoRepository.removeAluno(cursoId, alunoId);
    },

    getAlunos: async (cursoId: number) => {
        return await cursoRepository.getAlunos(cursoId);
    },

    getCursoComAlunos: async (cursoId: number) => {
        return await cursoRepository.getCursoComAlunos(cursoId);
    }
}