require("dotenv").config();
module.exports = (client, message) => {
  const [functionMap,noprefixList] = require("../index");
  if (message.author.bot) return;


  // If messages have the prefix, run the command. If not run the notprefix which generates a chanche. IF its true it replies with a random line to the same channel
  if  (message.content.indexOf(process.env.PREFIX) !== 0){
    replyus = functionMap.get('reply')
    replyus.run(client,message)
  }

  else {
  const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const cmd = client.commands.get(command);

  if (!cmd){
    message.reply('this is not a command you sussy baka | ask with .sus commands')
  }
  else {
    cmd.run(client, message, args);
  }
}

};