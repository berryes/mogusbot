const fs = require("fs");
var filter = [".jpg",".gif",".png",".jpeg"];
suss = []
for (const prop of filter) {
const pics = fs.readdirSync("./images").filter(file => file.endsWith(prop));
for (const file of pics) {
    suss.push(file)
}}

exports.run = (client, message, args) => {
    var random = Math.floor(Math.random() * suss.length);
    var pic = suss[random]
    message.channel.send({files:[`./images/${pic}`]});
}

exports.name = "sussypic";

