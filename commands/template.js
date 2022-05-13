exports.run = (client, message, args) => {
    channel = client.channels.cache.get('939115249435562017');
    channel.send('ur a fuckwit');
    message.delete()
}

exports.name = "tempalte";

