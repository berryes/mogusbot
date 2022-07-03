const fs = require("fs")

const file = fs.readFileSync("Tools/quote_bulk_add/quotes.txt", 'utf-8');
console.log(file.toString())
