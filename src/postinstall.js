var fs = require('fs');
var program = fs.createWriteStream('yaep');
fs.createReadStream('./src/templates/yaep.js').pipe(program);