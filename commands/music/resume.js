const {MessageEmbed} = require("discord.js")
const lang = require("../../lang.json");
const musicembed = new MessageEmbed()
.setFooter({ text: `${lang.botname}` });

module.exports = {
    name: "Resume",
    arguments: 'none',
    usage: [`${process.env.PREFIX} resume`],
    description: "Resume the music",
    type: "Music",
    run: (client, message, args) => {
        if (!client.player.getQueue(message.guild.id)){ return errorMessage("notPlaying",message)}
        let guildQueue = client.player.getQueue(message.guild.id);
        if (!guildQueue.isPlaying){ return errorMessage("notPlaying",message)}
        if (!message.member.voice.channel) { return errorMessage("usernotinvc",message)}
        if (!(message.member.voice.channel.id == guildQueue.connection.channel.id)){ return errorMessage("usernotinPlayingVc",message)}

            guildQueue.setPaused(false);
            musicembed.setFields({ name: `${lang.resume}`, value: `${lang.queueResume}` },);
            musicembed.setColor('GREEN')
            message.channel.send(({ embeds: [musicembed] }))
        }
}



