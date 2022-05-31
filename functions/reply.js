// imports
const Keyv = require('keyv');
const keyv = new Keyv(`${process.env.DB_TYPE}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_LOCATION}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
const chancheDB = new Keyv(`${process.env.DB_TYPE}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_LOCATION}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
const Sequelize = require('sequelize');
const fs = require('fs')
const chancheType = 0
//database create & use
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
    return Quotes.findOne({ 
        order: sequelize.random(),
      })
 }

exports.run = (client, message, args) => {
    currentDate = new Date()
    const date = "" + currentDate.getFullYear()+ "." + currentDate.getMonth() + "." + currentDate.getDate() + " "+ currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds()    
    
    images = []
 const imagefile = fs.readdirSync("././images");
 for (const file of imagefile) {
     images.push(file)
 }
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
            message.reply({files:[`././images/${images[randomimage]}`]});

        }
    }

    if (process.env.LOGGING == 'TRUE'){
        if (chancheTypeValue >= chancheType){
            console.log(`${date} | REPLY LOG -> Chanche for reply was: ${chanceForReply}, reply type: image`, )
        }
        else{
            console.log(`${date} | REPLY LOG -> Chanche for reply was: ${chanceForReply}, reply type: quote`, )
        }
        
    }
})();

}
exports.name = "reply";

