import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/sequelize';
import Aluno from './Aluno';

interface CursoAttributes {
  id?: number;
  nome: string;
  periodo: string;
  createdAt?: Date;
  updatedAt?: Date;
}

class Curso extends Model<CursoAttributes> implements CursoAttributes {
  removeAluno(aluno: Aluno) {
      throw new Error("Method not implemented.");
  }
  addAluno(aluno: Aluno) {
      throw new Error("Method not implemented.");
  }
  public id!: number;
  public nome!: string;
  public periodo!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Curso.init(
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
    periodo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'curso',
    tableName: 'cursos',
  }
);

export default Curso;