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
	const dcDB = sequelize.define(`data_${serverid}`, {
		name: {
			type: Sequelize.STRING,
		},
		guildid: {
			type: Sequelize.TEXT,
		},
        messages: {
			type: Sequelize.TEXT,
		},
		most_used_state: {
			type: Sequelize.TEXT,
		},
        most_played_game: {
			type: Sequelize.TEXT,
		},
        pictures_sent: {
			type: Sequelize.TEXT,
		},
        videos_sent: {
			type: Sequelize.TEXT,
		},
        voice_channel_joins: {
			type: Sequelize.TEXT,
		},
        time_spent_in_voice_channel: {
			type: Sequelize.TEXT,
		},
        commands_used: {
			type: Sequelize.TEXT,
		},
        role: {
			type: Sequelize.TEXT,
		},
        warnings: {
			type: Sequelize.TEXT,
		},
	})
	await dcDB.sync()
	}


module.exports = createServerModerationDB;
