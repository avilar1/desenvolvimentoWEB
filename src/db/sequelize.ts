import { Sequelize } from 'sequelize';

import path from 'path';
import 'dotenv/config';

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;
const currentDir = path.resolve(__dirname);


const sequelize = new Sequelize({
  dialect: 'postgres', 
  host: DB_HOST,
  port: parseInt(DB_PORT || '5432'),
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  define: {
    timestamps: true, 
    underscored: true, 
  },
});

export default sequelize;