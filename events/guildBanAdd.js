require("dotenv").config();
const {MessageEmbed} = require("discord.js")
const lang = require("../lang.json")
module.exports = (guild,user) => {
    const membed = new MessageEmbed()
    .setFooter({ text: `${lang.botname}`, iconURL: `${lang.botimg}` })
    .setTitle(`${user} was hit with the ban hammer`)
    client.channels.cache.get(`${guild.systemChannelId}`).send(({ embeds: [membed] }))
};