/*
Professor: não aguarde muita elaboração nos meus exercícios, 
visto que também estou aprendendo como os colegas.
Os trabalhos não representam a qualidade do trabalho final.
*/


const express = require("express");

const app = express() ;

app.use(express.json());

//const livros = [];
const alunos = [];
const cursos = [];

app.get("/exemplo", exemplo);

function exemplo(req, res){
    console. log("Nossa primeira API 2");
    return res.json("Nossa primeira API 2");
}


/*
ALUNOS
*/


app.post("/alunos", (req, res) => {
    const {nome, idade} = req.body;
    alunos.push({nome, idade, id: alunos.length});

    res.status(201).send();
});


app.get("/alunos", (_, res) => {
res.status(200).json(alunos);

})

app.get("/alunos/:id", (req, res) => {
    const aluno = alunos.find(aluno => aluno.id == req.params.id);
    if(!aluno){
        res.status(404).send
    }

    res.status(200).json(alunos[req.params.id]);
    
    })


app.put("/alunos/:id", (req, res) => {
    const {nome, idade} = req.body;
    
    alunos[req.params.id] = {nome, idade, id: req.params.id};
    
    res.status(200).send();

})

app.patch("/alunos/:id", (req, res) => {
    const {nome} = req.body;
    const id = req.params.id;
    const aluno = alunos.find(aluno => aluno.id == id);
    //const aluno = alunos[id];

    if(nome){
        aluno.nome = nome;
        res.status(200).send();
    }else{
        res.status(404).send();
    } 
})

app.delete("/alunos/:id", (req, res) => {
    alunos.splice(req.params.id, 1);
    res.status(200).send();
})

/*
CURSOS
*/

app.post("/cursos", (req, res) => {
    const {nome, periodo} = req.body;
    cursos.push({nome, periodo, id: cursos.length});

    res.status(201).send();
});


app.get("/cursos", (_, res) => {
res.status(200).json(cursos);

})

app.get("/cursos/:id", (req, res) => {
    let curso = cursos.find(curso => curso.id == req.params.id);
    
    if(!curso){
        res.status(404).send
    }
    res.status(200).json(cursos[req.params.id]);
    
    })


app.put("/cursos/:id", (req, res) => {
    const {nome, periodo} = req.body;
    
    cursos[req.params.id] = {nome, periodo, id: req.params.id};
    
    res.status(200).send();

})

app.patch("/cursos/:id", (req, res) => {
    const {nome} = req.body;
    const id = req.params.id;
    const curso = cursos.find(curso => curso.id == id);
    //const aluno = alunos[id];

    if(nome){
        curso.nome = nome;
        res.status(200).send();
    }else{
        res.status(404).send();
    } 
})

app.delete("/cursos/:id", (req, res) => {
    cursos.splice(req.params.id, 1);
    res.status(200).send();
})



app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});