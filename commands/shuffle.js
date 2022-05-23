const {MessageEmbed} = require("discord.js")
const musicembed = new MessageEmbed()
.setColor('RED')
.setFooter({ text: 'The mighty mogus' });

module.exports = {
    name: "shuffle",
    arguments: 'none',
    usage: [`${process.env.PREFIX} shuffle`],
    description: "Shuffles the current playlist",
    run: (client, message, args) => {
        if (!message.member.voice.channel){
            musicembed.setFields({ name: 'Error!', value: 'You are not in a voice channel!' },);
            message.channel.send(({ embeds: [musicembed] }))
        }
        else {
        let guildQueue = client.player.getQueue(message.guild.id);
        guildQueue.shuffle();
    }}
}
exports.name = "shuffle";

