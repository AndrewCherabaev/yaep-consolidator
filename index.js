(!process.argv[2])?require('child_process').exec('node yaep --help',(_,$)=>console.log(_||$)):0;

var program = require('commander');
program
  .version('0.0.1', '-v, --version');

program
	.command('echo <text>')
	.alias('echo:text')
	.description('echo inserted text')
	.action(function(cmd, options){
		console.log(cmd);
	})
	.on('--help', function(){
		console.log('echo inserted text')
	});

program.on('command:*', function () {
  console.error('Invalid command: %s\nSee --help for a list of available commands.', program.args.join(' '));
  process.exit(1);
});
module.exports = program;