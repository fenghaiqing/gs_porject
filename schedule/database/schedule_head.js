var Sequelize = require('sequelize');
var sequelize = require('./db');
var ScheduleHead = sequelize.define("schedule_head",
    {
        id:{
            type:Sequelize.INTEGER,
            primaryKey: true
        },
        title:{
            type:Sequelize.STRING
        },
        status:{
            type:Sequelize.STRING
        },
        createDate:{
            type:Sequelize.DATE
        }
    },{
        freezeTableName: false,
        timestamps: false
    }
);

var scheduleHead = ScheduleHead.sync({ force: false });

//新增
exports.addScheduleHead=function(head){
    return ScheduleHead.create(head);
}
//根据标题查询
exports.findOne=function(title){
    return ScheduleHead.findOne({where:{title:title}})
}
//查询
exports.queryHeadList=function(head){
    return ScheduleHead.find({where:{head}});
}

exports.findAll=function(){
    return ScheduleHead.findAll();
}

//更新
exports.updateSchedule=function(head){
    return ScheduleHead.update(head,{where:{id:head.id}})
}
//删除
exports.delete=function(id){
    return ScheduleHead.destroy({where :{id:id}});
}