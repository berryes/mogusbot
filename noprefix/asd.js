const fs = require("fs");
var filter = [".jpg",".gif",".png",".jpeg"];
chads = []
for (const prop of filter) {
const pics = fs.readdirSync("./chads").filter(file => file.endsWith(prop));
for (const file of pics) {
    chads.push(file)
}}

exports.run = (client, message, args) => {
    var random = Math.floor(Math.random() * chads.length);
    var pic = chads[random]
    message.channel.send({files:[`./chads/${pic}`]});
}

exports.name = "haha";

