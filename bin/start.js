const server = require('../app')
const { HOST = 'localhost', PORT = 8080 } = process.env

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`)
})
