import { Request, Response } from 'express';
import { alunoService } from '../service/AlunoService';
import Aluno from '../model/Aluno';
type AlunoCreateInput = import('../model/Aluno').AlunoCreateInput;

export const alunoController = {
    post: async (req: Request, res: Response) => {
        try {
            const { nome, idade } = req.body;
            //const aluno: AlunoCreateInput = { nome, idade };
            const aluno: Aluno = { nome, idade };
            const id = await alunoService.save(aluno);
            res.status(201).json({ id, nome, idade });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar aluno' });
        }
    },

    get: async (req: Request, res: Response) => {
        try {
            const alunos = await alunoService.findAll();
            res.json(alunos);
        } catch (error) {
            res.status(500).json({ error: `Erro ao buscar alunos: ${error}` });
        }
    },

    getById: async (req: Request, res: Response) => {
        try {
            const aluno = await alunoService.findById(parseInt(req.params.id));
            if (aluno !== null) {
                res.json(aluno);
            } else {
                res.status(404).send("Aluno não encontrado");
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar aluno' });
        }
    },
    getComCursos: async (req: Request, res: Response) => {
        try {
            const aluno = await alunoService.getAlunoWithCursos(parseInt(req.params.id));
            if (aluno) {
                res.json(aluno);
            } else {
                res.status(404).send("Aluno não encontrado");
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar aluno com cursos' });
        }
    },

    put: async (req: Request, res: Response) => {
        try {
            const aluno = await alunoService.update(parseInt(req.params.id), req.body);
            if (aluno !== null) {
                res.json(aluno);
            } else {
                res.status(404).send("Aluno não encontrado");
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar aluno' });
        }
    },

    delete: async (req: Request, res: Response) => {
        try {
            const deleted = await alunoService.delete(parseInt(req.params.id));
            if (deleted !== null) {
                res.status(204).send();
            } else {
                res.status(404).send("Aluno não encontrado");
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar aluno' });
        }
    },
    addCurso: async (req: Request, res: Response) => {
        try {
            await alunoService.addCurso(
                parseInt(req.params.alunoId),
                parseInt(req.params.cursoId)
            );
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: 'Erro ao matricular aluno no curso' });
        }
    },

    removeCurso: async (req: Request, res: Response) => {
        try {
            await alunoService.removeCurso(
                parseInt(req.params.alunoId),
                parseInt(req.params.cursoId)
            );
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: 'Erro ao desmatricular aluno do curso' });
        }
    }
};