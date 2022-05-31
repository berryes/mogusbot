const {MessageEmbed} = require("discord.js")
const musicembed = new MessageEmbed()
.setColor('RED')
.setFooter({ text: 'The mighty mogus' });

module.exports = {
    name: "play",
    arguments: 'url',
    usage: [`${process.env.PREFIX} (url/song name)`],
    description: "Plays a song/playlist",
    run: async (client, message, args)  => {
        if (!message.member.voice.channel){
            musicembed.setFields({ name: 'Error!', value: 'You are not in a voice channel!' },);
            message.channel.send(({ embeds: [musicembed] }))
        }
        else {
            client.currentchannel.set("channel", message.channel.id)
            console.log(client.currentchannel.get("channel"))

            if(args[0].includes("spotify.com/playlist/")){
                let queue = client.player.createQueue(message.guild.id);
                await queue.join(message.member.voice.channel);
                let song = await queue.playlist(args.join(' ')).catch(_ => {
                    if(!guildQueue)
                        queue.stop();
                });
            
            }
            else {
            let guildQueue = client.player.getQueue(message.guild.id);
            let queue = client.player.createQueue(message.guild.id);
            await queue.join(message.member.voice.channel);
            let song = await queue.play(args.join(" "))
        }
    }
        console.log(message.guild.id)
}}
