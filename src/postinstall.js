var fs = require('fs');
var target = fs.createWriteStream('../../yaep');
fs.createReadStream('./src/templates/yaep.js').pipe(target);