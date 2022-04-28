
const { quote } = require('@discordjs/builders');
// Generates a random number, if its 1 then the bot replies with a random Positive/negative quote.
// i will store the data in a database later if i learn to use it

const Keyv = require('keyv');
const keyv = new Keyv('mysql://bot:root@localhost:3306/mogusbot');

const chancheDB = new Keyv('mysql://bot:root@localhost:3306/mogusbot');
// with database when asking for a random
// insted of importing the whoel databse to the ram
// ask for the lenght of the table
// generate a random number from that
// random number > ask for the item on table
// print out the random item // there for not flooding the ram. CHAD MOMEMNTUMOS
const Sequelize = require('sequelize');

const sequelize = new Sequelize('mogusbot', 'bot', 'root', {
	host: 'localhost',
	dialect: 'mysql',
	logging: false,
	// SQLite only
	storage: 'database.mysql',
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
    return Quotes.findOne({ 
        order: sequelize.random(),
      })
 }

get().then(function(result){
    console.log(result.quote);
 });
exports.run = (client, message, args) => {
    (async () => {
        // true
        await Quotes.sync()
        const databaseValue = await chancheDB.get('chanche');

    var chanceForReply = Math.floor(Math.random() * databaseValue);
    if (chanceForReply == 1) {
        get().then(function(result){
           message.reply(result.quote)
         });
    }
})();
}

exports.name = "reply";

