import { Aluno } from "../model/Aluno";
import { alunoRepository } from "../repository/AlunoRepository";
import { cursoRepository } from "../repository/CursoRepository";
import { cursoService} from "./CursoService";

export const alunoService = {
    findAll: async () => {
        return await alunoRepository.findAll();
    },

    findById: async (id: number) => {
        return await alunoRepository.findById(id);
    },

    save: async (aluno: Aluno) => {
        return await alunoRepository.save(aluno);
    },

    update: async (id: number, aluno: Aluno) => {
        return await alunoRepository.update(id, aluno);
    },

    delete: async (id: number) => {
        return await alunoRepository.delete(id);
    },

    tamanho: async () => {
        return await alunoRepository.tamanho();
    },

    addCurso: async (alunoId: number, cursoId: number) => {
        return await alunoRepository.addCurso(alunoId, cursoId);
    },

    removeCurso: async (alunoId: number, cursoId: number) => {
        return await alunoRepository.removeCurso(alunoId, cursoId);
    },

    getCursos: async (alunoId: number) => {
        return await alunoRepository.getCursos(alunoId);
    },

    getAlunoWithCursos: async (alunoId: number) => {
        return await alunoRepository.getAlunoComCursos(alunoId);
    }
};