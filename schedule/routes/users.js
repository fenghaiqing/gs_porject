var express = require('express');
var router = express.Router();
var user =require('../database/user');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

//注册
router.get('/register',jsonParser, function(req, res, next) {
   user.findByName(req.query.userName).then(function(users,err){
       if(users.length!=0){
           throw {msg:"用户已存在!",code:501};
       }else{
           return user.addUser(req.query.userName,req.query.password);
       }
   })
    .then(function(users){
        res.json(users);
    }).catch(function(err){
        res.json(err)
   });
});

// 登录
router.post('/login',jsonParser, function(req, res) {
    var param =req.body;
    user.login(param.userName,param.password).then(function(result){
         if(result!=null&&result!=undefined){
             req.session.userName = result.userName;
             res.json({code:200});
         }else{
             res.json({code:501,msg:'账号密码错误！'})
         }
     });
});

// 退出
router.get('/logout', function (req, res) {
    req.session.userName = null; // 删除session
    res.render('/user/login');
});

module.exports = router;
