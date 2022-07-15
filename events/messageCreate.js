require("dotenv").config();
const replyfun = require("../functions/reply")
const logger = require("../functions/MessageLog")
const dataCollection = require("../functions/dataCollection")
module.exports = async (client, message) => {
  if(!message.content){logger("imageSent",client,message)} else{logger("messageSent",client,message)}
  if (message.author.bot) return;
  dataCollection("message",[message,client])
  let guildPrefixes = await client.prefixes.get(`${message.guild.id}`)
  let hasCustomPrefix = false
  let prefixPlacement = 0
  let command = ''
  let args = []

  for(let x in guildPrefixes){ if((message.content).slice(0,5).includes(guildPrefixes[x])){  hasCustomPrefix = true , prefixPlacement = x }  }
  if(hasCustomPrefix){
     args = message.content.slice(guildPrefixes[prefixPlacement].length).trim().split(/ +/g)
      command = [args[0]].shift().toLowerCase(); }
      ///////////////////////////////
      else if(message.content.includes(process.env.PREFIX)){
               args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g)
               command = [args[0]].shift().toLowerCase();  
              }
  
        const cmd =  client.commands.get(command)
        if (!cmd) return;
  args.shift()

  cmd.run(client, message,args )
  
  if(process.env.REPLYFUN == 'True'){ replyfun(message,client) }
};