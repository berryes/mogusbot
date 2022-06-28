require("dotenv").config();
const replyfun = require("../functions/reply")

module.exports = (client, message) => {
  if (message.author.bot) return;
  if(message.content.includes(process.env.PREFIX)){
  const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const cmd = client.commands.get(command);

  if (!cmd) return;
  else { cmd.run(client, message, args) }
}
  else { replyfun(message) }
};