const createServerQuoteDB = require("../models/dbQuoteInit")
const createServerDataDB = require("../models/dbDataInit")
const createServerModerationDB = require("../models/dbModInit")
const createServerImageDB = require("../models/dbImageInit")
const Keyv = require("keyv")
const chancheDB = new Keyv(`${process.env.DB_TYPE}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_LOCATION}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
const fs = require("fs")

module.exports = async (client, message,) => {
const Guilds = client.guilds.cache.map(guild => guild.id);

// creates the database for every server on startup and get already existing adminroles
// the already existing admin roles are put in the ram for faster access.
for (let x in Guilds){
    await createServerQuoteDB(`${Guilds[x]}`)
    await createServerImageDB(`${Guilds[x]}`)
    await createServerModerationDB(`${Guilds[x]}`)
    await createServerDataDB(`${Guilds[x]}`)
    await client.adminroles.set(Guilds[x], await chancheDB.get(`adminrole_${Guilds[x]}`) ) 

    // if the server doesnt have a folder make one.
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
// https://textkool.com/en/ascii-art-generator
// DOS REBEL FONT

}

exports.name = "ready";
    