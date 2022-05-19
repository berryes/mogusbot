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
}