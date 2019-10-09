
const credentials = require('./credentials.js')
const request = require('request')

const geocode = function(ciudad, callback) {
	const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + ciudad +'.json?access_token=' + credentials.MAPBOX_TOKEN

//https://api.mapbox.com/geocoding/v5/mapbox.places/Monterrey.json?access_token=pk.eyJ1IjoiamltZW5hbG9tZWxpIiwiYSI6ImNrMWpxOW14YjIzcG4zaHA2NjdvdndkazUifQ.cfrDbhDVFOMPUb25S4vWog
	request({ url, json: true }, function(error, response) {
		if(error) {
			callback('Unable to connect to weather service', undefined)
		} else { 
			const data = response.body
			if(data.Response == 'False') {
			callback(data.Error, undefined)
			} else {
				const info = {
					lat : data.features[0].center[0],
					lon : data.features[0].center[1]
				}
				weatherReq(info.lon,info.lat,callback)
			}
		}
	})
}
const weatherReq = function(latitude, longitude, callback) {
	//REQUEST https://api.darksky.net/forecast/[key]/[latitude],[longitude]

	const url = 'https://api.darksky.net/forecast/' + credentials.DARK_SKY_SECRET_KEY + 
				'/' + latitude + ',' + longitude + '?lang=es&units=si'  
	
	request({ url, json: true }, function(error, response) {
		if(error) {
			callback('Unable to connect to weather service', undefined)
		} else { 
			const dresp = response.body
			if(dresp.Response == 'False') {
			callback(dresp.Error, undefined)
			} else {
				const info = {
					summary : dresp.daily.data[0].summary,
					precipProbability : dresp.daily.data[0].precipProbability,
					temperature : dresp.currently.temperature
				}
				const resp = info.summary + ' Hay un ' + info.precipProbability*100 
							+'%' + ' de probabilidad de lluvia.' + ' La temperatura actualmente es de ' 
							+ info.temperature + ' grados centigrados'
				callback(resp)
			}
		}
	})
}

module.exports = {
	geocode : geocode,
	weatherReq : weatherReq
}