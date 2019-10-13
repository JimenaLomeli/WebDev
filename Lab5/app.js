const weReq = require('./weather.js')
const ciudad = 'Monterrey'

weReq.geocode(ciudad, function(error, data){
	if(error) {
		console.log(error)
	} else {
		callback(data)
	}
})
