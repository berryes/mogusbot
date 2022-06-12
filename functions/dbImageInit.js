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

const createServerModerationDB = async (serverid) =>{
	const dcDB = sequelize.define(`images_${serverid}`, {
		image_id: {
			type: Sequelize.STRING,
		},
        addedby: {
			type: Sequelize.STRING,
		},
	})
	await dcDB.sync()
	}


module.exports = createServerModerationDB;
