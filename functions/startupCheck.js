require("dotenv").config();

const Sequelize = require('sequelize');
const sequelize = new Sequelize(`${process.env.DB_NAME}`, `${process.env.DB_USER}`, `${process.env.DB_PASS}`, {
	host: `${process.env.DB_LOCATION}`,
	dialect: `${process.env.DB_TYPE}`,
	logging: false,
	// SQLite only
	storage: `${process.env.DB_STORAGE}.${process.env.DB_TYPE}`,
});

processENV = [process.env.DB_LOCATION,process.env.DB_NAME]
check = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        throw new Error(`Unable to establish connection with the database: ${error}`);
      }
    if (!process.env.API_KEY)  throw new Error("no api key attached in .env"); 
    if (!process.env.LOGGING)  throw new Error("logging is not filled out in .env"); 
    if (!process.env.PREFIX)  throw new Error("no prefix set in .env"); 
    if (!process.env.ADMIN_ROLE)  throw new Error("no admin role given in .env"); 
    if (!process.env.API_PORT)  throw new Error("no api port in .env"); 
    if (!process.env.DB_NAME)  throw new Error("database name not set in .env"); 
    if (!process.env.DB_USER)  throw new Error("database user not set in .env"); 
    if (!process.env.DB_LOCATION)  throw new Error("database location not given in .env"); 
    if (!process.env.DB_TYPE)  throw new Error("database type not given in .env"); 
    if (!process.env.DB_STORAGE)  throw new Error("database storage not set in .env"); 
    if (!process.env.DB_PORT)  throw new Error("database port not set in .env"); 
    if (!process.env.CAT_API_KEY)  throw new Error("no cat api key given in .env"); 
}
module.exports = check;