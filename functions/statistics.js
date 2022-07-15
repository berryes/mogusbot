
const axios = require("axios")
const asd = async (client) => {
    console.log("statistics sent")
    return;
    
axios
.get(`https://api.ipify.org/?format=json`)
.then((res) => {
    console.log("running on", res.data)
})
}
module.exports= asd;