// make the bot choose between these too:
// .sus choose "whatever" or "hahaha"
const lang = require("../lang.json");
module.exports = {
    name: "choose",
    arguments: 'none',
    usage: [`${process.env.PREFIX} choose (item1) (item2) (item3)`],
    description: "Choose between items, item counts after a space!",
    run:  (client, message, args) => {

    if (args.length > 1 ){
        var random = Math.floor(Math.random() * args.length);
        message.channel.send(`i choose: ${args[random]}`)
    }
    else if (args.length == 1){
        message.reply(`${lang.cantChooseFromOne}`)
    }
    else {
        message.reply(`${lang.noArgumentsGiven}`)
    }
    }
}
    
exports.name = "choose";

