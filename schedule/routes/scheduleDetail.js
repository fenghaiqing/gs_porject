var express = require('express');
var router = express.Router();
var scheduleDetail =require('../database/schedule_detail');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

router.get('/delete',jsonParser,function (req,res,next) {
    var id=req.query.id;
    scheduleDetail.delete(id).then(function(result){
        res.json({code:200,data:result});
    }).catch(function(err){
        console.log(err);
        res.json({code:501,msg:'操作失败！'});
    });
});
router.post('/queryScheduleDetail',jsonParser,function (req,res,next) {
    var detail = req.body;
    if(!isNull(detail.title) || !isNull(detail.status) ||!isNull(detail.endDate) ){
        scheduleDetail.queryScheduleList(detail).then(function (result) {
            res.json({code:200,data:result});
        }).catch(function (err) {
            console.log(err);
            res.json({code:501,msg:'系统异常'});
        });
    }else{
        scheduleDetail.findAll().then(function (result) {
            res.json({code:200,data:result});
        }).catch(function (err) {
            console.log(err);
            res.json({code:501,msg:'系统异常'});
        });
    }
});

router.post('/addScheduleDetail',jsonParser,function (req,res,next) {
   var detail=req.body;
    scheduleDetail.addScheduleDetail(detail).then(function () {
        res.json({code:200});
    }).catch(function (err) {
        console.log(err);
        res.json({code:501,msg:'系统异常'});
    })
});

router.post('/updateScheduleDetail',jsonParser,function (req,res,next) {
    var detail = req.body;
    scheduleDetail.updateSchedule(detail).then(function () {
        res.json({code:200});
    }).catch(function (err) {
        console.log(err);
        res.json({code:200,msg:'系统异常'});
    })
});

function isNull(str){
    return str==null || str==undefined || str=='';
}

module.exports = router;