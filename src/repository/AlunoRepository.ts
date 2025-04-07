import { Aluno } from "../model/Aluno";

import database from '../db';

//const alunos: Aluno[] = [];

export const alunoRepository = {
    findAll: async () => {
        return await database.select().from('aluno');
    },
    findById: async (id: number) => {
        return await database('aluno').where({ id }).first();
    },
    save: async (aluno: Aluno) => {
        const [id] = await database('aluno').insert(aluno).returning('id');
        return id;
    },
    update: async (id: number, aluno: Aluno) => {
        await database('aluno').where({ id }).update(aluno);
    },
    delete: async (id: number) => {
        await database('aluno').where({ id }).del();
    },
    tamanho: async () => {
        const result = await database('aluno').count('* as count').first();
        return result?.count || 0;
    },
    addCurso: async (alunoId: number, cursoId: number) => {
        await database('aluno_curso').insert({
            aluno_id: alunoId,
            curso_id: cursoId
        });
    },
    removeCurso: async (alunoId: number, cursoId: number) => {
        await database('aluno_curso')
            .where({ aluno_id: alunoId, curso_id: cursoId })
            .del();
    },

    getCursos: async (alunoId: number) => {
        return await database('curso')
            .join('aluno_curso', 'curso.id', 'aluno_curso.curso_id')
            .where('aluno_curso.aluno_id', alunoId);
    },

    getAlunoComCursos: async (alunoId: number) => {
        const aluno = await database('aluno').where({ id: alunoId }).first();
        if (!aluno) return null;

        const cursos = await database('curso')
            .join('aluno_curso', 'curso.id', 'aluno_curso.curso_id')
            .where('aluno_curso.aluno_id', alunoId);

        return {
            ...aluno,
            cursos
        };
    }
    }
