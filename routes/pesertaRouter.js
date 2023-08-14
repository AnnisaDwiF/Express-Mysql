import express from 'express';
import pesertaController from '../controllers/pesertaController.js';

const pesertaRouter = express.Router();

pesertaRouter.get('/', pesertaController.getPeserta);
pesertaRouter.get('/:id', pesertaController.getPesertaById);
pesertaRouter.post('/', pesertaController.addPeserta);
pesertaRouter.put('/:id', pesertaController.updatePeserta);
pesertaRouter.delete('/:id', pesertaController.deletePeserta);

export default pesertaRouter;
