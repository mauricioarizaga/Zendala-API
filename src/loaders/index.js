const ExpressServer = require('./server/expressServer');
const config = require('../config');
const logger = require('./logger');
const db = require('../models/index.js');


module.exports = () => {
 
  db.sequelize.sync({force: false}).then(() => {
  });
    logger.info('DB loaded and connected');
    const server = new ExpressServer();
    logger.info('Express Loaded - API Reloaded ');

    server.start();
   
    logger.info(`#######################################
    El Server listening on port: ${config.port}
     #######################################
    `);
  
    //Tasks 

  }
