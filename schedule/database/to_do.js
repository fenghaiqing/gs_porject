var Sequelize = require('sequelize');
var sequelize = require('./db');
var ToDo=sequelize.define('to_do',
    {
        id:{
            type:Sequelize.INTEGER,
            primaryKey: true
        },
        detailId:{
            type: Sequelize.STRING,
            field: 'detail_id'
        },
        status:{
            type: Sequelize.STRING
        },
        type:{
            type: Sequelize.STRING
        },
        createDate:{
            type: Sequelize.DATE,
            field: 'create_date'
        }
    },{
        freezeTableName: false,
        timestamps: false
    }
);
var todo = ToDo.sync({ force: false });

exports.addTodo=function (todo) {
    return ToDo.create(todo);
};
