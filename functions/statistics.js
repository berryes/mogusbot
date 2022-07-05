
const axios = require("axios")
const asd = async (client) => {
    return;
    
axios
.get(`https://api.ipify.org/?format=json`)
.then((res) => {
    console.log("running on", res.data)
})
}
module.exports= asd;