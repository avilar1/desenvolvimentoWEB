import { Aluno } from "../model/Aluno";
import { alunoRepository } from "../repository/AlunoRepository";
import { cursoRepository } from "../repository/CursoRepository";
import { cursoService} from "./CursoService";

export const alunoService = {
    findAll: () => {
        return alunoRepository.findAll();
    },
    findById: (id: number) => {
        return alunoRepository.findById(id);
    },
    save: (aluno: Aluno) => {
        return alunoRepository.save(aluno);
    },
    update: (id: number, aluno: Aluno) => {
        return alunoRepository.update(id, aluno);
    },
    delete: (id: number) => {
        return alunoRepository.delete(id);
    },
    tamanho: () => {
        return alunoRepository.tamanho();
    },
    matricular: (alunoId: number, cursoId: number) => {
        const aluno = alunoRepository.findById(alunoId);
        const curso = cursoRepository.findById(cursoId);
        
        if (!aluno || !curso) return null;
        
        aluno.cursoId = cursoId;
        return alunoRepository.update(alunoId, aluno);
    },
    desmatricular: (alunoId: number) => {
        const aluno = alunoRepository.findById(alunoId);
        if (!aluno) return null;
        
        aluno.cursoId = undefined;
        return alunoRepository.update(alunoId, aluno);
    },

    getAlunoComCurso: (alunoId: number) => {
        const aluno = alunoRepository.findById(alunoId);
        if (!aluno) return null;

        const curso = aluno.cursoId ? cursoService.findById(aluno.cursoId) : undefined;
        
        return {
            ...aluno,
            curso
        };
    },
    
}