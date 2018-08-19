var program = require('yaep-consolidator');
// if you have your own console commands
try {require('./app/console')(program);}catch (e){
	if (process.argv.length == 3 && ~['-h', '--help'].indexOf(process.argv[2]))
		console.log('\nNOTICE: Please specify index.js in your "app/console" directory');
}
program.parse(process.argv);