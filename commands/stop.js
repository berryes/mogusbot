const {MessageEmbed} = require("discord.js")
const lang = require("../lang.json");
const errorMessage = require("../functions/errorMessage")
const messageCreate = require("../functions/messageCreate")


module.exports = {
    name: "stop",
    arguments: 'none',
    usage: [`${process.env.PREFIX} stop`],
    description: "Stops the music",
    run: (client, message, args) => {
        if (!client.player.getQueue(message.guild.id)){ return errorMessage("notPlaying",message)}
        let guildQueue = client.player.getQueue(message.guild.id);
        if (!guildQueue.isPlaying){ return errorMessage("notPlaying",message)}
        if (!message.member.voice.channel) { return errorMessage("usernotinvc",message)}
        if (!(message.member.voice.channel.id == guildQueue.connection.channel.id)){ return errorMessage("usernotinPlayingVc",message)}

        guildQueue.stop();
        messageCreate("queueStop",message)

    }
}

exports.name = "stop";

