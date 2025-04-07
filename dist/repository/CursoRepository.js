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
exports.cursoRepository = void 0;
const db_1 = __importDefault(require("../db"));
//const cursos: Curso[] = [];
exports.cursoRepository = {
    findAll: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield db_1.default.select().from('curso');
    }),
    findById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield (0, db_1.default)('curso').where({ id }).first();
    }),
    save: (curso) => __awaiter(void 0, void 0, void 0, function* () {
        const [id] = yield (0, db_1.default)('curso').insert(curso).returning('id');
        return id;
    }),
    update: (id, curso) => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, db_1.default)('curso').where({ id }).update(curso);
        return yield (0, db_1.default)('curso').where({ id }).first();
    }),
    delete: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield (0, db_1.default)('curso').where({ id }).del();
    }),
    // Métodos para relação com alunos
    addAluno: (cursoId, alunoId) => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, db_1.default)('aluno_curso').insert({
            curso_id: cursoId,
            aluno_id: alunoId
        });
    }),
    removeAluno: (cursoId, alunoId) => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, db_1.default)('aluno_curso')
            .where({ curso_id: cursoId, aluno_id: alunoId })
            .del();
    }),
    getAlunos: (cursoId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield (0, db_1.default)('aluno')
            .join('aluno_curso', 'aluno.id', 'aluno_curso.aluno_id')
            .where('aluno_curso.curso_id', cursoId);
    }),
    getCursoComAlunos: (cursoId) => __awaiter(void 0, void 0, void 0, function* () {
        const curso = yield (0, db_1.default)('curso').where({ id: cursoId }).first();
        if (!curso)
            return null;
        const alunos = yield (0, db_1.default)('aluno')
            .join('aluno_curso', 'aluno.id', 'aluno_curso.aluno_id')
            .where('aluno_curso.curso_id', cursoId);
        return Object.assign(Object.assign({}, curso), { alunos });
    })
};
