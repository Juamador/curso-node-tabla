const { createTable } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();
console.log('Iniciando programa...'.green);

createTable(argv.base, argv.top, argv.l)
    .then(fileName => console.log(fileName.rainbow, 'creado'))
    .catch(err => console.log(err));