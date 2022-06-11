module.exports = {
    name: "queue",
    arguments: 'none',
    usage: [`${process.env.PREFIX} queue`],
    description: "Shows the queue",
    run: (client, message, args) => {
        let guildQueue = client.player.getQueue(message.guild.id);
    message.channel.send(`${guildQueue.songs}`);
    for(let x in guildQueue.songs){
        console.log(guildQueue.songs[x])
    }
}
}
exports.name = "queue";

