// imports
const Keyv = require('keyv');
const chancheDB = new Keyv(`${process.env.DB_TYPE}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_LOCATION}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
const Sequelize = require('sequelize');
const { MessageEmbed } = require('discord.js');
const fs = require('fs')
const lang = require("../lang.json")

//database create & use
const sequelize = new Sequelize(`${process.env.DB_NAME}`, `${process.env.DB_USER}`, `${process.env.DB_PASS}`, {
	host: `${process.env.DB_LOCATION}`,
	dialect: `${process.env.DB_TYPE}`,
	logging: false,
	// SQLite only
	storage: `${process.env.DB_STORAGE}.${process.env.DB_TYPE}`,
});


const embedd = new MessageEmbed()

replyfun = async (message,client) => {
    const replyChanche = await client.replyChance.get(message.guild.id);
    const replyType = await client.replyType.get(message.guild.id);


    const dcDB = sequelize.define(`images_${message.guild.id}`, {
        image_id: {
            type: Sequelize.STRING,
        },
        addedby: {
            type: Sequelize.STRING,
        },
    })
    const qtDB = sequelize.define(`quotes_${message.guild.id}`, {
        quote: {
            type: Sequelize.STRING,
        },

        addedBy: {
            type: Sequelize.TEXT,
        }
    })
// PUT THE REPLY CHANCES IN RAM, SINCE IT WILL OVERFLOW THE DATABASE
// ONLY CHANGE IT ON COMMAND
    if (!(Math.floor(Math.random() * replyChanche) == 1)) return;

    const quote = await qtDB.findOne({  order: sequelize.random() })
    const pic = await dcDB.findOne({ 
        order: sequelize.random(),
      })

      // if no picture return
      if(!pic){return console.log("no img in db")}
      if(!quote){return console.log("no quote in db")}

      if (fs.existsSync(`./images/${message.guild.id}/${pic.image_id}.png`)) {
        embedd.setTitle(`Image ID: ${pic.image_id}`)
        embedd.setDescription(`Added by ${message.guild.members.cache.get(pic.addedby)}`)
        embedd.setImage(`attachment://${pic.image_id}.png`)
    }
    // destory if image does not exist any more and regenerate
    else {
        dcDB.destroy({ where: { image_id: pic.image_id } })
        console.log(`${pic.image_id} ${lang.destroyIMG}`) 
        return;
    }



switch(replyType){
    case 'image':
        message.reply({ embeds: [embedd], files: [`./images/${message.guild.id}/${pic.image_id}.png`] });
        break;

    case 'random': 
    if(Math.floor(Math.random() * 2) == 1){
        message.reply({ embeds: [embedd], files: [`./images/${message.guild.id}/${pic.image_id}.png`] });
    }
    else {
        message.reply("quote");
    }
    break;

    case 'quote':
        message.reply(`${quote.quote}`)
        break;
}
}
module.exports = replyfun;

