const config = require("../config/index");
const Sequelize = require("sequelize");
const sequelize =  new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect
  });


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.customers = require('./Customers.js')(sequelize, Sequelize);
db.users = require('./Users.js')(sequelize, Sequelize)
db.charges = require("./Charges.js")(sequelize, Sequelize);


module.exports = db;