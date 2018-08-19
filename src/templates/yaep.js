var program = require('yaep-consolidator');
// if you have your own console commands
try {require('./app/console')(program);}catch (e){}
program.parse(process.argv);