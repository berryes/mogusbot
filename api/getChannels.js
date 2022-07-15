const { Collection } = require("discord.js");

const getGuilds =  (client,id) =>{
    let asd = new Map()
    if(!id){return ; }
    else {
        const Guild = client.guilds.cache.get(`${id}`)

        for(let x of Guild.channels.cache){
            if(x[1].type == 'GUILD_VOICE')
            asd.set(x[1].id,x[1].name)
        }
        console.log("a request for channels via api was done for", id)
        return asd;
    }
} 
module.exports = getGuilds;