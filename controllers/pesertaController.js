import { peserta } from '../database/db.js';

const pesertaController = {
  addPeserta: async (req, res) => {
    try {
      if (req.body.nama_peserta && req.body.alamat_peserta && req.body.no_hp_peserta && req.body.email_peserta) {
        const existingPeserta = await peserta.findOne({
          where: {
            nama_peserta: req.body.nama_peserta,
          },
        });

        if (existingPeserta) {
          res.json({
            status: 'Failed',
            statusCode: 400,
            message: 'Peserta with the same name already exists',
          });
        } else {
          const newPeserta = await peserta.create(req.body);
          res.json({
            status: 'Success',
            statusCode: 200,
            message: 'Peserta added',
            data: newPeserta,
          });
        }
      } else {
        res.json({
          status: 'Failed',
          statusCode: 400,
          message: 'Failed to add peserta',
        });
      }
    } catch (err) {
      res.status(500).json({
        status: 'Failed',
        statusCode: 500,
        message: 'Failed to add peserta',
      });
    }
  },
  getPeserta: async (req, res) => {
    try {
      const pesertaa = await peserta.findAll();
      res.json({
        status: 'success',
        statusCode: 200,
        message: 'Success get all peserta',
        data: pesertaa,
      });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        statusCode: 500,
        message: err,
      });
    }
  },

  getPesertaById: async (req, res) => {
    try {
      const pesertaById = await peserta.findByPk(req.params.id);
      if (pesertaById) {
        res.json({
          status: 'success',
          statusCode: 200,
          message: 'Success get peserta by id',
          data: pesertaById,
        });
      } else {
        res.status(404).json({
          status: 'error',
          statusCode: 404,
          message: 'Peserta not found',
        });
      }
    } catch (err) {
      res.status(500).json({
        status: 'error',
        statusCode: 500,
        message: err,
      });
    }
  },
  updatePeserta: async (req, res) => {
    try {
      const updatePeserta = await peserta.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (updatePeserta[0] === 0) {
        res.json({
          status: 'error',
          statusCode: 404,
          message: 'Peserta not found',
        });
      } else {
        res.json({
          status: 'success',
          statusCode: 200,
          message: 'Peserta updated',
          data: req.body,
        });
      }
    } catch (err) {
      res.status(500).json({
        status: 'error',
        statusCode: 500,
        message: err,
      });
    }
  },

  deletePeserta: async (req, res) => {
    try {
      const deletePeserta = await peserta.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (deletePeserta === 0) {
        res.json({
          status: 'error',
          statusCode: 404,
          message: 'Peserta not found',
        });
      } else {
        res.json({
          status: 'success',
          statusCode: 200,
          message: 'Peserta deleted',
        });
      }
    } catch (err) {
      res.status(500).json({
        status: 'error',
        statusCode: 500,
        message: err,
      });
    }
  },
};
export default pesertaController;
