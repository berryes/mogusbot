const {MessageEmbed} = require("discord.js")
const musicembed = new MessageEmbed()
.setColor('RED')
.setFooter({ text: 'The mighty mogus' });

module.exports = {
    name: "skip",
    arguments: 'none',
    usage: [`${process.env.PREFIX} skip`],
    description: "Skips the current song",
    run: (client, message, args) => {
        if (!message.member.voice.channel){
            musicembed.setFields({ name: 'Error!', value: 'You are not in a voice channel!' },);
            message.channel.send(({ embeds: [musicembed] }))
        }
        else{ 
        let guildQueue = client.player.getQueue(message.guild.id);
        guildQueue.skip();
    }}
}
exports.name = "skip";

