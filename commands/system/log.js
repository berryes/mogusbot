const {MessageEmbed} = require("discord.js")
const lang = require("../../lang.json");
const Keyv = require('keyv');
const messageCreate = require("../../functions/embedCreate")
const chancheDB = new Keyv(`${process.env.DB_TYPE}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_LOCATION}:${process.env.DB_PORT}/${process.env.DB_NAME}`);


module.exports = {
    name: "log",
    arguments: 'none',
    usage: [`${process.env.PREFIX} log (channelid)`],
    description: "Sets the logger channel",
    run: (client, message, args) => {
        if(!message.author.id == message.guild.ownerId) {return errorMessage("notOwner",message)}
        chancheDB.set(`logchannel_${message.guild.id}`, args[0])
        client.logchannel.set(message.guild.id, args[0])
        messageCreate("logset",message)
}
}


