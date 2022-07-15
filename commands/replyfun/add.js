const { MessageEmbed } = require('discord.js');
const fs = require('fs')
const request = require('request')
const lang = require("../../lang.json");
const messageCreate = require("../../functions/embedCreate")
const errorMessage = require("../../functions/errorMessage")


const axios = require("axios")
// sequelize define and login
const Sequelize = require('sequelize');
const sequelize = new Sequelize(`${process.env.DB_NAME}`, `${process.env.DB_USER}`, `${process.env.DB_PASS}`, {
	host: `${process.env.DB_LOCATION}`,
	dialect: `${process.env.DB_TYPE}`,
	logging: false,
	storage: `${process.env.DB_STORAGE}.${process.env.DB_TYPE}`,
});

// define images database

/* const download =(url, path, callback) => {
    request.head(url, (err, res, body) => {
      request(url)
        .pipe(fs.createWriteStream(path))
        .on('close', callback)
    })
  } */
  const Path = require('path')  
  async function downloadImage (url,random,uid) {  
    const path = Path.resolve(__dirname, `../images/${uid}`, `${random}.png`)
    const writer = fs.createWriteStream(path)
  
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream'
    })
  
    response.data.pipe(writer)
  
    return new Promise((resolve, reject) => {
      writer.on('finish', resolve)
      writer.on('error', reject)
    })
  }

module.exports = {
    name: "Add",
    arguments: 'image, quote',
    usage: [`${process.env.PREFIX} add image`],
    description: "Add an image to the database",
    run: async (client, message, args) => {

const dbImage = sequelize.define(`images_${message.guild.id}`, {
    image_id: {
        type: Sequelize.STRING,
    },
    addedby: {
        type: Sequelize.STRING,
    },
})
const dcQuote = sequelize.define(`quotes_${message.guild.id}`, {
	quote: {
		type: Sequelize.STRING,
	},
    addedBy: {
        type: Sequelize.TEXT,
    }
})

if (!args[0]) {return errorMessage("noArgs", message)}

if (args[0].toLowerCase() == 'image'){
    const urls = []
    if (message.attachments.size > 0) {
        message.attachments.forEach(attachment => {
            urls.push(attachment.proxyURL);
        });
        // definme paramaters for download
        const random = Math.floor(Math.random() * 999999999);
        const url = urls[0]
            // download the file, attach user id to image id in db and comfirm by sending embed 
            downloadImage(urls[0],random,message.guild.id)
            messageCreate("imageUploaded",message)
            console.log(`added image : ${random}`)
            const image = await dbImage.create({
                image_id: random,
                addedby: message.author.id,
            });
            dbImage.sync()
    } else return errorMessage("noImg",message)
    }// end of image

    if(args[0].toLowerCase() == 'quote'){
        if(!args[1]){return errorMessage("noArgs",message)}
        args.shift()
        const qt = await dcQuote.findOne({
            where: { quote: `${args.join(" ")}` },
          });
          console.log(qt)
          if(qt){ return errorMessage("quoteExists",message)}

        const quote = await dcQuote.create({
            quote: args.join(" "),
            addedby:`${message.author.id}`,
        }).catch(console.error())
        messageCreate("quoteAdd",message,[args])
    }
    else {return errorMessage("noArgs",message) }
}}


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