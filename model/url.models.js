const mongoose = require("mongoose");


const urlSchema = new mongoose.Schema({




    shortId:{
        type:String,
        required:[true,"shortId is required"],
        unique:[true,"shortId must be unique"]
    },
    redirectUrl:{
        type:String,
        required:[true,"redirect url is required"]
    },
    visitHistory:[{timestamp:{type:Number}}],
},{timestamps:true});

const URL = mongoose.model("URL", urlSchema);
module.exports = URL;