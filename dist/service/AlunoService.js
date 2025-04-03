"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alunoService = void 0;
const AlunoRepository_1 = require("../repository/AlunoRepository");
exports.alunoService = {
    findAll: () => {
        return AlunoRepository_1.alunoRepository.findAll();
    },
    findById: (id) => {
        return AlunoRepository_1.alunoRepository.findById(id);
    },
    save: (aluno) => {
        return AlunoRepository_1.alunoRepository.save(aluno);
    },
    update: (id, aluno) => {
        return AlunoRepository_1.alunoRepository.update(id, aluno);
    },
    delete: (id) => {
        return AlunoRepository_1.alunoRepository.delete(id);
    },
    tamanho: () => {
        return AlunoRepository_1.alunoRepository.tamanho();
    },
};
