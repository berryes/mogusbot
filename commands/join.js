
module.exports = {
    name: "sussypic",
    arguments: 'none',
    usage: [`${process.env.PREFIX} sussypic`],
    description: "Replies with a random sussy pic",
    run: async (client, message, args) => {
        
  
        function playAudio(){
            let channel = message.member.voice.channel;
            const connection = joinVoiceChannel({
                channelId: channel.id,
                guildId: channel.guild.id,
                adapterCreator: channel.guild.voiceAdapterCreator,
                selfDeaf: false
             });
            const tracks = client.queue.get("tracks");
            const songs = tracks.split(',')
            const resource = createAudioResource(`./temp/${songs[0]}.mp4`);
            connection.subscribe(player)
            player.play(resource)
            client.queue.set("tracks",`${songs.splice(1)}`)
        }

         playAudio()
         player.on('error', error => {
            console.error(`Error: ${error.message} with resource ${error.resource.metadata.title}`);
            player.play(getNextResource());
        });
       
}
}
exports.name = "tempalte";

