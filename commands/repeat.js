const {MessageEmbed} = require("discord.js")
const lang = require("../lang.json");
const musicembed = new MessageEmbed()
.setFooter({ text: `${lang.botname}` });

module.exports = {
    name: "Repeat",
    arguments: 'queue, song',
    usage: [`${process.env.PREFIX} repeat queue`],
    description: "Repeats the queue or the song",
    run: (client, message, args) => {
        if (!message.member.voice.channel){
            musicembed.setFields({ name: `${lang.error}`, value: `${lang.userNotInVoiceChannel}` },);
            message.channel.send(({ embeds: [musicembed] }))
        }
        else {
            let guildQueue = client.player.getQueue(message.guild.id);
            if (args[0] == "queue"){
                guildQueue.setRepeatMode(2);
                musicembed.setFields({ name: `${lang.repeat}`, value: `${lang.repeatQueue}` },);
                musicembed.setColor('GREEN')
                message.channel.send(({ embeds: [musicembed] }))
            }
            if(args[0] == "song"){
                guildQueue.setRepeatMode(1);
                musicembed.setFields({ name: `${lang.repeat}`, value: `${lang.RepeatSong}` },);
                musicembed.setColor('GREEN')
                message.channel.send(({ embeds: [musicembed] }))
            }
            else {
                musicembed.setFields({ name: `${lang.error}`, value: `${lang.commandOptionDoesNotExist}` },);
                musicembed.setColor('RED')
                message.channel.send(({ embeds: [musicembed] }))
                
            }
        }
}
}


