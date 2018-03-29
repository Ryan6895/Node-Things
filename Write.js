//how to write files
var fs = require('fs');

console.log('Executed Before File Reading.');

var data = fs.writeFileSync('./files/file2', 'Hello there! what\'s up?!', 'utf8');

console.log('Executed After File Reading, probably');
