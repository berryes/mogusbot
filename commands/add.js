const { MessageEmbed } = require('discord.js');
const adminrole = '968842654584557578'
const textEmbed = new MessageEmbed()
	.setTimestamp()
const fs = require('fs')
const request = require('request')
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

fileNameList = []
const events = fs.readdirSync("./images");
for (const file of events) {
    fileNameList.push(file)
}

exports.run = (client, message, args) => {

if (args[0] == 'image'){
    const urls = []
    if (message.attachments.size > 0){
        message.attachments.forEach(attachment => {
            urls.push(attachment.proxyURL);
        });
        var random = Math.floor(Math.random() * 999999);

const path = `./images/${random}.png`
const url = urls[0]

while (fileNameList.includes(random)){
    var random = Math.floor(Math.random() * 999999);
}

console.log(fileNameList)
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
})
}
    else {
        textEmbed.setFields({ name: 'Error', value: `You need to attach an image!` },);
        textEmbed.setColor('DARK_RED')
        message.reply({ embeds: [textEmbed] })
    }
}

else if (args[0] == 'quote'){

    if (message.member.roles.cache.has(adminrole)){
        Quotes.sync()
        const user = message.author.username
        var quote = ''
        var norp = ""
        var middle = args.slice(0, args.length-1);
        
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

}

exports.name = "add";

