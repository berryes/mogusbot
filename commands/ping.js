exports.run = (client, message, args) => {
    message.channel.send("kys!").catch(console.error);
}
exports.name = "ping";
