var Sequelize = require('sequelize');
// var co = require('co');
//
// co(function* () {
//     // code here
// }).catch(function(e) {
//     console.log(e);
// });

var sequelize = new Sequelize(
    'koa', // 数据库名
    'root',   // 用户名
    '',   // 用户密码
    {
        'dialect': 'mariadb',  // 数据库使用mysql
        'host': 'localhost', // 数据库服务器ip
        'port': 3306,        // 数据库服务器端口
        'define': {
            // 字段以下划线（_）来分割（默认是驼峰命名风格）
            'underscored': true
        }
    }
);

var User = sequelize.define(
    'user',
    {
        'emp_id': {
            'type': Sequelize.CHAR(10), // 字段类型
            'allowNull': false,         // 是否允许为NULL
            'unique': true              // 字段是否UNIQUE
        },
        'nick': {
            'type': Sequelize.CHAR(10),
            'allowNull': false
        },
        'department': {
            'type': Sequelize.STRING(64),
            'allowNull': true
        }
    },
    {
        // 自定义表名
        'freezeTableName': true,
        'tableName': 'xyz_users',

        // 是否需要增加createdAt、updatedAt、deletedAt字段
        'timestamps': true,

        // 不需要createdAt字段
        'createdAt': false,

        // 将updatedAt字段改个名
        'updatedAt': 'utime',

        // 将deletedAt字段改名
        // 同时需要设置paranoid为true（此种模式下，删除数据时不会进行物理删除，而是设置deletedAt为当前时间
        'deletedAt': 'dtime',
        'paranoid': true
    }
);

sequelize.sync({
    force: true
});
