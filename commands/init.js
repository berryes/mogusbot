const lang = require("../lang.json");
require("dotenv").config();

const data = require("../functions/dbDataInit")
const image = require("../functions/dbImageInit")
const quote = require("../functions/dbQuoteInit")
const mod = require("../functions/dbModInit")

module.exports = {
    name: "init",
    arguments: 'none',
    usage: [`${process.env.PREFIX} init`],
    description: "Creates database for the server",
    run: async (client, message, args)  => {
        if (message.member.roles.cache.has(process.env.ADMIN_ROLE)){
            data(message.guild.id)
            image(message.guild.id)
            quote(message.guild.id)
            mod(message.guild.id)
            console.log("created db entries for ", message.guild.name, `(${message.guild.id})`)
        }
        else return;
}}
