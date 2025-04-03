"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AlunoController_1 = require("./controller/AlunoController");
const express = require('express');
//const { alunoController } = require('./controller/AlunoController');
const app = express();
app.use(express.json());
app.post('/alunos', AlunoController_1.alunoController.post);
app.get('/alunos', AlunoController_1.alunoController.get);
app.get('/alunos/:id', AlunoController_1.alunoController.getById);
app.put('/alunos/:id', AlunoController_1.alunoController.put);
app.delete('/alunos/:id', AlunoController_1.alunoController.delete);
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
