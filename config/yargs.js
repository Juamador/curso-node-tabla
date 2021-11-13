const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'The table that you want to calculate'
    })
    .option('l', {
        alias: 'listar',
        type: Boolean,
        demandOption: false,
        default: false,
        describe: 'Optional parameter to create the file containing the table result'
    })
    .option('top', {
        alias: 'limit',
        type: 'number',
        demandOption: false,
        default: 12,
        describe: 'The limit of the table'
    })
    .check((argv, options) => {
        if (isNaN(argv.base)) {
            throw 'La base debe ser un número';
        }
        return true;
    })
    .argv;

module.exports = argv;