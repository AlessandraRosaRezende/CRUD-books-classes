import { DataTypes, Model } from 'sequelize';
import db from '.';

class User extends Model {
  declare id: number;

  declare email: string;

  declare password: string;

  declare name: string;

  declare role: string;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(100),
  },
  role: {
    type: DataTypes.STRING(100),
    defaultValue: 'user',
  },
}, {
  sequelize: db,
  modelName: 'users',
  timestamps: false,
});

export default User;
