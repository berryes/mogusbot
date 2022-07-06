require("dotenv").config();
const replyfun = require("../functions/reply")
const Keyv = require("keyv")
const chancheDB = new Keyv(`${process.env.DB_TYPE}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_LOCATION}:${process.env.DB_PORT}/${process.env.DB_NAME}`);

module.exports = async (client, message) => {

  if (message.author.bot) return;
  
  let guildPrefixes = await client.prefixes.get(`${message.guild.id}`)
  let hasCustomPrefix = false
  let prefixPlacement = 0
  let args = []
  let command = ''
  for(let x in guildPrefixes){ if(message.content.includes(guildPrefixes[x])){ hasCustomPrefix = true , prefixPlacement = x} }

  console.log(hasCustomPrefix)
  
  if(message.content.includes(process.env.PREFIX)){
   args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g)
   command = [args[0]].shift().toLowerCase(); 
  }
  
/*   else if(hasCustomPrefix == true){
    args = message.content.slice(guildPrefixes[prefixPlacement].length).trim().split(/ +/g)

    console.log(command,args, "run")
 }
 */

  const cmd = await client.commands.get(command)
  if (!cmd) return;
  args.shift()
  cmd.run(client, message,args )
  if(process.env.REPLYFUN == 'True'){ replyfun(message,client) }
};