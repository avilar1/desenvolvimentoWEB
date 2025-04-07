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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.alunoRepository = void 0;
const db_1 = __importDefault(require("../db"));
//const alunos: Aluno[] = [];
exports.alunoRepository = {
    findAll: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield db_1.default.select().from('aluno');
    }),
    findById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield (0, db_1.default)('aluno').where({ id }).first();
    }),
    save: (aluno) => __awaiter(void 0, void 0, void 0, function* () {
        const [id] = yield (0, db_1.default)('aluno').insert(aluno).returning('id');
        return id;
    }),
    update: (id, aluno) => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, db_1.default)('aluno').where({ id }).update(aluno);
    }),
    delete: (id) => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, db_1.default)('aluno').where({ id }).del();
    }),
    tamanho: () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, db_1.default)('aluno').count('* as count').first();
        return (result === null || result === void 0 ? void 0 : result.count) || 0;
    }),
    addCurso: (alunoId, cursoId) => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, db_1.default)('aluno_curso').insert({
            aluno_id: alunoId,
            curso_id: cursoId
        });
    }),
    removeCurso: (alunoId, cursoId) => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, db_1.default)('aluno_curso')
            .where({ aluno_id: alunoId, curso_id: cursoId })
            .del();
    }),
    getCursos: (alunoId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield (0, db_1.default)('curso')
            .join('aluno_curso', 'curso.id', 'aluno_curso.curso_id')
            .where('aluno_curso.aluno_id', alunoId);
    }),
    getAlunoComCursos: (alunoId) => __awaiter(void 0, void 0, void 0, function* () {
        const aluno = yield (0, db_1.default)('aluno').where({ id: alunoId }).first();
        if (!aluno)
            return null;
        const cursos = yield (0, db_1.default)('curso')
            .join('aluno_curso', 'curso.id', 'aluno_curso.curso_id')
            .where('aluno_curso.aluno_id', alunoId);
        return Object.assign(Object.assign({}, aluno), { cursos });
    })
};
