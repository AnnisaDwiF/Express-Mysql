import express from 'express';
import upload from '../helper/multerHelper.js';
import galeryController from '../controllers/galeryController.js';

const galeryRouter = express.Router();

galeryRouter.post('/', upload.single('photo'), galeryController.addGalery);
galeryRouter.get('/', galeryController.showGallery);
galeryRouter.get('/:id', galeryController.findPhoto);

export default galeryRouter;
