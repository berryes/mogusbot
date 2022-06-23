const Keyv = require('keyv');
const chancheDB = new Keyv(`${process.env.DB_TYPE}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_LOCATION}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
const errorMessage = require("../functions/errorMessage")
    module.exports = {
        name: "chance",
        arguments: 'reply, type',
        usage: [`${process.env.PREFIX} reply (number)`,`${process.env.PREFIX}type (1-100)`],
        description: "Set the reply chanche and the type of reply",
        run: (client, message, args) => {
        (async () => {
            if (!message.member.roles.cache.has(client.adminroles.get(message.guild.id))){ return errorMessage("noRole",message)}
            if(args[0].toLowerCase() == 'type'){
                if(!args[1]){ return errorMessage("noArgs",message)}
                if(isNaN(args[1])){ return errorMessage("argIsnan", message)}
                if(args[1] > 100){ return errorMessage("moreThan100", message)}
                chancheDB.set(`type_${message.guild.id}`, args[1])
                client.replyType.set(message.guild.id,args[1])
            }
            if(args[0].toLowerCase() == 'reply'){
                if(!args[1]){ return errorMessage("noArgs",message)}
                if(isNaN(args[1])){ return errorMessage("argIsnan", message)}
                // sets for database
                chancheDB.set(`reply_${message.guild.id}`, args[1])
                // sets for ram
                client.replyType.set(message.guild.id,args[1])
            }
        })(); // end of async function
} // end of export run
}

exports.name = "chance";


