const {MessageEmbed} = require("discord.js")
const lang = require("../lang.json");
const musicembed = new MessageEmbed()
.setFooter({ text: `${lang.botname}` });
module.exports = {
    name: "leave",
    arguments: 'none',
    usage: [`${process.env.PREFIX} leave`],
    description: "Make the bot leave the channel",
    run: (client, message, args) => {
        if (!client.player.getQueue(message.guild.id)){ return errorMessage("notPlaying",message)}
        let guildQueue = client.player.getQueue(message.guild.id);
        if (!message.member.voice.channel) { return errorMessage("usernotinvc",message)}
        if (!(message.member.voice.channel.id == guildQueue.connection.channel.id)){ return errorMessage("usernotinPlayingVc",message)}

        guildQueue.leave();
        musicembed.setFields({ name: `${lang.stop}`, value: `${lang.queueLeave}` },);
        musicembed.setColor('GREEN')
        message.channel.send(({ embeds: [musicembed] }))
    }
}
exports.name = "stop";

