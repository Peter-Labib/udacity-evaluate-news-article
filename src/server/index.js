const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
const fetch = require('node-fetch')
var cors = require('cors')
const app = express()
app.use(cors())

// to use json
app.use(bodyParser.json())

// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(express.static('dist'))

const dotenv = require('dotenv');
dotenv.config();

const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?'
const apiKey = process.env.LICENSE_KEY

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.json(mockAPIResponse);
})

app.post('/api', dataHandler)

async function dataHandler(req,res){
    articleUrl = req.body.url;
    const apiURL = `${baseURL}key=${apiKey}&url=${articleUrl}&lang=en`

    const response = await fetch(apiURL)
    const mcData = await response.json()
    res.send(mcData)
}

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})