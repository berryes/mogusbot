const Keyv = require('keyv');
const messageCreate = require('../functions/messageCreate');
const chancheDB = new Keyv(`${process.env.DB_TYPE}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_LOCATION}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
const errorMessage = require("../functions/errorMessage")
module.exports = {
        name: "ch",
        arguments: 'reply, type',
        usage: [`${process.env.PREFIX} setchance reply (number)`,`${process.env.PREFIX}setchance type (1-100)`],
        description: "Set the reply chanche and the type of reply",
        run: async (client, message, args) => {
                if (!message.member.roles.cache.has(client.adminroles.get(message.guild.id))){ return errorMessage("noRole",message)}
                if(!args[0]){ return errorMessage("noArgs",message)}
                if(args[0].toLowerCase() == 'type'){
                    if(!args[1]){ return errorMessage("noArgs",message)}
                    
                    if(['random','image','quote'].indexOf(args[1]) > -1) {
                    chancheDB.set(`type_${message.guild.id}`, args[1])
                    client.replyType.set(message.guild.id,args[1])
                    messageCreate("typeChange",message,[args[1]])
                    }
                    else {return errorMessage("badArg", message)}
                }
                
                if(args[0].toLowerCase() == 'reply'){
                    if(!args[1]){ return errorMessage("noArgs",message)}
                    if(isNaN(args[1])){ return errorMessage("argIsnan", message)}
                    // sets for database
                    chancheDB.set(`reply_${message.guild.id}`, args[1])
                    // sets for ram
                    client.replyChance.set(message.guild.id,args[1])
                    messageCreate("replyChange",message,[args[1]])
                }

            } // end of async function
} // end of export run

exports.name = "ch";


