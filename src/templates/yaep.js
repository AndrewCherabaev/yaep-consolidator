var program = require('yaep-consolidator');
// if you have your own console commands
	require('./app/console')(program);
program.parse(process.argv);