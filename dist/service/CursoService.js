"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cursoService = void 0;
const CursoRepository_1 = require("../repository/CursoRepository");
exports.cursoService = {
    findAll: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield CursoRepository_1.cursoRepository.findAll();
    }),
    findById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield CursoRepository_1.cursoRepository.findById(id);
    }),
    save: (curso) => __awaiter(void 0, void 0, void 0, function* () {
        return yield CursoRepository_1.cursoRepository.save(curso);
    }),
    update: (id, curso) => __awaiter(void 0, void 0, void 0, function* () {
        return yield CursoRepository_1.cursoRepository.update(id, curso);
    }),
    delete: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield CursoRepository_1.cursoRepository.delete(id);
    }),
    addAluno: (cursoId, alunoId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield CursoRepository_1.cursoRepository.addAluno(cursoId, alunoId);
    }),
    removeAluno: (cursoId, alunoId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield CursoRepository_1.cursoRepository.removeAluno(cursoId, alunoId);
    }),
    getAlunos: (cursoId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield CursoRepository_1.cursoRepository.getAlunos(cursoId);
    }),
    getCursoComAlunos: (cursoId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield CursoRepository_1.cursoRepository.getCursoComAlunos(cursoId);
    })
};
