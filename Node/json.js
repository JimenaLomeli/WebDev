const fs = require('fs')

const book = {
	title: 'Game of Thrones',
	author: 'G. R. R. Martin'
}

console.log(book) // como objeto

const bookString = JSON.stringify(book) // como string

fs.writeFileSync('json.json', bookString)

const bufferData = fs.readFileSync('json.json')
console.log(bufferData)

const parsedData = JSON.parse(bufferData)
console.log(parsedData)