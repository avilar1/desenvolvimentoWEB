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
exports.alunoService = void 0;
const AlunoRepository_1 = require("../repository/AlunoRepository");
exports.alunoService = {
    findAll: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield AlunoRepository_1.alunoRepository.findAll();
    }),
    findById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield AlunoRepository_1.alunoRepository.findById(id);
    }),
    save: (aluno) => __awaiter(void 0, void 0, void 0, function* () {
        return yield AlunoRepository_1.alunoRepository.save(aluno);
    }),
    update: (id, aluno) => __awaiter(void 0, void 0, void 0, function* () {
        return yield AlunoRepository_1.alunoRepository.update(id, aluno);
    }),
    delete: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield AlunoRepository_1.alunoRepository.delete(id);
    }),
    tamanho: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield AlunoRepository_1.alunoRepository.tamanho();
    }),
    addCurso: (alunoId, cursoId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield AlunoRepository_1.alunoRepository.addCurso(alunoId, cursoId);
    }),
    removeCurso: (alunoId, cursoId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield AlunoRepository_1.alunoRepository.removeCurso(alunoId, cursoId);
    }),
    getCursos: (alunoId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield AlunoRepository_1.alunoRepository.getCursos(alunoId);
    }),
    getAlunoWithCursos: (alunoId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield AlunoRepository_1.alunoRepository.getAlunoComCursos(alunoId);
    })
};
