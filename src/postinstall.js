var fs = require('fs');
var program = fs.createWriteStream('yaep');
fs.createReadStream('./node_modules/yaep-consolidator/src/templates/yaep').pipe(program);