const {MessageEmbed} = require("discord.js")
const lang = require("../../lang.json");
const musicembed = new MessageEmbed()
.setFooter({ text: `${lang.botname}` });

module.exports = {
    name: "Pause",
    arguments: 'none',
    usage: [`${process.env.PREFIX} pause`],
    description: "Pause the music",
    type: "Music",
    run: (client, message, args) => {
        if (!client.player.getQueue(message.guild.id)){ return errorMessage("notPlaying",message)}
        let guildQueue = client.player.getQueue(message.guild.id);
        if (!guildQueue.isPlaying){ return errorMessage("notPlaying",message)}
        if (!message.member.voice.channel) { return errorMessage("usernotinvc",message)}
        if (!(message.member.voice.channel.id == guildQueue.connection.channel.id)){ return errorMessage("usernotinPlayingVc",message)}
        
            guildQueue.setPaused(true);
            musicembed.setFields({ name: `${lang.paused}`, value: `${lang.queuePause}` },);
            musicembed.setColor('GREEN')
            message.channel.send(({ embeds: [musicembed] }))
        }

}



