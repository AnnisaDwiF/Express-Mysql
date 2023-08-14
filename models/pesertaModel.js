import { DataTypes } from 'sequelize';

const pesertaModel = (sequelize) =>
  sequelize.define('peserta', {
    nama_peserta: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alamat_peserta: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    no_hp_peserta: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email_peserta: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true, // This validates the email format using a built-in Sequelize validator
        customValidator(value) {
          if (!/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/.test(value)) {
            throw new Error('Invalid email format');
          }
        },
      },
    },
  });

export default pesertaModel;
