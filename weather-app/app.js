const weReq = require('./weather.js')
const ciudad = 'Monterrey'

weReq.geocode(ciudad, function(error, data){
	if(error) {
		console.log(error)
	} else {
		console.log(data)
	}
})
