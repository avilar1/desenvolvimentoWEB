import { Request, Response } from 'express';
import { alunoService } from '../service/AlunoService';

export const alunoController = {
    post: (req: Request, res: Response) => {
        const { nome, idade } = req.body;
        alunoService.save({ id: alunoService.tamanho(), nome, idade });
        res.status(201).send();
    },

    get: (req: Request, res: Response) => {
        res.json(alunoService.findAll());
    },

    getById: (req: Request, res: Response) => {
        const aluno = alunoService.findById(parseInt(req.params.id));
        if (aluno) {
            res.json(aluno);
        } else {
            res.status(404).send("Aluno não encontrado");
        }
    },

    put: (req: Request, res: Response) => {
        const { nome, idade } = req.body;
        const aluno = alunoService.update(parseInt(req.params.id), { 
            id: parseInt(req.params.id), 
            nome, 
            idade 
        });
        if (aluno) {
            res.json(aluno);
        } else {
            res.status(404).send("Aluno não encontrado");
        }
    },

    delete: (req: Request, res: Response) => {
        const deleted = alunoService.delete(parseInt(req.params.id));
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).send("Aluno não encontrado");
        }
    },
    matricular: (req: Request, res: Response) => {
        const alunoId = parseInt(req.params.alunoId);
        const cursoId = parseInt(req.params.cursoId);
        
        const alunoAtualizado = alunoService.matricular(alunoId, cursoId);
        
        if (alunoAtualizado) {
            res.status(200).json(alunoAtualizado);
        } else {
            res.status(404).send("Aluno ou curso não encontrado");
        }
    },

    desmatricular: (req: Request, res: Response) => {
        const alunoId = parseInt(req.params.id);
        const alunoAtualizado = alunoService.desmatricular(alunoId);
        
        if (alunoAtualizado) {
            res.status(200).json(alunoAtualizado);
        } else {
            res.status(404).send("Aluno não encontrado");
        }
    },

    getComCurso: (req: Request, res: Response) => {
        const alunoId = parseInt(req.params.id);
        const alunoComCurso = alunoService.getAlunoComCurso(alunoId);
        
        if (alunoComCurso) {
            res.status(200).json(alunoComCurso);
        } else {
            res.status(404).send("Aluno não encontrado");
        }
    }
};