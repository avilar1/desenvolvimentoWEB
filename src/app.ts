// const express = require('express');
// const { alunoController } = require('../dist/controller/AlunoController');

import express from 'express';
import { alunoController } from './controller/AlunoController';
import { cursoController } from './controller/CursoController';


const app = express();
app.use(express.json());


app.post('/alunos', alunoController.post);
app.get('/alunos', alunoController.get);
app.get('/alunos/:id', alunoController.getById);
app.get('/alunos/:id/curso', alunoController.getComCurso); 
app.put('/alunos/:id', alunoController.put);
app.delete('/alunos/:id', alunoController.delete);
app.post('/alunos/:alunoId/matricular/:cursoId', alunoController.matricular);
app.post('/alunos/:id/desmatricular', alunoController.desmatricular);


app.post('/cursos', cursoController.post);
app.get('/cursos', cursoController.get);
app.get('/cursos/:id', cursoController.getById);
app.put('/cursos/:id', cursoController.put);
app.delete('/cursos/:id', cursoController.delete);


app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});