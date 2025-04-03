"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alunoRepository = void 0;
const alunos = [];
exports.alunoRepository = {
    findAll: () => {
        return alunos;
    },
    findById: (id) => {
        return alunos.find(aluno => aluno.id === id);
    },
    save: (aluno) => {
        alunos.push(aluno);
        return aluno;
    },
    update: (id, aluno) => {
        const index = alunos.findIndex(a => a.id === id);
        if (index !== -1) {
            alunos[index] = aluno;
            return aluno;
        }
        return null;
    },
    delete: (id) => {
        const index = alunos.findIndex(a => a.id === id);
        if (index !== -1) {
            return alunos.splice(index, 1)[0];
        }
        return null;
    },
    tamanho: () => {
        return alunos.length;
    },
};
