const request = require('request');

var getWeather = (lat, lng, callback) =>{
    
    request({
        url: `https://api.darksky.net/forecast/fd892b003b7a813ff3850ec8d86a01ae/${lat},${lng}`,
        json: true
    }, (error, response, body)=>{
        if(!error && response.statusCode === 200){
        	callback(undefined, {
        		temperature: body.currently.temperature,
        		apparentTemperature: body.currently.apparentTemperature
        	});
            
        }else{
           callback('Unable to fetch weather data');
        }
    });
};

module.exports.getWeather = getWeather;