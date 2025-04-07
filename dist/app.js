"use strict";
// const express = require('express');
// const { alunoController } = require('../dist/controller/AlunoController');
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AlunoController_1 = require("./controller/AlunoController");
const CursoController_1 = require("./controller/CursoController");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post('/alunos', AlunoController_1.alunoController.post);
app.get('/alunos', AlunoController_1.alunoController.get);
app.get('/alunos/:id', AlunoController_1.alunoController.getById);
app.get('/alunos/:id/cursos', AlunoController_1.alunoController.getComCursos);
app.put('/alunos/:id', AlunoController_1.alunoController.put);
app.delete('/alunos/:id', AlunoController_1.alunoController.delete);
app.post('/alunos/:alunoId/cursos/:cursoId', AlunoController_1.alunoController.addCurso);
app.delete('/alunos/:alunoId/cursos/:cursoId', AlunoController_1.alunoController.removeCurso);
// Rotas de Cursos
app.post('/cursos', CursoController_1.cursoController.post);
app.get('/cursos', CursoController_1.cursoController.get);
app.get('/cursos/:id', CursoController_1.cursoController.getById);
app.get('/cursos/:id/alunos', CursoController_1.cursoController.getComAlunos);
app.put('/cursos/:id', CursoController_1.cursoController.put);
app.delete('/cursos/:id', CursoController_1.cursoController.delete);
app.post('/cursos/:cursoId/alunos/:alunoId', CursoController_1.cursoController.addAluno);
app.delete('/cursos/:cursoId/alunos/:alunoId', CursoController_1.cursoController.removeAluno);
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
