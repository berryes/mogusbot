require("dotenv").config();
const replyfun = require("../functions/reply")
const Keyv = require("keyv")
const chancheDB = new Keyv(`${process.env.DB_TYPE}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_LOCATION}:${process.env.DB_PORT}/${process.env.DB_NAME}`);

module.exports = async (client, message) => {

  if (message.author.bot) return;
  if(message.content.includes(process.env.PREFIX)){

  const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g)

  const command = [args[0]].shift().toLowerCase();
  
  const cmd = await client.commands.get(command)

  if (!cmd) return;
  args.shift()
  await cmd.run(client, message,args )

}
  else  if(process.env.REPLYFUN == 'True'){ replyfun(message,client) }
};