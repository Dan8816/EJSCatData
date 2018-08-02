// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
console.log("Let's find out what express is", express);
// invoke express and store the result in the variable app
var app = express();
console.log("Let's find out what app is", app);
// use app's get method and pass it the base route '/' and a callback
app.get('/', function(request, response) {
   response.render("index");
})
app.get('/cats', function(request, response) {
    var kitties_array = [
        {name:"RollCat", imageLink:"/images/RollCat.jpg"},
        {name:"HalfCat", imageLink:"/images/HalfCat.jpg"},
        {name:"MonaLisa", imageLink:"/images/MonaLisa.jpg"},
        {name:"Heathcliff", imageLink:"/images/Heath.jpg"},
        {name:"Garfield", imageLink:"/images/Garf.png"}
    ]
    response.render("cats", {kitties: kitties_array});
  })
app.get('/RollCat', function(request, response){
    cat = {name:"RollCat", favFood:"mice", age:1, sleepSpots:["beds or", "under the bed"], imageLink:"/images/RollCat.jpg"};
    response.render("thisCat", cat);
})
app.get('/HalfCat', function(request, response){
    cat = {name:"HalfCat", favFood:"mice", age:1, sleepSpots:["beds or", "under the bed"], imageLink:"/images/HalfCat.jpg"};
    response.render("thisCat", cat);
})
app.get('/MonaLisa', function(request, response){
    cat = {name:"MonaLisa", favFood:"mice", age:1, sleepSpots:["beds or", "under the bed"], imageLink:"/images/MonaLisa.jpg"};
    response.render("thisCat", cat);
})
app.get('/Heathcliff', function(request, response){
    cat = {name:"Heathcliff", favFood:"mice", age:1, sleepSpots:["beds or", "under the bed"], imageLink:"/images/Heath.jpg"};
    response.render("thisCat", cat);
})
app.get('/Garfield', function(request, response){
    cat = {name:"Garfield", favFood:"mice", age:1, sleepSpots:["beds or", "under the bed"], imageLink:"/images/Garf.png"};
    response.render("thisCat", cat);
})
app.use(express.static(__dirname + "/static"));// this is the line that tells our server to use the "/static" folder for static content
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it
app.set('views', __dirname + '/views');// This sets the location where express will look for the ejs viewscopy 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');
app.listen(8000, function() {
  console.log("listening on port 8000");// tell the express app to listen on port 8000, always put this at the end of your server.js file
})