const {MessageEmbed} = require("discord.js");
const lang = require("../lang.json")
const musicembed = new MessageEmbed()
.setFooter({ text: 'The mighty mogus' });
module.exports = {
    name: "seek",
    arguments: 'none',
    usage: [`${process.env.PREFIX} seek (amount in seconds)`],
    description: "Jumps forward in the music",
    run: (client, message, args)  => {
        if (!client.player.getQueue(message.guild.id)){ return errorMessage("notPlaying",message)}
        let guildQueue = client.player.getQueue(message.guild.id);
        if (!guildQueue.isPlaying){ return errorMessage("notPlaying",message)}
        if (!message.member.voice.channel) { return errorMessage("usernotinvc",message)}
        if (!(message.member.voice.channel.id == guildQueue.connection.channel.id)){ return errorMessage("usernotinPlayingVc",message)}

        if(!isNaN(args[0])){
            musicembed.setFields({ name: `${lang.seeked}`, value: `${args[0]} ${lang.seekDesc}` },);
            musicembed.setColor('GREEN')
            let guildQueue = client.player.getQueue(message.guild.id);
            guildQueue.seek(parseInt(args[0]) * 1000);
        }
        else{
            musicembed.setFields({ name: `${lang.error}`, value: `${lang.seekDesc}` },);
            musicembed.setColor('RED')
            message.reply(({ embeds: [musicembed] }))
    }
}
}
exports.name = "seek";

