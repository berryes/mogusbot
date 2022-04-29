const ytdl = require('ytdl-core');


exports.run = (client, message, args) => {
    const serverQueue = queue.get(message.guild.id);
    const queue = new Map();
    function play(guild, song) {
        const serverQueue = queue.get(guild.id);
        if (!song) {
          serverQueue.voiceChannel.leave();
          queue.delete(guild.id);
          return;
        }
      }
    const songInfo = ytdl.getInfo(args);
    const song = {
     title: songInfo.title,
     url: songInfo.video_url,
    };
    const dispatcher = serverQueue.connection
    .play(ytdl(song.url))
    .on("finish", () => {
        serverQueue.songs.shift();
        play(guild, serverQueue.songs[0]);
    })
    .on("error", error => console.error(error));
dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
serverQueue.textChannel.send(`Start playing: **${song.title}**`);
}