const {MessageEmbed} = require("discord.js")
const lang = require("../lang.json");
const musicembed = new MessageEmbed()
.setFooter({ text: `${lang.botname}` });

module.exports = {
    name: "Repeat",
    arguments: 'queue, song, off',
    usage: [`${process.env.PREFIX} repeat queue`],
    description: "Repeats the queue or the song",
    run: (client, message, args) => {
        if (!client.player.getQueue(message.guild.id)){ return errorMessage("notPlaying",message)}
        let guildQueue = client.player.getQueue(message.guild.id);
        if (!guildQueue.isPlaying){ return errorMessage("notPlaying",message)}
        if (!message.member.voice.channel) { return errorMessage("usernotinvc",message)}
        if (!(message.member.voice.channel.id == guildQueue.connection.channel.id)){ return errorMessage("usernotinPlayingVc",message)}

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
            if (args[0] == "off"){
                guildQueue.setRepeatMode(0);
                musicembed.setFields({ name: `${lang.repeatOff}`, value: `${lang.repeatDesc}` },);
                musicembed.setColor('GREEN')
                message.channel.send(({ embeds: [musicembed] }))
            }
            else if(!args[0]){
                musicembed.setFields({ name: `${lang.error}`, value: `${lang.commandOptionDoesNotExist}` },);
                musicembed.setColor('RED')
                message.channel.send(({ embeds: [musicembed] }))
                
            }

}
}


