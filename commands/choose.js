// make the bot choose between these too:
// .sus choose "whatever" or "hahaha"


exports.run = (client, message, args) => {

    if (args.length > 1 ){
        var random = Math.floor(Math.random() * args.length);
        message.channel.send(`i choose: ${args[random]}`)
    }
    else if (args.length == 1){
        message.reply('i cant choose from one...')
    }
    else {
        message.reply('you need to type in something in after the command  you baka')
    }
    }
    
exports.name = "choose";

