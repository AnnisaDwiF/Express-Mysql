import { Sequelize } from 'sequelize';
import dbConfig from '../config/dbConfig.js';

import pesertaModel from '../models/pesertaModel.js';

const db = new Sequelize(dbConfig.name, dbConfig.username, dbConfig.password, dbConfig.options);

export const peserta = pesertaModel(db);

export default db;
