
const mongoose = require("mongoose");

const hittingSchema = new mongoose.Schema({
    pcode:{type:String,require:true},
    displayDate:{type:String,require:true},
    stadium:{type:String,require:true},
    matchTeamName:{type:String,require:true},
    pa:{type:Number,require:true},
    ab:{type:Number,require:true},
    run:{type:Number,require:true},
    hit:{type:Number,require:true},
    h2:{type:Number,require:true},
    h3:{type:Number,require:true},
    hr:{type:Number,require:true},
    rbi:{type:Number,require:true},
    sb:{type:Number,require:true},
    bb:{type:Number,require:true},
    kk:{type:Number,require:true},
    gd:{type:Number,require:true},
    hra:{type:String,require:true},
    gamenum:{type:String,require:true},
});

module.exports = mongoose.model("Hitting",hittingSchema)