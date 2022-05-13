/* const Sequelize = require('sequelize');
const sequelize = new Sequelize(`${process.env.DB_NAME}`, `${process.env.DB_USER}`, `${process.env.DB_PASS}`, {
	host: `${process.env.DB_LOCATION}`,
	dialect: `${process.env.DB_TYPE}`,
	logging: false,
	// SQLite only
	storage: `${process.env.DB_STORAGE}.${process.env.DB_TYPE}`,
});
const Quotes = sequelize.define('quotes', {
	quote: {
		type: Sequelize.STRING,
	},
	norp: {
        type: Sequelize.TEXT,
    },
    addedBy: {
        type: Sequelize.TEXT,
    }
});
function get() {
    return Quotes.findOne({ where: 'negative' },)
 } */



exports.run = (client, message, args) => {
    message.channel.send(`${args[0]} is a fucktard`)
/*      get().then(function(result){
        message.reply(result.quote) 
      }); */
}

exports.name = "bully";

