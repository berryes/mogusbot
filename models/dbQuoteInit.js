require("dotenv").config();

// Create database 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(`${process.env.DB_NAME}`, `${process.env.DB_USER}`, `${process.env.DB_PASS}`, {
	host: `${process.env.DB_LOCATION}`,
	dialect: `${process.env.DB_TYPE}`,
	logging: false,
	// SQLite only
	storage: `${process.env.DB_STORAGE}.${process.env.DB_TYPE}`,
});


const createServerQuoteDB = async (serverid) =>{
const dcDB = sequelize.define(`quotes_${serverid}`, {
	quote: {
		type: Sequelize.STRING,
	},
    addedBy: {
        type: Sequelize.TEXT,
    }
})
await dcDB.sync()
}

module.exports = createServerQuoteDB;
