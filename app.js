const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if (!address) {
	console.log('Please provide an address');
} else {
	geocode(address, (error, { latitude, longtitude, location } = {}) => {
		if (error) {
			return console.log(error);
		}

		forecast(latitude, longtitude, (error, { temp, feelslike, weather_descriptions }) => {
			if (error) {
				return console.log(error);
			}

			console.log(`Location: ${location}`);
			console.log(`Temperature : ${temp}`);
			console.log(`Feelslike: ${feelslike}`);
			console.log(`Weather-Description: ${weather_descriptions}`);
		});
	});
}
