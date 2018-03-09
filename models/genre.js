var mongoose = require('mongoose');
//Genre Schema
var genresSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    create_date:{
        type:Date,
        default:Date.now
    }
});
var genre = module.exports= mongoose.model('genre',genresSchema);

//Get Genres

module.exports.getgenres= function(callback,limit){
    genre.find(callback).limit(limit);
};








