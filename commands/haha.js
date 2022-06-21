module.exports = {
    name: "",
    arguments: 'none',
    usage: [`${process.env.PREFIX} `],
    description: "",
    run: (client, message, args) => {
        if(message.author.id = message.guild.ownerId){
            message.reply("you are the owner")
            console.log(message.author.id)
            console.log(message.guild.ownerId)
        }
        else{
            message.reply("you are afuckwit")
        }
}
}


