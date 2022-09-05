
const mongoose = require("mongoose");

const pitchingSchema = new mongoose.Schema({
    pcode:{type:String,require:true},
    displayDate:{type:String,require:true},
    stadium:{type:String,require:true},
    matchTeamName:{type:String,require:true},
    wls:{type:String,require:true},
    oc:{type:Number,require:true},
    ab:{type:Number,require:true},
    bb:{type:Number,require:true},
    er:{type:Number,require:true},
    era:{type:String,require:true},
    hit:{type:Number,require:true},
    hp:{type:Number,require:true},
    hr:{type:Number,require:true},
    innDisplay:{type:String,require:true},
    kk:{type:Number,require:true},
    pa:{type:Number,require:true},
    r:{type:Number,require:true},
    tugucount:{type:Number,require:true},
});

module.exports = mongoose.model("Pitching",pitchingSchema)