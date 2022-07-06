const createServerQuoteDB = require("../models/dbQuoteInit")
const createServerDataDB = require("../models/dbDataInit")
const createServerModerationDB = require("../models/dbModInit")
const createServerImageDB = require("../models/dbImageInit")

const Keyv = require("keyv")
const chancheDB = new Keyv(`${process.env.DB_TYPE}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_LOCATION}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
const fs = require("fs")

module.exports = async (client) => {
const Guilds = client.guilds.cache.map(guild => guild.id);

if(!fs.existsSync(`./images/`)){
    fs.mkdirSync(`./images/`)
}  
for (let x in Guilds){
    // Creating database for every current guild (if already exists nada happens)
    await createServerQuoteDB(`${Guilds[x]}`)
    await createServerImageDB(`${Guilds[x]}`)
    await createServerModerationDB(`${Guilds[x]}`)
    await createServerDataDB(`${Guilds[x]}`)
    if(!await chancheDB.get(`prefixes_${Guilds[x]}`)){ await chancheDB.set(`prefixes_${Guilds[x]}`,[])}
    
    // gets the chanches and adminroles from the database and stores them in the ram for efficent use
    await client.adminroles.set(Guilds[x], await chancheDB.get(`adminrole_${Guilds[x]}`) ) 
    await client.replyChance.set(Guilds[x], await chancheDB.get(`reply_${Guilds[x]}`))
    await client.replyType.set(Guilds[x], await chancheDB.get(`type_${Guilds[x]}`))
    await client.logchannel.set(Guilds[x], await chancheDB.get(`logchannel_${Guilds[x]}`))


    // if the server doesnt have a image folder make one.
    if(!fs.existsSync(`./images/${Guilds[x]}/`)){
        fs.mkdirSync(`./images/${Guilds[x]}/`)
    } 

}
    console.log('\x1b[33m%s\x1b[0m',`
                                                                 █████               █████      
                                                                ░░███               ░░███       
 █████████████    ██████   ███████ █████ ████  █████             ░███████   ██████  ███████     
░░███░░███░░███  ███░░███ ███░░███░░███ ░███  ███░░   ██████████ ░███░░███ ███░░███░░░███░      
 ░███ ░███ ░███ ░███ ░███░███ ░███ ░███ ░███ ░░█████ ░░░░░░░░░░  ░███ ░███░███ ░███  ░███       
 ░███ ░███ ░███ ░███ ░███░███ ░███ ░███ ░███  ░░░░███            ░███ ░███░███ ░███  ░███ ███   
 █████░███ █████░░██████ ░░███████ ░░████████ ██████             ████████ ░░██████   ░░█████    
░░░░░ ░░░ ░░░░░  ░░░░░░   ░░░░░███  ░░░░░░░░ ░░░░░░             ░░░░░░░░   ░░░░░░     ░░░░░     
                          ███ ░███                                                              
                         ░░██████                                                               
                          ░░░░░░                                                                
 `)
console.log('made by berryes(https://github.com/berryes/mogusbot)')
console.log(`${client.user.username}#${client.user.discriminator} bot has started`); 
// https://textkool.com/en/ascii-art-generator
// DOS REBEL FONT

// send changelog to channel
/* console.log(client.guilds.cache.get("984861334116122645").systemChannelId) */
}

exports.name = "ready";
    