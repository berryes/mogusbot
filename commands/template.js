module.exports = {
    name: "",
    arguments: 'none',
    usage: [`${process.env.PREFIX} `],
    description: "",
    run: (client, message, args) => {
        console.log(message.author.id)
}
}


