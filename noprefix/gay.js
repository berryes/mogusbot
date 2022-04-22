var lines = [
    "thats kinda sus ngl",
    "yeah, noone cares",
    "fuck off",
    "twat, yes thats what you are",
    "you should kill your self now",
    "my balls hurt",
    "no i am not insulting people for fun. not at all.",
    "thats gay",
    "no one loves you",
    "you mama so fat, the whole planet faked a virus just so she wears a mask",
    "bro cost 10 elixir",
    "EL GATOOOO 😭😭😭😭",
    "i think i have HIV",
    "i broke my dick",
    "fag",
    "fat fuck",
    "omg just shut the fuck up already",
]
exports.run = (client, message, args) => {
    var random = Math.floor(Math.random() * lines.length);
    var reply = lines[random]
    playername = client.name
    message.channel.send(reply);
}

exports.name = "gay";

