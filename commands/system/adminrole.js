const {MessageEmbed} = require("discord.js")
const lang = require("../../lang.json");
const Keyv = require('keyv');
const messageCreate = require("../../functions/embedCreate");
const chancheDB = new Keyv(`${process.env.DB_TYPE}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_LOCATION}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
    module.exports = {
    name: "adminrol",
    arguments: 'none',
    usage: [`${process.env.PREFIX} (id of role)`],
    description: "Sets the adminrole for the bot (CAN BE DONE ONLY BY THE SERVER OWNER)",
    run: (client, message, args) => {
        // check if the role actuall exists 
        if(!message.author.id == message.guild.ownerId) {return errorMessage("notOwner",message)}
        chancheDB.set(`adminrole_${message.guild.id}`, args[0])
        client.adminroles.set(message.guild.id, args[0])
        messageCreate("adminrole",message)
}
}
exports.name = "stop";

