require("dotenv").config();
const logger = require("../functions/MessageLog")

module.exports = async (client, oldMessage,newMessage) => {
    logger("messageChange",client,oldMessage,newMessage)
  if (newMessage.author.bot) return;
  if(newMessage.content.includes(process.env.PREFIX)){

  const args = newMessage.content.slice(process.env.PREFIX.length).trim().split(/ +/g)

  const command = [args[0]].shift().toLowerCase();
  
  const cmd = await client.commands.get(command)

  if (!cmd) return;
  args.shift()
  await cmd.run(client, newMessage,args )
  }
};