var express = require('express');
var router = express.Router();
var scheduleHead =require('../database/schedule_head');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

//新增代办
router.post('/addScheduleHead',jsonParser,function(req,res,next){
    var head =req.body;
    head.createDate=new Date();
    scheduleHead.findOne(req.body.title) .then(function(result){
        if(result!=null) {
                throw {code: 501, msg:"代办已存在！"};
        }
        return scheduleHead.addScheduleHead(req.body);
    }).then(function(result){
        res.json({"code":200,"msg":"操作成功！"})
    }).catch(function(error){res.json(error)});
});
//删除代办
router.get('/deleteSchedule',jsonParser,function(req,res,next){
    var id = req.query.id;
    scheduleHead.delete(id).then(function(){
        res.json({code:200,msg:'操作成功！'});
    }).catch(function(error){
        console.log("===删除代办异常===",error);
        res.json({code:501,msg:'删除失败！'});
    });
});
//查询代办
router.post('/queryHead',jsonParser,function(req,res,next){
    var head = req.body;
    if((head.status!=null &&head.status!=undefined)
        || (head.title!=null && head.title!=undefined )){
        scheduleHead.queryHeadList(head).then(function(result){
            res.json({code:200,data:result});
        }).catch(function(error){
            console.log(error);
            res.json({code:501,msg:'查询失败'});
        });
    }else{
        scheduleHead.findAll().then(function(result){
            res.json({code:200,data:result});
        }).catch(function(error){
            console.log(error);
            res.json({code:501,msg:'查询失败'});
        });
    }
});


module.exports = router;