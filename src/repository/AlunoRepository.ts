import { Aluno } from "../model/Aluno";

const alunos: Aluno[] = [];

export const alunoRepository = {
    findAll: () => {
        return alunos;
    },
    findById: (id: number) => {
        return alunos.find(aluno => aluno.id === id);
    },
    save: (aluno: Aluno) => {
        alunos.push(aluno);
        return aluno;
    },
    update: (id: number, aluno: Aluno) => {
        const index = alunos.findIndex(a => a.id === id);
        if (index !== -1) {
            alunos[index] = aluno;
            return aluno;
        }
        return null;
    },
    delete: (id: number) => {
        const index = alunos.findIndex(a => a.id === id);
        if (index !== -1) {
            return alunos.splice(index, 1)[0];
        }
        return null;
    },
    tamanho: () => {
        return alunos.length;
    },
    }
