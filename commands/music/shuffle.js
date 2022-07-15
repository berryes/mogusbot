const {MessageEmbed} = require("discord.js")
const lang = require("../../lang.json");
const musicembed = new MessageEmbed()
.setColor('BLUE')
.setFooter({ text: `${lang.botname}` });

module.exports = {
    name: "shuffle",
    arguments: 'none',
    usage: [`${process.env.PREFIX} shuffle`],
    description: "Shuffles the current playlist",
    type: "Music",
    run: (client, message, args) => {
        if (!client.player.getQueue(message.guild.id)){ return errorMessage("notPlaying",message)}
        let guildQueue = client.player.getQueue(message.guild.id);
        if (!(message.member.voice.channel.id == guildQueue.connection.channel.id)){ return errorMessage("usernotinPlayingVc",message)}
        
        if (!guildQueue.isPlaying){ return errorMessage("notPlaying",message)}
        if (!message.member.voice.channel) { return errorMessage("usernotinvc",message)}
        if (!(message.member.voice.channel.id == guildQueue.connection.channel.id)){ return errorMessage("usernotinPlayingVc",message)}


        guildQueue.shuffle();

        musicembed.setFields({ name: `${lang.success}`, value: `${lang.queueShuffle}` },);
        message.channel.send(({ embeds: [musicembed] }))
    }
}
exports.name = "shuffle";

