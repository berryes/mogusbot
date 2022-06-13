const { MessageEmbed } = require('discord.js');
const fs = require('fs')
const request = require('request')
const log = require("../functions/log")
const lang = require("../lang.json");
const textEmbed = new MessageEmbed()

// sequelize define and login
const Sequelize = require('sequelize');
const sequelize = new Sequelize(`${process.env.DB_NAME}`, `${process.env.DB_USER}`, `${process.env.DB_PASS}`, {
	host: `${process.env.DB_LOCATION}`,
	dialect: `${process.env.DB_TYPE}`,
	logging: false,
	storage: `${process.env.DB_STORAGE}.${process.env.DB_TYPE}`,
});

// define images database

const download = (url, path, callback) => {
    request.head(url, (err, res, body) => {
      request(url)
        .pipe(fs.createWriteStream(path))
        .on('close', callback)
    })
  }

  
module.exports = {
    name: "Add",
    arguments: 'image, quote',
    usage: [`${process.env.PREFIX} add image`],
    description: "Add an image to the database",
    run: (client, message, args) => {

const dbImage = sequelize.define(`images_${message.guild.id}`, {
    image_id: {
        type: Sequelize.STRING,
    },
    addedby: {
        type: Sequelize.STRING,
    },
})


if (args[0] == 'image'){
    const user = message.author.username
    const urls = []

    if (message.attachments.size > 0){
        
        // get the url of image sent
        message.attachments.forEach(attachment => {
            urls.push(attachment.proxyURL);
        });

        // definme paramaters for download
        const random = Math.floor(Math.random() * 999999999);
        const path = `./images/${message.guild.id}/${random}.png`
        const url = urls[0]

        // if the server doesnt have a folder make one.
        if(!fs.existsSync(`./images/${message.guild.id}/`)){
            fs.mkdirSync(`./images/${message.guild.id}/`)
        }
            // download the file, attach user id to image id in db and comfirm by sending embed 
        download(url, path, async () => {
            textEmbed.setFields({ name: `${lang.success}`, value: `${lang.succesfullImageAdd}`  },);
            textEmbed.setColor('GREEN')
            textEmbed.setTimestamp()

            message.reply({ embeds: [textEmbed] })
            console.log(`added image : ${random}`)
            const dbimg = await dbImage.create({
                image_id: random,
                addedby: message.author.id,
            });
            dbImage.sync()
        })}

    // if no mage attached
    else {
        textEmbed.setFields({ name: `${lang.error}`, value: `${lang.noImageAttached}` },);
        textEmbed.setColor('DARK_RED')
        textEmbed.setTimestamp()
        message.reply({ embeds: [textEmbed] })
    }}

    // if wrong argument is given
    else {
        message.reply(`${lang.commandOptionDoesNotExist}`)
}}}


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