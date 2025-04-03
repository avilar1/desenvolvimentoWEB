import { Curso } from "../model/Curso";

const cursos: Curso[] = [];
export const cursoRepository = {
    findAll: () => {
        return cursos;
    },
    findById: (id: number) => {
        return cursos.find(curso => curso.id === id);
    },
    save: (curso: Curso) => {
        cursos.push(curso);
        return curso;
    },
    update: (id: number, curso: Curso) => {
        const index = cursos.findIndex(c => c.id === id);
        if (index !== -1) {
            cursos[index] = curso;
            return curso;
        }
        return null;
    },
    delete: (id: number) => {
        const index = cursos.findIndex(c => c.id === id);
        if (index !== -1) {
            return cursos.splice(index, 1)[0];
        }
        return null;
    },
    tamanho: () => {
        return cursos.length;
    },
}