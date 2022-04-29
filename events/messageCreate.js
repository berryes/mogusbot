
module.exports = (client, message) => {
  const [noprefixCommand,noprefixList] = require("../index");
  if (message.author.bot) return;

  function notprefix() {
    replyus = noprefixCommand.get('reply')
    replyus.run(client,message)
  }

  // If messages have the prefix, run the command. If not run the notprefix which generates a chanche. IF its true it replies with a random line to the same channel
  if  (message.content.indexOf(client.config.prefix) !== 0) {  
    notprefix()
  }
  else {
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const cmd = client.commands.get(command);

  if (!cmd){
    message.reply('this is not a command you sussy baka | ask with .sus commands')
  }
  else {
    cmd.run(client, message, args);
  }
  }


  // Run the command

};