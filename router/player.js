const express = require("express");
const router = express.Router();
const Player = require("../model/player")

router.get("/list", async (req, resp) => {
    const { position } = req.query;
    try {
        if(position){
        const found = await Player.find({ position: position }).select("pcode playerName playerImg backnum position -_id").lean();
        resp.status(200).json({ result: true, datas: found });
    } else {
        const found = await Player.find({}).select("pcode playerName playerImg backnum position -_id").lean();
        resp.status(200).json({ result: true, datas: found });
    }
    } catch (e) {
        console.log(e.message);
        resp.status(500).json({ result: false });
    }
})

router.get("/detail", async (req,resp)=>{
    const {pcode} = req.query;
    console.log(pcode);
    try {
        const found = await Player.findOne({"pcode":pcode}).lean();
        resp.status(200).json({result:true,datas:found});
    } catch(e){
        console.log(e.message);
        resp.status(500).json({result:false });
    }

})

module.exports = router;