const request = require('request');

var latnlon = (address) => {
    request({
        url: `http://api.openweathermap.org/data/2.5/weather?q=${address}&appid=7074d16216983c527ef0f0fe18f0f94e`,
        json: true
    }, (error, response, body) => {
        if(error) {
            console.log("Unable to connect to Weather Map servers");
         } else if(body.cod == 200) {
            console.log("Longitude: " + body.coord.lon);
            console.log("Latitude: " + body.coord.lat);
        } else if(body.cod == 404 || body.cod == 400) {
            console.log("Unable to Find the address");
            console.log("")
        }
    });
}

module.exports.latnlon = latnlon;