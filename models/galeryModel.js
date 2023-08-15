import { DataTypes } from 'sequelize';

const galeryModel = (sequelize) =>
  sequelize.define('galeries', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
export default galeryModel;
