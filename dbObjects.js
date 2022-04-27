const Sequelize = require('sequelize');

const sequelize = new Sequelize('mogusbot', 'bot', 'root', {
	host: 'localhost',
	dialect: 'mysql',
	logging: false,
	storage: 'database.mysql',
});

const quotes = require('./models/quotes.js')(sequelize, Sequelize.DataTypes);


module.exports = { quotes };