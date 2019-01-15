const express = require('express')
const app = express()
const port = 8080


// Allow Cross Origin Requests(CORS)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(__dirname + '/assets'));

app.get('/', (req, res) => {res.sendFile(__dirname + '/index.html');});

app.get('/babysteps', (req, res) => {res.sendFile(__dirname + '/baby-steps.json');});

app.listen(port, () => console.log(`Ramsey Solutions: listening on port ${port}!`))


