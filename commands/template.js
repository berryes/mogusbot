module.exports = {
    name: "sussypic",
    arguments: 'none',
    usage: [`${process.env.PREFIX} sussypic`],
    description: "Replies with a random sussy pic",
    run: (client, message, args) => {
        
    channel = client.channels.cache.get('949601166688399401');
    channel.send('ur a fuckwit');
    message.delete()
}
}
exports.name = "tempalte";

