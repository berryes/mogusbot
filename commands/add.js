const { MessageEmbed } = require('discord.js');
const fs = require('fs')
const request = require('request')
const lang = require("../lang.json");
currentDate = new Date()
const date = "[" + currentDate.getFullYear()+ "/" + currentDate.getMonth() + "/" + currentDate.getDate() + "] "+ currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds()
// OMFG WHY IS THIS CODE SO FUCKING NESTED AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA



// make it so the server has its own pictures
fileNameList = []
const events = fs.readdirSync("./images");
for (const file of events) {
    fileNameList.push(file)
}

module.exports = {
    name: "Add",
    arguments: 'image, quote',
    usage: [`${process.env.PREFIX} add image`],
    description: "Add an image to the database",
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
        const path = `./images/${message.guild.id}/${random}.png`
        const url = urls[0]
        
        // if the server doesnt have a folder make one.
        if(!fs.existsSync(`./images/${message.guild.id}/`)){
            fs.mkdirSync(`./images/${message.guild.id}/`)
        }
const download = (url, path, callback) => {
    request.head(url, (err, res, body) => {
      request(url)
        .pipe(fs.createWriteStream(path))
        .on('close', callback)
    })
  }

download(url, path, () => {
    textEmbed.setFields({ name: `${lang.success}`, value: `${lang.succesfullImageAdd}`  },);
    textEmbed.setColor('GREEN')
    message.reply({ embeds: [textEmbed] })

    if (process.env.LOGGING == 'TRUE'){
        console.log(`${date} IMAGE ADD LOG || ${user} added an image!`)
    }
})
}
    else {
        textEmbed.setFields({ name: `${lang.error}`, value: `${lang.noImageAttached}` },);
        textEmbed.setColor('DARK_RED')
        message.reply({ embeds: [textEmbed] })
        if (process.env.LOGGING == 'TRUE'){
            console.log(`${date}| IMAGE ADD LOG -> ${user} tried to add an image but did not attach one!`)
        }
    }
}
    else {
        message.reply(`${lang.commandOptionDoesNotExist}`)
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