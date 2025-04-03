"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cursoService = void 0;
const CursoRepository_1 = require("../repository/CursoRepository");
exports.cursoService = {
    findAll: () => {
        return CursoRepository_1.cursoRepository.findAll();
    },
    findById: (id) => {
        return CursoRepository_1.cursoRepository.findById(id);
    },
    save: (curso) => {
        return CursoRepository_1.cursoRepository.save(curso);
    },
    update: (id, curso) => {
        return CursoRepository_1.cursoRepository.update(id, curso);
    },
    delete: (id) => {
        return CursoRepository_1.cursoRepository.delete(id);
    }
};
