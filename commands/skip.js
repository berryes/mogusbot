const {MessageEmbed} = require("discord.js")
const lang = require("../lang.json")
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
            musicembed.setFields({ name: `${lang.error}`, value: `${lang.userNotInVoiceChannel}` },);
            message.channel.send(({ embeds: [musicembed] }))
        }
        if (!args[0]){
            let guildQueue = client.player.getQueue(message.guild.id);
            guildQueue.skip();
        }
        else {
            if(!isNaN(args[0])){
                let guildQueue = client.player.getQueue(message.guild.id);
                    guildQueue.skip(args[0])
            }
            else {
                musicembed.setFields({ name: `${lang.error}`, value: `${lang.skippingIsNotNumber}` },);
                message.channel.send(({ embeds: [musicembed] }))
            }
        }
    }
}
exports.name = "skip";

