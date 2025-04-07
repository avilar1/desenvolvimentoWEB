// const express = require('express');
// const { alunoController } = require('../dist/controller/AlunoController');

import express from 'express';
import { alunoController } from './controller/AlunoController';
import { cursoController } from './controller/CursoController';

import 'dotenv/config';

const app = express();
app.use(express.json());


app.post('/alunos', alunoController.post);
app.get('/alunos', alunoController.get);
app.get('/alunos/:id', alunoController.getById);
app.get('/alunos/:id/cursos', alunoController.getComCursos);
app.put('/alunos/:id', alunoController.put);
app.delete('/alunos/:id', alunoController.delete);
app.post('/alunos/:alunoId/cursos/:cursoId', alunoController.addCurso);
app.delete('/alunos/:alunoId/cursos/:cursoId', alunoController.removeCurso);


app.post('/cursos', cursoController.post);
app.get('/cursos', cursoController.get);
app.get('/cursos/:id', cursoController.getById);
app.get('/cursos/:id/alunos', cursoController.getComAlunos);
app.put('/cursos/:id', cursoController.put);
app.delete('/cursos/:id', cursoController.delete);
app.post('/cursos/:cursoId/alunos/:alunoId', cursoController.addAluno);
app.delete('/cursos/:cursoId/alunos/:alunoId', cursoController.removeAluno);


app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});