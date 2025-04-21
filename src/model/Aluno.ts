import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/sequelize';
import Curso from './Curso';

interface AlunoAttributes {
  id?: number;
  nome: string;
  idade: number;
  createdAt?: Date;
  updatedAt?: Date;
}

class Aluno extends Model<AlunoAttributes> implements AlunoAttributes {
  removeCurso(curso: Curso) {
      throw new Error("Sequelize não implementou esse método.");
  }
  addCurso(curso: Curso) {
      throw new Error("Sequelize não implementou esse método.");
  }
  public id!: number;
  public nome!: string;
  public idade!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

type AlunoCreateInput = {
    nome: string;
    idade: number;
};

Aluno.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'aluno',
    tableName: 'alunos',
  }
);

export default Aluno;
export type { AlunoCreateInput };