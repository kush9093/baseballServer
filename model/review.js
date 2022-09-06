
const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    comment : {type:String,require:true},
    date: {type:Date,default: () => new Date()},
});

module.exports = mongoose.model("Review",reviewSchema)