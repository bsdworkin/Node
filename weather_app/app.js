const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather  = require('./weather/weather');

const argv = yargs
    .options({
        a: {
        	demand: true,
        	alias: 'address',
        	describe: 'Address to get weather for',
        	string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;


//Chaining callbacks 
geocode.geocodeAddress(argv.address, (errorMessage, results)=>{
    if(errorMessage){
     	console.log(errorMessage);
    }else{
    	console.log(results.address);
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults)=>{
            if(errorMessage){
                console.log(errorMessage);
            }else{
                console.log(`It's Currently: ${weatherResults.temperature}. Feels Like: ${weatherResults.apparentTemperature}`);
            }
        });
    }
});



//fd892b003b7a813ff3850ec8d86a01ae
