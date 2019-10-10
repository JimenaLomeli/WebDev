
//PARA EL LAB
//lat, long = ciudad('Monterrey')
//console.log(clima(lat,long))

const geocode = function(ciudad, callback) {
 setTimeout(function(){
 	const data = {
 		lat : 0,
 		long : 0
 	}
 	callback(data)
 }, 2000)
}

 geocode('Monterrey', function(data){
 	console.log(data)
 })

// console.log('despues')
