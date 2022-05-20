module.exports = {
    name: "skip",
    arguments: 'none',
    usage: [`${process.env.PREFIX} skip`],
    description: "Skips the current song",
    run: (client, message, args) => {
        let guildQueue = client.player.getQueue(message.guild.id);
        guildQueue.skip();
    }
}
exports.name = "skip";

