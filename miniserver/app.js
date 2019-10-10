
const express = require('express')

const app = express()

const path = require('path')

// guardar path del directorio 
const publicDir = path.join(__dirname,'public')

app.use(express.static(publicDir))

app.get('', function( req, res){ // Home
	res.send('Hola Mundo!')
})

app.get('/about',function(req,res){
	res.send('<h1>Un about muy interesante<h1>') //combinado con html
})

app.get('/contact',function(req,res){
	res.send('Contact me ;)')
})

app.get('/misc', function(req,res){
	res.send({
		dia: 'jueves',
		descripcion : 'casi viernes'
	})
})

app.get('*', function(req,res){ //Cualquier cosa que no sea de las que tengo yo aqui
	res.send('Oops!')  //Poner al ultimo si no las otras ya no las toma en cuenta
}) // funciona para cuando una pagina no es valida

app.listen(3000, function() {
	console.log('Up and running!')
})