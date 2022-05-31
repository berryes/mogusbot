const {MessageEmbed} = require("discord.js");
const musicembed = new MessageEmbed()
.setFooter({ text: 'The mighty mogus' });
module.exports = {
    name: "seek",
    arguments: 'none',
    usage: [`${process.env.PREFIX} seek`],
    description: "Jumps forward in the music",
    run: (client, message, args)  => {
        if (!message.member.voice.channel){
            musicembed.setFields({ name: 'Error!', value: 'You are not in a voice channel!' },);
            message.channel.send(({ embeds: [musicembed] }))
        }
        if(!isNaN(args[0])){
            musicembed.setFields({ name: 'Skipped', value: `Seeking ${args[0]} seconds` },);
            musicembed.setColor('GREEN')
            let guildQueue = client.player.getQueue(message.guild.id);
            guildQueue.seek(parseInt(args[0]) * 1000);
        }
        else{
            musicembed.setFields({ name: 'Error', value: `Seeking can be only done with a number` },);
            musicembed.setColor('RED')
            message.reply(({ embeds: [musicembed] }))
    }
}
}
exports.name = "seek";

