const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address of City for which location to be fetched',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.latnlon(argv.a);