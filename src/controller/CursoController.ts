import { Request, Response } from 'express';
import { cursoService } from '../service/CursoService';

import { cursoRepository } from '../repository/CursoRepository';

export const cursoController = {
    post: (req: Request, res: Response) => {
        const { nome, periodo} = req.body;
        cursoService.save({ id: cursoRepository.tamanho(), nome, periodo});
        res.status(201).send();
    },
    get: (req: Request, res: Response) => {
        res.json(cursoService.findAll());
    },
    getById: (req: Request, res: Response) => {
        const curso = cursoService.findById(parseInt(req.params.id));
        if (curso) {
            res.json(curso);
        } else {
            res.status(404).send("Curso não encontrado");
        }
    },
    put: (req: Request, res: Response) => {
        const { nome, periodo} = req.body;
        const curso = cursoService.update(parseInt(req.params.id), { 
            id: parseInt(req.params.id), 
            nome, 
            periodo
        });
        if (curso) {
            res.json(curso);
        } else {
            res.status(404).send("Curso não encontrado");
        }
    },
    delete: (req: Request, res: Response) => {
        const deleted = cursoService.delete(parseInt(req.params.id));
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).send("Curso não encontrado");
        }
    },
}