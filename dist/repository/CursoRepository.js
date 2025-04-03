"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cursoRepository = void 0;
const cursos = [];
exports.cursoRepository = {
    findAll: () => {
        return cursos;
    },
    findById: (id) => {
        return cursos.find(curso => curso.id === id);
    },
    save: (curso) => {
        cursos.push(curso);
        return curso;
    },
    update: (id, curso) => {
        const index = cursos.findIndex(c => c.id === id);
        if (index !== -1) {
            cursos[index] = curso;
            return curso;
        }
        return null;
    },
    delete: (id) => {
        const index = cursos.findIndex(c => c.id === id);
        if (index !== -1) {
            return cursos.splice(index, 1)[0];
        }
        return null;
    },
};
