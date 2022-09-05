const express = require("express");
const router = express.Router();
const Pitching = require("../model/pitching")
const Hitting = require("../model/hitting")

router.get("/pitching",async (req,resp)=>{
    const {pcode} = req.query;
    try {
        const found = await Pitching.find({pcode:pcode}).lean();
        const summary = {kk:0,l:0,sv:0,w:0};
        let er = 0;
        let innDisplay = 0;
        found.forEach((elm)=>{
            er += Number(elm.er);
            summary.kk += Number(elm.kk);
            if(elm.innDisplay.split(" ").length>1){
                let leg = elm.innDisplay.split(" ");
                innDisplay += Number(leg[0]);
                let le = leg[1].split("/");
                innDisplay += Number(le[0])/Number(le[1])

            } else {
                innDisplay += Number(elm.innDisplay)??0
            }
            switch(elm.wls){
                case "W":
                    summary.w++;
                    break;
                case "L":
                    summary.l++;
                    break;
                case "S":
                    summary.sv++;
                    break;
                default:
                    break;
            }
            
        })
        summary["era"] = ((er*9)/innDisplay).toFixed(2);
        resp.status(200).json({result:true,summary:summary,datas:found})        // 중간에 계산도 필요 summary
    } catch(e){
        console.log(e.message);
        resp.status(500).json({result:false});
    }

})

router.get("/hitting", async (req,resp)=>{
    const {pcode} = req.query;
    try {
        const found = await Hitting.find({pcode:pcode}).lean();
        const summary = {gamenum:found.length,hit:0,hr:0,rbi:0,hra:0}
        let pa = 0;
        found.forEach((elm)=>{
            summary.hit += Number(elm.hit);
            summary.hr += Number(elm.hr);
            summary.rbi += Number(elm.rbi);
            pa += Number(elm.pa);
        })
        summary["hra"] = (summary.hit/pa).toFixed(3);

        resp.status(200).json({result:true,summary,datas:found})  // 중간에 계산도 필요 summary
    } catch(e){
        console.log(e.message);
        resp.status(500).json({result:false});
    }
})




module.exports = router;