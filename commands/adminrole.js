const {MessageEmbed} = require("discord.js")
const lang = require("../lang.json");
const musicembed = new MessageEmbed()
.setFooter({ text: `${lang.botname}` });
const Keyv = require('keyv');
const chancheDB = new Keyv(`${process.env.DB_TYPE}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_LOCATION}:${process.env.DB_PORT}/${process.env.DB_NAME}`);

module.exports = {
    name: "stop",
    arguments: 'none',
    usage: [`${process.env.PREFIX} stop`],
    description: "Stops the music",
    run: (client, message, args) => {
        // check if the role actuall exists and is from the owner of the server
        chancheDB.set(`adminrole_${message.guild.id}`, args[0])
        console.log("set", args[0], "as role")
        client.adminroles.set(message.guild.id, args[0])
}
}
exports.name = "stop";

