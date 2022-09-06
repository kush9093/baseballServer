const express = require("express");
const router = express.Router();
const reviewRouter = require("../model/review");


router.route("/")
    .post( async (req,resp)=>{
        let {comment} = req.body
        console.log(req.body)
        try{
        if(comment){
        const responce = await reviewRouter.create({"comment":comment});
        resp.status(200).json({result:true,datas:responce})
    } else {
        resp.status(500).json({result:false});
    }
    } catch(e){
        console.log(e.message);
        resp.status(500).json({result:false});
    }

    })
    .get( async (req,resp)=>{
        try{
            const responce = await reviewRouter.find({}).lean();
            resp.status(200).json({result:true,datas:responce})
        } catch(e){
            console.log(e.message);
            resp.status(500).json({result:false});
        }
    })



module.exports = router;