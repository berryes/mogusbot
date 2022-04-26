const Sequelize = require('sequelize');

const sequelize = new Sequelize('mogusbot', 'bot', 'root', {
	host: 'localhost',
	dialect: 'mysql',
	logging: false,
	storage: 'database.mysql',
});

require('./models/quotes.js')(sequelize, Sequelize.DataTypes);

const force = process.argv.includes('--force') || process.argv.includes('-f');

sequelize.sync({ force }).then(async () => {
	console.log('Database synced');

	sequelize.close();
}).catch(console.error);