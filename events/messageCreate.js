
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
  };


  // Our standard argument/command name definition.
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Grab the command data from the client.commands Enmap
  const cmd = client.commands.get(command);

  // If that command doesn't exist, silently exit and do nothing
  if (!cmd) return;

  // Run the command
  cmd.run(client, message, args);
};