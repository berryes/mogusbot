require("dotenv").config();
const logger = require("../functions/MessageLog")

module.exports = async (client, oldMessage,newMessage) => {
    logger("messageChange",client,oldMessage,newMessage)
    if(oldMessage.content == newMessage.content){return}
    
    if (newMessage.author.bot) return;
    let guildPrefixes = await client.prefixes.get(`${newMessage.guild.id}`)
    let hasCustomPrefix = false
    let prefixPlacement = 0
    let command = ''
    let args = []
  
    for(let x in guildPrefixes){ if((newMessage.content).slice(0,5).includes(guildPrefixes[x])){  hasCustomPrefix = true , prefixPlacement = x }  }
    if(hasCustomPrefix){
       args = newMessage.content.slice(guildPrefixes[prefixPlacement].length).trim().split(/ +/g)
        command = [args[0]].shift().toLowerCase(); }
        ///////////////////////////////
        else if(newMessage.content.includes(process.env.PREFIX)){
                 args = newMessage.content.slice(process.env.PREFIX.length).trim().split(/ +/g)
                 command = [args[0]].shift().toLowerCase();  
                }
    
          const cmd =  client.commands.get(command)
          if (!cmd) return;
    args.shift()
  
    cmd.run(client, newMessage,args )
};