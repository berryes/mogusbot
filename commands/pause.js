const {MessageEmbed} = require("discord.js")
const lang = require("../lang.json");
const musicembed = new MessageEmbed()
.setFooter({ text: `${lang.botname}` });

module.exports = {
    name: "Pause",
    arguments: 'none',
    usage: [`${process.env.PREFIX} pause`],
    description: "Pause the music",
    run: (client, message, args) => {
        if (!message.member.voice.channel){
            musicembed.setFields({ name: `${lang.error}`, value: `${lang.userNotInVoiceChannel}` },);
            musicembed.setColor('RED')
            message.channel.send(({ embeds: [musicembed] }))
        }
        else {
            let guildQueue = client.player.getQueue(message.guild.id);
            guildQueue.setPaused(true);
            musicembed.setFields({ name: `${lang.paused}`, value: `${lang.queuePause}` },);
            musicembed.setColor('GREEN')
            message.channel.send(({ embeds: [musicembed] }))
        }

}
}


