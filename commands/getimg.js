const Sequelize = require("sequelize")
const fs = require("fs")
const sequelize = new Sequelize(`${process.env.DB_NAME}`, `${process.env.DB_USER}`, `${process.env.DB_PASS}`, {
	host: `${process.env.DB_LOCATION}`,
	dialect: `${process.env.DB_TYPE}`,
	logging: false,
	// SQLite only
	storage: `${process.env.DB_STORAGE}.${process.env.DB_TYPE}`,
});
const lang = require("../lang.json")
const { MessageEmbed } = require('discord.js');
const embedd = new MessageEmbed()
module.exports = {
    name: "",
    arguments: 'none',
    usage: [`${process.env.PREFIX} `],
    description: "",
    run: async (client, message, args) => {
        const dcDB = sequelize.define(`images_${message.guild.id}`, {
            image_id: {
                type: Sequelize.STRING,
            },
            addedby: {
                type: Sequelize.STRING,
            },
        })
        const pic = await dcDB.findOne({ 
            order: sequelize.random(),
          })
          if (fs.existsSync(`./images/${message.guild.id}/${pic.image_id}.png`)) {
            embedd.setTitle(`${pic.image_id}`)
            embedd.setDescription(`Added by ${message.guild.members.cache.get(pic.addedby)}`)
            embedd.setImage(`attachment://${pic.image_id}.png`)
            message.reply({ embeds: [embedd], files: [`./images/${message.guild.id}/${pic.image_id}.png`] });
            
        }
        // destory if image does not exist any more and regenerate
        else {
            dcDB.destroy({ where: { image_id: pic.image_id } })
            console.log(`${pic.image_id} ${lang.destroyIMG}`) }
            console.log(pic)
    }

    
}


