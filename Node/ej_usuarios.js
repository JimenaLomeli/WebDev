
const users = require('./users.js')

console.log(users.loadUsers())

users.addUser('Barbara', 100, 'barbarag@tec.mx')
console.log(users.loadUsers())

