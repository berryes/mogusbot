const getGuilds =  (client,id) =>{
    if(!id){return ; }
    else {
        const Guilds = client.guilds.cache.get(`${id}`)
        for (let x in Guilds.channels){
               console.log(Guilds.channels[x])
        }
        console.log("a request for channels via api was done for", id)
        return Guilds;
    }
} 
module.exports = getGuilds;