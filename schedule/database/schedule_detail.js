var Sequelize = require('sequelize');
var sequelize = require('./db');
var ScheduleDetail=sequelize.define('schedule_detail',
    {
        id:{
            type:Sequelize.INTEGER,
            primaryKey: true
        },
        title:{
            type:Sequelize.STRING
        },
        startDate:{
            type:Sequelize.DATE,
            field:'start_date'
        },
        endDate:{
            type:Sequelize.DATE,
            field:'end_date'
        },
        actStartDate:{
            type:Sequelize.DATE,
            field:'act_start_date'
        },
        actEndDate:{
            type:Sequelize.DATE,
            field:'act_end_date'
        },
        status:{
            type:Sequelize.STRING
        },
        headIid:{
            type:Sequelize.INTEGER,
            field:'head_id'
        },
        sort:{
            type:Sequelize.INTEGER
        }
    },{
        freezeTableName: false,
        timestamps: false
    }
);
var scheduleDetail = ScheduleDetail.sync({ force: false });

exports.queryScheduleList=function(detail){
    return ScheduleDetail.findAll({where:detail})
}
exports.addScheduleDetail=function(detail){
    return ScheduleDetail.create(detail);
}
exports.updateSchedule=function(detail){
    return ScheduleDetail.update(detail,{where :{id:detail.id}});
}
exports.delete=function(id){
    return ScheduleDetail.destroy({where:{id:id}});
}
exports.findAll=function(){
    return ScheduleDetail.findAll();
}