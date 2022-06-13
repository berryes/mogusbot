const {MessageEmbed} = require("discord.js")
const lang = require("../lang.json");
const musicembed = new MessageEmbed()
.setFooter({ text: `${lang.botname}` });

module.exports = {
    name: "Resume",
    arguments: 'none',
    usage: [`${process.env.PREFIX} resume`],
    description: "Resume the music",
    run: (client, message, args) => {
        if (!message.member.voice.channel){
            musicembed.setFields({ name: `${lang.error}`, value: `${lang.userNotInVoiceChannel}` },);
            musicembed.setColor('RED')
            message.channel.send(({ embeds: [musicembed] }))
        }
        else {
            let guildQueue = client.player.getQueue(message.guild.id);
            guildQueue.setPaused(false);
            musicembed.setFields({ name: `${lang.resume}`, value: `${lang.queueResume}` },);
            musicembed.setColor('GREEN')
            message.channel.send(({ embeds: [musicembed] }))
        }

}
}


