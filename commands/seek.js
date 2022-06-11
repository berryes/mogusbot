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
        if (!message.member.voice.channel){
            musicembed.setFields({ name: `${lang.error}`, value: `${lang.userNotInVoiceChannel}` },);
            message.channel.send(({ embeds: [musicembed] }))
        }
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

