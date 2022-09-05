
const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
    position:String,
    pcode:String,
});

module.exports = mongoose.model("Player",playerSchema)