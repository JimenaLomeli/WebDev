// console.log('hola mundo!')
// const fs = require('fs')

// fs.appendFile('prueba.txt', 'Hola de nuevo!', function(err){
// 	if(err) {
// 		console.log('hubo un error')
// 	}
// 	console.log('escribi en el archivo')
// })

const archivo = require('./funciones.js')

console.log(archivo.imprimeHola())

const _ = require('lodash')

var arr = ['Ricardo', 'Alberto', 'Eduardo']

console.log(arr)
console.log(_.reverse(arr))
console.log(_.isString(arr[0]))
console.log(_.isString(arr[1234]))