const express = require('express')
const app = express()
const port = 3000

app.get('/asd', (req, res) => {
    res.header('randomnumber1',`${Math.floor(Math.random() * 10)}`);
    res.header('randomnumber2',`${Math.floor(Math.random() * 3000)}`);
    res.header('randomnumber3',`${Math.floor(Math.random() * 444444)}`);
	res.send();
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})