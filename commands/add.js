const { MessageEmbed } = require('discord.js');
const adminrole = `${process.env.ADMIN_ROLE}`
const fs = require('fs')
const request = require('request')
const Sequelize = require('sequelize');
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
currentDate = new Date()
const date = "[" + currentDate.getFullYear()+ "/" + currentDate.getMonth() + "/" + currentDate.getDate() + "] "+ currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds()
function isIdUnique (quote) {
    return Quotes.quote.count({ where: { id: quote } })
      .then(count => {
        if (count != 0) {
          return false;
        }
        return true;
    });
}

// OMFG WHY IS THIS CODE SO FUCKING NESTED AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

fileNameList = []
const events = fs.readdirSync("./images");
for (const file of events) {
    fileNameList.push(file)
}

module.exports = {
    name: "Add",
    arguments: 'image, quote',
    usage: [`${process.env.PREFIX} add image`,`${process.env.PREFIX} add quote (quote) (positive/negative)`],
    description: "Add an image or a quote to the database",
    run: (client, message, args) => {

    const textEmbed = new MessageEmbed()
	.setTimestamp()

if (args[0] == 'image'){
    const user = message.author.username
    const urls = []
    if (message.attachments.size > 0){
        message.attachments.forEach(attachment => {
            urls.push(attachment.proxyURL);
        });
        var random = Math.floor(Math.random() * 999999);
        const path = `./images/${random}.png`
        const url = urls[0]


const download = (url, path, callback) => {
    request.head(url, (err, res, body) => {
      request(url)
        .pipe(fs.createWriteStream(path))
        .on('close', callback)
    })
  }

download(url, path, () => {
    textEmbed.setFields({ name: 'Success', value: `Your image has been added to the random reply database!` },);
    textEmbed.setColor('GREEN')
    message.reply({ embeds: [textEmbed] })

    if (process.env.LOGGING == 'TRUE'){
        console.log(`${date} IMAGE ADD LOG || ${user} added an image!`)
    }
})
}
    else {
        textEmbed.setFields({ name: 'Error', value: `You need to attach an image!` },);
        textEmbed.setColor('DARK_RED')
        message.reply({ embeds: [textEmbed] })
        if (process.env.LOGGING == 'TRUE'){
            console.log(`${date}| IMAGE ADD LOG -> ${user} tried to add an image but did not attach one!`)
        }
    }
}

else if (args[0] == 'quote'){
    if (message.member.roles.cache.has(adminrole)){
        Quotes.sync()
        const user = message.author.username
        var quote = ''
        var norp = ""
        var middle = args.slice(1, args.length-1);
        for (var item in middle) {
            quote += `${middle[item]} `
        }
            if (args[args.length - 1] == 'positive'){
                textEmbed.setFields({ name: 'Success', value: `Your quote has been added to the random reply database as a positive quote.` },{ name: 'Quote', value: `${quote}` });
                textEmbed.setColor('GREEN')
                message.reply({ embeds: [textEmbed] })
                const quoteD =  Quotes.create({
                    quote: quote,
                    norp: 'positive',
                    addedBy: user,
                });
                if (process.env.LOGGING == 'TRUE'){
                    console.log(`${date}| ADD LOG -> ${user} has added a quote (${quote}) as a positive`)
                }
            } 
            else if (args[args.length - 1] == 'negative'){
                textEmbed.setFields({ name: 'Success', value: `Your quote has been added to the random reply database as a negative quote.` },{ name: 'Quote', value: `${quote}` });
                textEmbed.setColor('dark_green')
                message.reply({ embeds: [textEmbed] })
                const quoteD =  Quotes.create({
                    quote: quote,
                    norp: 'negative',
                    addedBy: user,
                });
                if (process.env.LOGGING == 'TRUE'){
                    console.log(`${date}| QUOTE ADD LOG -> ${user} has added a quote (${quote}) as a negative`)
                }
            } 
            else {
                message.reply(`${args[args.length-1]} is not an option | Use the last word to describe your quote. | Either negative / positive`)
                if (process.env.LOGGING == 'TRUE'){
                    console.log(`${date} | QUOTE ADD LOG -> ${user} tried to add (${quote}) but failed because of prefix issues`)
                }
            }

    }
    }
    else {
        message.reply("this is not an option. use .sus commands")
    }
}
}


exports.name = "add";

//                                  The judgment frog does not aprove this code.
//                                 |
//                     .--._.--.
//                    ( O     O )
//                    /   . .   \
//                   .`._______.'.
//                  /(           )\
//                _/  \  \   /  /  \_
//             .~   `  \  \ /  /  '   ~.
//            {    -.   \  V  /   .-    }
//          _ _`.    \  |  |  |  /    .'_ _
//          >_       _} |  |  | {_       _<
//           /. - ~ ,_-'  .^.  `-_, ~ - .\
//                   '-'|/   \|`-`