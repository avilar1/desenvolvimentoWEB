import { Request, Response } from 'express';
import { cursoService } from '../service/CursoService';

import { cursoRepository } from '../repository/CursoRepository';
import Curso from '../model/Curso';

export const cursoController = {
    post: async (req: Request, res: Response) => {
        try {
            const { nome, periodo } = req.body;
            const curso: Curso = { nome, periodo };
            const id = await cursoService.save(curso);
            res.status(201).json({ id, nome, periodo });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar curso' });
        }
    },
    get: async (req: Request, res: Response) => {
        try {
            const cursos = await cursoService.findAll();
            res.json(cursos);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar cursos' });
        }
    },
    getById: async (req: Request, res: Response) => {
        try {
            const curso = await cursoService.findById(parseInt(req.params.id));
            if (curso) {
                res.json(curso);
            } else {
                res.status(404).send("Curso não encontrado");
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar curso' });
        }
    },
    getComAlunos: async (req: Request, res: Response) => {
        try {
            const curso = await cursoService.getCursoComAlunos(parseInt(req.params.id));
            if (curso) {
                res.json(curso);
            } else {
                res.status(404).send("Curso não encontrado");
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar curso com alunos' });
        }
    },
    put: async (req: Request, res: Response) => {
        try {
            const curso = await cursoService.update(parseInt(req.params.id), req.body);
            if (curso) {
                res.json(curso);
            } else {
                res.status(404).send("Curso não encontrado");
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar curso' });
        }
    },
    delete: async (req: Request, res: Response) => {
        try {
            const deleted = await cursoService.delete(parseInt(req.params.id));
            if (deleted) {
                res.status(204).send();
            } else {
                res.status(404).send("Curso não encontrado");
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar curso' + error });
        }
    },
    addAluno: async (req: Request, res: Response) => {
        try {
            await cursoService.addAluno(
                parseInt(req.params.cursoId),
                parseInt(req.params.alunoId)
            );
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: 'Erro ao adicionar aluno ao curso' + error});
        }
    },
    removeAluno: async (req: Request, res: Response) => {
        try {
            await cursoService.removeAluno(
                parseInt(req.params.cursoId),
                parseInt(req.params.alunoId)
            );
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: 'Erro ao remover aluno do curso' });
        }
    }
}