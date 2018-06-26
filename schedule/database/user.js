var Sequelize = require('sequelize');
var sequelize = require('./db');
var User = sequelize.define('users', {
    id:{
        type:Sequelize.INTEGER,
        primaryKey: true
    },
    userName: {
        type: Sequelize.STRING, // 指定值的类型
        field: 'user_name' // 指定存储在表中的键名称
    },
    // 没有指定 field，表中键名称则与对象键名相同
    password: {
        type: Sequelize.STRING
    }
}, {
    // 如果为 true 则表的名称和 model 相同，即 user
    // 为 false MySQL创建的表名称会是复数 users
    // 如果指定的表名称本就是复数形式则不变
    freezeTableName: false,
    timestamps: false
});
var user = User.sync({ force: false });
// 添加新用户
exports.addUser = function(userName, email) {
    // 向 user 表中插入数据
    return User.create({
        id:null,
        userName: userName,
        password: email
    });
};
// 通过用户名查找用户
exports.findByName = function(userName) {
    return User.findAll({ where: { user_name: userName } });
};

exports.login = function(userName,password) {
    return User.findOne({ where: {user_name:userName,password:password} });
};