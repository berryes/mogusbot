const {MessageEmbed} = require("discord.js")
const lang = require("../lang.json");
const errorMessage = require("../functions/errorMessage")


module.exports = {
    name: "play",
    arguments: 'url',
    usage: [`${process.env.PREFIX} (url/song name)`],
    description: "Plays a song/playlist",
    run: async (client, message, args)  => {
        if (!message.member.voice.channel) { return errorMessage("usernotinvc",message)}
        if(!args[0]) { return errorMessage("noArgs",message)}
            client.currentchannel.set(message.guild.id, message.channel.id)


            if(args[0].includes("spotify.com/playlist/")){
                let queue = client.player.createQueue(message.guild.id);
                await queue.join(message.member.voice.channel);
                let song = await queue.playlist(args.join(' ')).catch(_ => {
                if(!guildQueue) queue.stop(); });
            }
            else {/* if(!args.indexOf("soundcloud","tidal","deezer","music.apple") > -1 ) { return errorMessage("badURL",message)} */
            
            let guildQueue = client.player.getQueue(message.guild.id);
            let queue = client.player.createQueue(message.guild.id);
            await queue.join(message.member.voice.channel);
            let song = await queue.play(args.join(" "))
        }
}}
