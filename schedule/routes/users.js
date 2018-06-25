var express = require('express');
var router = express.Router();
var user =require('../database/user');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

/* GET users listing. */
router.get('/',jsonParser, function(req, res, next) {
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
router.post("/login",jsonParser,function(req,res,next){
   return user.login(req.body);
}).then(function(result){
    if(result!=null&&result!=undefined){
        res.json(result);
    }else{
        res.json({code:501,msg:'用户密码不存在！'})
    }
});
module.exports = router;
