import { galery } from '../database/db.js';

const galeryController = {
  addGalery: async (req, res) => {
    try {
      const data = {
        title: req.file.filename,
        // url: req.file.destination,
        url: req.protocol + '://' + req.get('host') + '/' + req.file.filename,
      };
      const newGalery = await galery.create(data);
      if (newGalery) {
        res.json({
          status: 'success',
          statusCode: 200,
          message: 'Success add galery',
          data: newGalery,
        });
      }
    } catch (err) {
      res.json({
        status: 'error',
        statusCode: 500,
        message: err.message,
      });
    }
  },

  showGallery: async (req, res) => {
    try {
      const data = await galery.findAll();
      res.json({
        status: 'success',
        statusCode: 200,
        message: 'Success show galery',
        data: data,
      });
    } catch (err) {
      res.json({
        status: 'error',
        statusCode: 500,
        message: err.message,
      });
    }
  },

  findPhoto: async (req, res) => {
    try {
      const findPhoto = await galery.findByPk(req.params.id);
      if (findPhoto) {
        res.json({
          status: 'success',
          statusCode: 200,
          message: 'Success find photo',
          data: findPhoto,
        });
      } else {
        res.json({
          status: 'error',
          statusCode: 404,
          message: 'Photo not found',
        });
      }
    } catch (err) {
      res.json({
        status: 'error',
        statusCode: 500,
        message: err.message,
      });
    }
  },
};
export default galeryController;
