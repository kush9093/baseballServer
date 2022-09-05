const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const playerRouter = require("./router/player")
const recordRouter = require("./router/record")
const reviewRouter = require("./router/support")

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, { dbName: "kiatigers" });

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());


app.use("/tigers/player", playerRouter)
app.use("/tigers/record", recordRouter)
app.use("/tigers/support", reviewRouter)




app.listen(8080, () => {
    console.log("[SERVER] START")
})


