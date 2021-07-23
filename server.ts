import faker from 'faker';
import { DataTypes, Model, Sequelize } from 'sequelize';

class User extends Model { }
class Setting extends Model { }

const sequelize = new Sequelize('sqlite::memory');

User.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'T_USERS',
  },
);
Setting.init(
  {
    isAllowed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'T_SETTINGS',
  },
);

Setting.belongsTo(User, { foreignKey: 'fkUserId', as: 'Users' });
User.hasOne(Setting, { foreignKey: 'fkUserId', as: 'Settings' });

// CREATE SOME EXAMPLE USERS
/* CONNECT TO CWIRE
 * 
 * Please Checkout:
 * https://docs.cwire.io/docs/quick-start
 * https://github.com/cwire-io/nodejs-sdk
 * https://cwa.cwire.io/admin/apiKeys
 * 
 * Register under https://app.cwire.io
 * Install @cwire/nodejs-sdk
 * 
 */

console.log('Bootup...');