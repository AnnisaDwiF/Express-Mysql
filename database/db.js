import { Sequelize } from 'sequelize';
import dbConfig from '../config/dbConfig.js';

import pesertaModel from '../models/pesertaModel.js';
import galeryModel from '../models/galeryModel.js';

const db = new Sequelize(dbConfig.name, dbConfig.username, dbConfig.password, dbConfig.options);

export const peserta = pesertaModel(db);
export const galery = galeryModel(db);

export default db;
