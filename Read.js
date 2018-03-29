//how to read files
var fs = require('fs');

console.log('Executed Before File Reading.');

var data = fs.readFileSync('./files/file', 'utf8');

console.log(data);

console.log('Executed After File Reading, probably');
