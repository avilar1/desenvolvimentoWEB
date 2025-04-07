import { Curso } from "../model/Curso";
import database from '../db';

//const cursos: Curso[] = [];

export const cursoRepository = {
    findAll: async () => {
        return await database.select().from('curso');
    },

    findById: async (id: number) => {
        return await database('curso').where({ id }).first();
    },

    save: async (curso: Omit<Curso, 'id'>) => {
        const [id] = await database('curso').insert(curso).returning('id');
        return id;
    },

    update: async (id: number, curso: Partial<Curso>) => {
        await database('curso').where({ id }).update(curso);
        return await database('curso').where({ id }).first();
    },

    delete: async (id: number) => {
        return await database('curso').where({ id }).del();
    },

    // Métodos para relação com alunos
    addAluno: async (cursoId: number, alunoId: number) => {
        await database('aluno_curso').insert({
            curso_id: cursoId,
            aluno_id: alunoId
        });
    },

    removeAluno: async (cursoId: number, alunoId: number) => {
        await database('aluno_curso')
            .where({ curso_id: cursoId, aluno_id: alunoId })
            .del();
    },

    getAlunos: async (cursoId: number) => {
        return await database('aluno')
            .join('aluno_curso', 'aluno.id', 'aluno_curso.aluno_id')
            .where('aluno_curso.curso_id', cursoId);
    },

    getCursoComAlunos: async (cursoId: number) => {
        const curso = await database('curso').where({ id: cursoId }).first();
        if (!curso) return null;

        const alunos = await database('aluno')
            .join('aluno_curso', 'aluno.id', 'aluno_curso.aluno_id')
            .where('aluno_curso.curso_id', cursoId);

        return {
            ...curso,
            alunos
        };
    }
};