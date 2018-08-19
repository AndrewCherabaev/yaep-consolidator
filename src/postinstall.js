var fs = require('fs');
var program = fs.createWriteStream('yaep');
fs.createReadStream('./templates/yaep').pipe(program);