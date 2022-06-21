const { MessageEmbed } = require('discord.js');
const fs = require('fs')
const request = require('request')
const lang = require("../lang.json");
const textEmbed = new MessageEmbed()
const messageCreate = require("../functions/messageCreate")
const errorMessage = require("../functions/errorMessage")

// sequelize define and login
const Sequelize = require('sequelize');
const sequelize = new Sequelize(`${process.env.DB_NAME}`, `${process.env.DB_USER}`, `${process.env.DB_PASS}`, {
	host: `${process.env.DB_LOCATION}`,
	dialect: `${process.env.DB_TYPE}`,
	logging: false,
	storage: `${process.env.DB_STORAGE}.${process.env.DB_TYPE}`,
});

// define images database

const download =(url, path, callback) => {
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

if (!args[0]) {return errorMessage("noArgs", message)}

if (args[0] == 'image'){
    const user = message.author.username
    const urls = []

    if (message.attachments.size > 0) {
        
        message.attachments.forEach(attachment => {
            urls.push(attachment.proxyURL);
        });

        // definme paramaters for download
        const random = Math.floor(Math.random() * 999999999);
        const path = `./images/${message.guild.id}/${random}.png`
        const url = urls[0]

            // download the file, attach user id to image id in db and comfirm by sending embed 
        download(url, path, async () => {
            messageCreate("imageUploaded",message)
            message.reply({ embeds: [textEmbed] })
            console.log(`added image : ${random}`)
            const dbimg = await dbImage.create({
                image_id: random,
                addedby: message.author.id,
            });
            dbImage.sync()
        })
    } else return errorMessage("noImg",message)
    


    }// end of image

    // if wrong argument is given
    else { return errorMessage("badArg", message) }}}


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