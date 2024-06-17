// get the module express
const express = require('express');

const path = require('path');

// make (instantiate) the object
const app = express();

const HTTP_PORT = 8080;

// Express JS set as templeting engine
app.set('view engine', 'ejs');


// Setting the view directory
const viewsPath = path.join(__dirname, 'VIEW');
console.log('Views directory:', viewsPath);
app.set('views', viewsPath);


// Static files from "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
    res.render('index', {title: 'Home'})
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});

app.get('/contact', (req, res) => {
    res.render('contact', {title: 'Contact'});
});


app.listen(HTTP_PORT, () => console.log ('server is running http://localhost:${HTTP_PORT}'));