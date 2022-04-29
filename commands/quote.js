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
const adminrole = '968842654584557578'


// NEEED TO CHECK IF THE SHIT THEY ADD EXISTS 
// BC IF IT DOES THE BOT COMMITS BIG SUISIDE
// SUICIDE
// YES THE NOT LIVE ANYMORE. NOT FUNNY 



exports.run = (client, message, args) => {
    if (message.member.roles.cache.has(adminrole)){
    Quotes.sync()
    const user = message.author.username
    var quote = ''
    var norp = ""
    var middle = args.slice(1, args.length-1);
    if (args[0] == 'add'){
        for (var item in middle) {
            quote += `${middle[item]} `
        }
        if (args[args.length - 1] == 'positive'){
            message.reply(`"${quote}" has been added to the database as a positive quote!`)
            const quoteD =  Quotes.create({
                quote: quote,
                norp: 'positive',
                addedBy: user,
            });
        } 
        else if (args[args.length - 1] == 'negative'){
            message.reply(`"${quote}" has been added to the database as a negative quote!`)
            const quoteD =  Quotes.create({
                quote: quote,
                norp: 'negative',
                addedBy: user,
            });
        } 
        else {
            message.reply(`${args[args.length-1]} is not an option | Use the last word to describe your quote. | Either negative / positive`)
        }
    }
}
else {
    message.reply('You dont have permision for this... sussy baka')
}
}

exports.name = "quote";

