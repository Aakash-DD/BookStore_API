var mongoose = require('mongoose');
//kickstarter Schema
var kickstarterSchema = mongoose.Schema({
    s_no:{
        type:Array,
        required:true
    },
    amt_pledged:{
        type:Array,
    },
    blurb:{
        type:String
    },
    by:{
        type:String,

    },
    country:{
        type:String
    },
    currency:{
        type:String
    },
    end_time:{
        type:String
    },
    location:{
        type:String,

    },
    percentage_funded:{
        type:Array,

    },
    num_backers:{
        type:Array,

    },
    state:{
        type:String,

    },
    title:{
        type:String,

    },
    type:{
        type:String,

    },
    url:{
        type:String,

    }

});
var kickstarter = module.exports= mongoose.model('kickstarter',kickstarterSchema);

//Get kickstarter

module.exports.getkickstarter= function(callback,limit){
    kickstarter.find(callback).limit(limit);
};
//Get kickstarter

module.exports.getkickstarterById= function(id,callback){
    kickstarter.findById(id,callback);
};









