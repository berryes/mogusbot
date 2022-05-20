module.exports = {
    name: "shuffle",
    arguments: 'none',
    usage: [`${process.env.PREFIX} shuffle`],
    description: "Shuffles the current playlist",
    run: (client, message, args) => {
        let guildQueue = client.player.getQueue(message.guild.id);
        guildQueue.shuffle();
    }
}
exports.name = "shuffle";

