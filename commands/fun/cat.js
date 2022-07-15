const { default: axios } = require("axios");
module.exports = {
    name: "cat",
    arguments: 'gif,delete',
    usage: [`${process.env.PREFIX} cat gif `,`${process.env.PREFIX} cat gif delete `,`${process.env.PREFIX} cat `],
    description: "Random picture of a cat",
    run: async (client, message, args) => {
    if (args.includes('gif')){
        axios
        .get(`https://api.thecatapi.com/v1/images/search?mime_types=gif,?api_key=${process.env.CAT_API_KEY}`)
        .then((res) => {
            message.channel.send(res.data[0].url)
        })
    }
        else {
            axios
            .get(`https://api.thecatapi.com/v1/images/search?api_key=${process.env.CAT_API_KEY}`)
            .then((res) => {
                message.channel.send(res.data[0].url)
            })
        }
        if (args.includes('delete')){
            message.delete()
        }
    }
}    



exports.name = "tempalte";

