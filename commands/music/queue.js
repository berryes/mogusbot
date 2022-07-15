
const { MessageEmbed } = require('discord.js');
// inside a command, event listener, etc.
const embed = new MessageEmbed()
const lang = require("../../lang.json")
module.exports = {
    name: "queue",
    arguments: 'none',
    usage: [`${process.env.PREFIX} queue`],
    description: "Shows the current queue",
    type: "Music",
    run: (client, message, args) => {
        if (!client.player.getQueue(message.guild.id)){ return errorMessage("notPlaying",message)}
        let guildQueue = client.player.getQueue(message.guild.id);
        if (!guildQueue.isPlaying){ return errorMessage("notPlaying",message)}
        if (!message.member.voice.channel) { return errorMessage("usernotinvc",message)}
        if (!(message.member.voice.channel.id == guildQueue.connection.channel.id)){ return errorMessage("usernotinPlayingVc",message)}

        embed.setAuthor({ name: `${client.users.cache.get(guildQueue.data.requestedBy).username} ${lang.requested}`, iconURL: `${(client.users.cache.get(guildQueue.data.requestedBy)).displayAvatarURL()}` })
        embed.setDescription(`${lang.playing}  ${guildQueue.songs[0].name}`)
        for (let x in guildQueue.songs){
            if(x <= 10 && x != 0){
            console.log(guildQueue.songs[x].name)
            embed.addField(`\u200B`, `${x} [${guildQueue.songs[x].name}](${guildQueue.songs[x].url})`)
            }
        }
        message.reply({ embeds: [embed] })
        embed.setAuthor(null)
        embed.fields = []
}
}


