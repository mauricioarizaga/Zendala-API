const dotenv = require('dotenv');

const envFound = dotenv.config();
if(!envFound){
    throw new Error("Couldn't find .env file.");
}

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    port: process.env.PORT,
    api: {
        prefix: process.env.PREFIX,
        url: process.env.URL_API
    },
    log: {
        level: process.env.LOG_LEVEL
    },
    swagger: {
        path: '/documentation'
    },
    database: process.env.DATABASE,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    auth: {
        secret : process.env.AUTH_SECRET,
        ttl: process.env.AUTH_TTL
    },
    urlopenpay: process.env.URL_OPEN_PAY,
    open_pay_id: process.env.OPEN_PAY_ID,
    open_pay_key_private: process.env.OPEN_PAY_KEY_PRIVATE,
    open_pay_key_public:process.env.OPEN_PAY_KEY_PUBLIC

    
}
