// imports
const Keyv = require('keyv');
const chancheDB = new Keyv(`${process.env.DB_TYPE}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_LOCATION}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
const Sequelize = require('sequelize');
const { MessageEmbed } = require('discord.js');
const fs = require('fs')
const lang = require("../lang")

//database create & use
const sequelize = new Sequelize(`${process.env.DB_NAME}`, `${process.env.DB_USER}`, `${process.env.DB_PASS}`, {
	host: `${process.env.DB_LOCATION}`,
	dialect: `${process.env.DB_TYPE}`,
	logging: false,
	// SQLite only
	storage: `${process.env.DB_STORAGE}.${process.env.DB_TYPE}`,
});


const exampleEmbed = new MessageEmbed()
 .setColor('RANDOM')

replyfun = async (message) => {
    const replyChanche = await chancheDB.get(`reply_${message.guild.id}`);
    const replyType = await chancheDB.get(`type_${message.guild.id}`);

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
    if (Math.floor(Math.random() * replyChanche) == 1){
        if(Math.floor(Math.random()* replyType) < replyType){
            const pic = await qtDB.findOne({ 
                order: sequelize.random(),
              })
              if (fs.existsSync(`./images/${message.guild.id}/${pic.image_id}.png`)) {
                message.reply({files:[`./images/${message.guild.id}/${pic.image_id}.png`]}); 
            }
            // destory if image does not exist any more and regenerate
            else {
                dcDB.destroy({ where: { image_id: pic.image_id } })
                console.log(`${pic.image_id} ${lang.destroyIMG}`) }
        }
        else {
            console.log("quote")
        }
    }
    else return;

}

module.exports = replyfun;

