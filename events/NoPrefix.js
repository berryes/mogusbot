const noprefixCommand = require("../index");

module.exports = (client, message) => {
    // Ignore all bots
    if (message.author.bot) return;
    
    // Grab the command data from the client.commands Enmap
    const cmd = noprefixCommand.get(noprefix);
  
    // If that command doesn't exist, silently exit and do nothing
    if (!cmd) return;
  
    // Run the command
    cmd.run(client, message, args);
  };