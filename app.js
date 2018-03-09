var express=require('express');
var app = express();
var bodyParser=require('body-parser');
var mongoose=require('mongoose');

Genre = require('./models/genre.js');

mongoose.connect('mongodb://localhost/bookstore');
var db=mongoose.connection;
app.get('/',function (req,res) {
    res.send('ok write h!!!');
});
app.get('/api/genres',function (req,res) {
    genre.getgenres(function (err,genres) {
        if(err){
            throw err;
        }

        res.json(genres);
    });
});

app.listen(3000);
console.log('Your port is running on port 3000....');



