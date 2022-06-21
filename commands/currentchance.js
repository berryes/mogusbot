const Keyv = require('keyv');
const chancheDB = new Keyv(`${process.env.DB_TYPE}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_LOCATION}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
const messageCreate = require("../functions/messageCreate")

    module.exports = {
        name: "currenchance",
        arguments: 'none',
        usage: `${process.env.PREFIX} currenchance `,
        description: "Displays the current chance",
        run: (client, message, args) => {
        (async () => {
            if (!message.member.roles.cache.has(client.adminroles.get(message.guild.id))){ return errorMessage("noRole",message)}

            const reply = await chancheDB.get(`reply_${message.guild.id}`)
            const typeValue = await chancheDB.get(`type_${message.guild.id}`)
/*             const type = ""
            if(typeValue == 50){ const type = "50/50" }
            else if(typeValue > 50){ const type = "Quote"}
            else if(typeValue < 50){ const type = "Image"} */
            return messageCreate("currentChance",message,[reply, typeValue] )
        })(); // end of async function
} // end of export run
}

exports.name = "chance";


