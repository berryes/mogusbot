// imports
const Keyv = require('keyv');
const keyv = new Keyv('mysql://bot:root@localhost:3306/mogusbot');
const chancheDB = new Keyv('mysql://bot:root@localhost:3306/mogusbot');
const Sequelize = require('sequelize');
const fs = require('fs')
const chancheType = 0
//database create & use
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
images = []
 const imagefile = fs.readdirSync("./images");
 for (const file of imagefile) {
     images.push(file)
 }
exports.run = (client, message, args) => {
    (async () => {
        await Quotes.sync()

        // get the chance to reply from database
        const ReplyChanche = await chancheDB.get('chanche');
        const chancheType = await chancheDB.get('chacheType');
        var chanceForReply = Math.floor(Math.random() * ReplyChanche);
        var chancheTypeValue = Math.floor(Math.random() * 100);
        var randomimage = Math.floor(Math.random() * images.length);


    if (chanceForReply == 1) {

        if (chancheTypeValue <= chancheType){
            get().then(function(result){
                message.reply(result.quote)
              });
        }

        else if (chancheTypeValue >= chancheType){
            message.reply({files:[`./images/${images[randomimage]}`]});
        }

    }


})();
}

exports.name = "reply";

