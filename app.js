const request = require('request');
const yargs = require('yargs');

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

request({
    url: 'http://api.openweathermap.org/data/2.5/weather?q=' + argv.a + '&appid=7074d16216983c527ef0f0fe18f0f94e',
    json: true
}, (error, response, body) => {
    console.log("Longitude: " + body.coord.lon);
    console.log("Latitude: " + body.coord.lat);
});