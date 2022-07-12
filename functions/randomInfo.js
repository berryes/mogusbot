const lang = require("../lang.json")
const {MessageEmbed} = require("discord.js")
const membed = new MessageEmbed()
.setFooter({ text: `${lang.botname}`, iconURL: `${lang.botimg}` })
const axios = require("axios")

randomInfo = async (channelId,client) => {
    membed.setColor('RANDOM');
    membed.setTimestamp()

    switch (Math.floor(Math.random() * 2)){
       case 1:
        const fact = await axios.get(`https://catfact.ninja/fact`)
        const image = await axios.get(`https://api.thecatapi.com/v1/images/search?api_key=${process.env.CAT_API_KEY}`)
            membed.setTitle(`${lang.catfact}`)
            membed.setDescription(`${fact.data.fact} | Powered by https://catfact.ninja`)
            membed.setImage(`${image.data[0].url}`)
            membed.setTimestamp()
           break;
        
        case 2:
        membed.fields = []
        const ufact = await axios.get(`https://uselessfacts.jsph.pl/random.json?language=en`)
        membed.setTitle(`${lang.uselessFact}`)
        membed.addFields(
            { name: `${ufact.data.text}`, value: 'Powered by https://uselessfacts.jsph.pl' },
        )
        membed.setTimestamp()
        break;

        default:
            return
            break;
}
try{
client.channels.cache.get(`${channelId}`).send(({ embeds: [membed] }))
}
catch(error){
    console.log(error)
}
membed.fields = [];
}
module.exports = randomInfo;
