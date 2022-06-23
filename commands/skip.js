const {MessageEmbed} = require("discord.js")
const lang = require("../lang.json")
const errorMessage = require("../functions/errorMessage")

module.exports = {
    name: "skip",
    arguments: 'none',
    usage: [`${process.env.PREFIX} skip`],
    description: "Skips the current song",
    run: (client, message, args) => {
        if (!client.player.getQueue(message.guild.id)){ return errorMessage("notPlaying",message)}
        let guildQueue = client.player.getQueue(message.guild.id);
        if (!guildQueue.isPlaying){ return errorMessage("notPlaying",message)}
        if (!message.member.voice.channel) { return errorMessage("usernotinvc",message)}
        if (!(message.member.voice.channel.id == guildQueue.connection.channel.id)){ return errorMessage("usernotinPlayingVc",message)}

        if (!args[0]){ guildQueue.skip() }
        else { 
            if(!isNaN(args[0])) { guildQueue.skip(args[0]) }
            else { return errorMessage("skippingIsNotNumber",message)}
        }
    }
}
exports.name = "skip";

