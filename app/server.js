// setting up json server
var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router('baby-steps.json')
var middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3000, function () {
  console.log('JSON Server is running')
})
