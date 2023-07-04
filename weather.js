//https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=2d271c88a6dd68fe3f4bfa013c7d0cae
// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m
const express = require('express');
const app = express();
var request = require('request');
const ejs = require('ejs');
// for returning html files
const path = require('path');


// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/'));



// Define routes
app.get('/', (req, res) => {
    let apiKey = '1a88609f755a8fb6f883a26068255a4a';
    let city = 'portland';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    request(url, function (err, response, body) {
    if(err){
        console.log('error:', error);
    } else {
        console.log('body:', body);
    }
    res.send(response.body);
    });
});

app.get('/test', (req, res) => {
    
    let url = `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=precipitation`

    request(url, function (err, response, body) {
    if(err){
        console.log('error:', error);
    } else {
        console.log('body:', body);
    }
    res.send(response.body);
    });
});
// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});