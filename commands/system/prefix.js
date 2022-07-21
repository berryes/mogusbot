const Keyv = require('keyv');
const chancheDB = new Keyv(`${process.env.DB_TYPE}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_LOCATION}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
const errorMessage = require("../../functions/errorMessage")
const messageCreate = require("../../functions/embedCreate")
module.exports = {
    name: "",
    arguments: 'none',
    type: "System",
    usage: [`${process.env.PREFIX} `],
    description: "",
    run: async(client, message, args) => {
        if(!message.author.id == message.guild.ownerId) {return errorMessage("notOwner",message)}
            
            

        const databaseprefix = await chancheDB.get(`prefixes_${message.guild.id}`)
        const alreadyhas = []

        switch(args[0]){
            case 'add':
                if(!args[1]){ return errorMessage("needArgs",message)}
                args.shift()
                for (let x in args){
                    if(args[x].length > 5){return errorMessage("biggerthen10",message)}
                    if(databaseprefix.indexOf(args[x]) >= 0 ){ alreadyhas.push(args[x]) }
                    else{  databaseprefix.push(args[x]) }
                }
                await chancheDB.set(`prefixes_${message.guild.id}`, databaseprefix)
                client.prefixes.set(message.guild.id, databaseprefix)
                messageCreate("prefixSet",message,[args])
                break;

            case 'current':
                messageCreate("prefix",message,[databaseprefix])
                break;

            case 'delete':
                if(!args[1]){ return errorMessage("needArgs",message)}
                args.shift()
                for (let x in args){
                    if(databaseprefix.indexOf(args[x]) >= 0 ){ 
                        databaseprefix.splice(databaseprefix.indexOf(args[x]),databaseprefix.indexOf(args[x])) 
                        console.log("removed", args[x])
                    }
                }
                await chancheDB.delete(`prefixes_${message.guild.id}`, )
                await chancheDB.set(`prefixes_${message.guild.id}`, databaseprefix)
                client.prefixes.set(message.guild.id, databaseprefix)
                messageCreate("prefixRemove",message,[databaseprefix])
            break;

            default: 
            return errorMessage("badArgs",message)
        }

}
}


