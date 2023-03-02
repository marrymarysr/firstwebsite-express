//REQUIREMENTS

const { response } = require('express');
const express = require('express');
const app = express();
const https = require('node:https');
const bodyParser = require('body-parser');
// const path = require('path');  

app.use(express.urlencoded({extended: true}));

//HOMEPAGE

app.use(express.static(__dirname +'public'));

// Set up a route for the homepage
app.get('/homepage', (req, res) => {
  res.sendFile(__dirname + '/homepage.html');
});

// Set up a route for the stylesheet
app.get('/styles.css', (req, res) => {
  res.sendFile(__dirname + '/public/styles.css');
});

// Set up a route for the JavaScript file
app.get('/main.js', (req, res) => {
  res.sendFile(__dirname + '/public/main.js');
});


// app.use(express.static(__dirname + '/public'));

// app.get("/homepage", function(req,res){
//     res.sendFile(__dirname + "/homepage.html");
// });

// app.post("/homepage", function(req,res) {
//     let toggleNavStatus = false;
//     let toggleNav = function(){
//         let getSidebar = document.querySelector(".nav-sidebar");
//         let getSidebarUl = document.querySelector(".nav-sidebar ul");
//         let getSidebarTitle = document.querySelectorAll(".nav-sidebar span");

//         if(toggleNavStatus === false) {
//             getSidebarUl.style.visibility = "visible";
//             getSidebarUl.style.width = "272px";
//             getSidebarUl.style.opacity = "0.5";

//         let arrayLenght = getSidebarTitle.lenght;
//         for(let i=0; i<arrayLenght.Lenght; i++) {
//             getSidebarTitle[i].style.opacity="1"; 
//         }

//         toggleNavStatus = true;
//         res.send();
   
//         }
//     }
// });

//CALCULATOR

app.get("/calculator", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/calculator", function(req,res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("The sum is " + result);
});

//BMI CALCULATOR

app.get("/bmi", function(req, res){
    res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmi", function(req,res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight/(height * height);

    res.send("Your BMI is " + bmi);
});

//WEATHER

app.use(bodyParser.urlencoded({extended: true}));

app.get("/weather", function(req,res){
    res.sendFile(__dirname + "/weather.html");
});

app.post("/weather", function(req,res){
    const city = req.body.cityName;
    const apiKey = "9531e5c5d9e9d68eccce95669c3d752e";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=" + unit;
    https.get(url, function(response){
        console.log(response.statusCode);
        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
            res.write("<h1>The weather in " + city + " is " + temp + " degrees Celsius.</h1>");
            res.write("<p><em> which seems to be " + description + ". </em></p>");
            res.write("<img src=" + imageURL + "></img>");
            res.send();
        });
    });
    })

//PORT

app.listen(3000, function(){
    console.log("I am running, bitch...")
});