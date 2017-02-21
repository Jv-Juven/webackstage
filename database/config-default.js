/**
 * 默认配置
 */
var config = {
    dialect: 'mariadb',
    database: 'webackstage', // 使用哪个数据库
    username: 'root', // 用户名
    password: '', // 口令
    host: 'localhost', // 主机名
    port: 3306, // 端口号，MySQL默认3306
    define: {
        schema: "core"
    }
}

module.exports = config;
