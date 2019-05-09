const dotenv = require('dotenv');
const path = require('path');

if (!process.env.MYSQL_HOST) {
    dotenv.config({ path: path.join(__dirname, '..', '.env') });
}
module.exports = {
    username: process.env.MYSQL_HOST,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB,
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    dialect: 'mysql'
};
