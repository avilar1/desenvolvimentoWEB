import { Curso } from "../model/Curso";
import { cursoRepository } from "../repository/CursoRepository";

export const cursoService = {
    findAll: () => {
        return cursoRepository.findAll();
    },
    findById: (id: number) => {
        return cursoRepository.findById(id);
    },
    save: (curso: Curso) => {
        return cursoRepository.save(curso);
    },
    update: (id: number, curso: Curso) => {
        return cursoRepository.update(id, curso);
    },
    delete: (id: number) => {
        return cursoRepository.delete(id);
    },
    tamanho: () => {
        return cursoRepository.tamanho();
    },
}