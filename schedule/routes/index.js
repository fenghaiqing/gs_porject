var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
/* GET home page. */
router.get('/',jsonParser, function(req, res, next) {
    if(!req.session.userName){ //判断session 状态，如果有效，则返回主页，否则转到登录页面
        res.render('login');
    }else{
        res.render('index');
    }
});
router.get('/index',function(req, res, next){
    if(!req.session.userName){ //判断session 状态，如果有效，则返回主页，否则转到登录页面
        res.render('login');
    }else{
        res.render('index');
    }
});
router.get('/addList',function(req, res, next){
    if(!req.session.userName){ //判断session 状态，如果有效，则返回主页，否则转到登录页面
        res.render('login');
    }else{
        res.render('list');
    }

});
router.get('/addSchedule',function(req, res, next){
    if(!req.session.userName){ //判断session 状态，如果有效，则返回主页，否则转到登录页面
        res.render('login');
    }else{
        res.render('scheduler');
    }

});
module.exports = router;
