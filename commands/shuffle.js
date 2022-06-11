const {MessageEmbed} = require("discord.js")
const lang = require("../lang.json")
const musicembed = new MessageEmbed()
.setColor('BLUE')
.setFooter({ text: `${lang.botname}` });

module.exports = {
    name: "shuffle",
    arguments: 'none',
    usage: [`${process.env.PREFIX} shuffle`],
    description: "Shuffles the current playlist",
    run: (client, message, args) => {
        if (!message.member.voice.channel){
            musicembed.setFields({ name: `${lang.error}`, value: `${lang.userNotInVoiceChannel}` },);
            message.channel.send(({ embeds: [musicembed] }))
        }
        else {
        let guildQueue = client.player.getQueue(message.guild.id);
        guildQueue.shuffle();

        musicembed.setFields({ name: `${lang.success}`, value: `${lang.queueShuffle}` },);
        message.channel.send(({ embeds: [musicembed] }))
    }}
}
exports.name = "shuffle";

