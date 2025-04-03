"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alunoController = void 0;
const AlunoService_1 = require("../service/AlunoService");
exports.alunoController = {
    post: (req, res) => {
        const { nome, idade } = req.body;
        AlunoService_1.alunoService.save({ id: AlunoService_1.alunoService.tamanho(), nome, idade });
        res.status(201).send();
    },
    get: (req, res) => {
        res.json(AlunoService_1.alunoService.findAll());
    },
    getById: (req, res) => {
        const aluno = AlunoService_1.alunoService.findById(parseInt(req.params.id));
        if (aluno) {
            res.json(aluno);
        }
        else {
            res.status(404).send("Aluno não encontrado");
        }
    },
    put: (req, res) => {
        const { nome, idade } = req.body;
        const aluno = AlunoService_1.alunoService.update(parseInt(req.params.id), {
            id: parseInt(req.params.id),
            nome,
            idade
        });
        if (aluno) {
            res.json(aluno);
        }
        else {
            res.status(404).send("Aluno não encontrado");
        }
    },
    delete: (req, res) => {
        const deleted = AlunoService_1.alunoService.delete(parseInt(req.params.id));
        if (deleted) {
            res.status(204).send();
        }
        else {
            res.status(404).send("Aluno não encontrado");
        }
    }
};
