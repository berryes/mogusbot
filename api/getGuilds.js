const getGuilds =  (client,id) =>{
    if(!id){
    const Guilds = client.guilds.cache
    console.log("a request for guild via api was done")
    return Guilds;
    }
    else {
        const Guilds = client.guilds.cache.get(`${id}`)
        console.log("a request for guild via api was done for", id)
        return Guilds;
    }
} 
module.exports = getGuilds;