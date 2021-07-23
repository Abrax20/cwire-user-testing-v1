import faker from 'faker';
import { DataTypes, Model, Sequelize } from 'sequelize';

// IMPORT CWIRE here

class User extends Model { }
class Setting extends Model { }

const sequelize = new Sequelize('sqlite::memory', { logging: false });

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

(async () => {
  const promises = [];
  for (let index = 0; index < 5000; index++) {

    promises.push(User.create({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
    }));
  }
  await Promise.all(promises);

  // IMPORT Parse your sequalize models to cwire
  // Init the CWIRE client
  // Add cwire action to open https://google.com

}) 

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