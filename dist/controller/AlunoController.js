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
exports.alunoController = void 0;
const AlunoService_1 = require("../service/AlunoService");
exports.alunoController = {
    post: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { nome, idade } = req.body;
            const aluno = { nome, idade };
            const id = yield AlunoService_1.alunoService.save(aluno);
            res.status(201).json({ id, nome, idade });
        }
        catch (error) {
            res.status(500).json({ error: 'Erro ao criar aluno' });
        }
    }),
    get: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const alunos = yield AlunoService_1.alunoService.findAll();
            res.json(alunos);
        }
        catch (error) {
            res.status(500).json({ error: 'Erro ao buscar alunos' });
        }
    }),
    getById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const aluno = yield AlunoService_1.alunoService.findById(parseInt(req.params.id));
            if (aluno !== null) {
                res.json(aluno);
            }
            else {
                res.status(404).send("Aluno não encontrado");
            }
        }
        catch (error) {
            res.status(500).json({ error: 'Erro ao buscar aluno' });
        }
    }),
    getComCursos: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const aluno = yield AlunoService_1.alunoService.getAlunoWithCursos(parseInt(req.params.id));
            if (aluno) {
                res.json(aluno);
            }
            else {
                res.status(404).send("Aluno não encontrado");
            }
        }
        catch (error) {
            res.status(500).json({ error: 'Erro ao buscar aluno com cursos' });
        }
    }),
    put: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const aluno = yield AlunoService_1.alunoService.update(parseInt(req.params.id), req.body);
            if (aluno !== null) {
                res.json(aluno);
            }
            else {
                res.status(404).send("Aluno não encontrado");
            }
        }
        catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar aluno' });
        }
    }),
    delete: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const deleted = yield AlunoService_1.alunoService.delete(parseInt(req.params.id));
            if (deleted !== null) {
                res.status(204).send();
            }
            else {
                res.status(404).send("Aluno não encontrado");
            }
        }
        catch (error) {
            res.status(500).json({ error: 'Erro ao deletar aluno' });
        }
    }),
    addCurso: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield AlunoService_1.alunoService.addCurso(parseInt(req.params.alunoId), parseInt(req.params.cursoId));
            res.status(204).send();
        }
        catch (error) {
            res.status(500).json({ error: 'Erro ao matricular aluno no curso' });
        }
    }),
    removeCurso: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield AlunoService_1.alunoService.removeCurso(parseInt(req.params.alunoId), parseInt(req.params.cursoId));
            res.status(204).send();
        }
        catch (error) {
            res.status(500).json({ error: 'Erro ao desmatricular aluno do curso' });
        }
    })
};
