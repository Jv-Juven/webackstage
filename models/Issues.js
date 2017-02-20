const db = require("../db");

module.exports = db.defineModel('lottery', {
    goodsId: {
        type: db.INTEGER(10),
        unique: true
    }, // 发布物品id
    goodsName: {
        type: db.STRING(100),
        allowNull: true
    }, // 发布物品名称
    intro: {
        type: db.STRING(100),
        allowNull: true
    }, // 物品简介
    price: {
        type: db.FLOAT
    }, // 价格
    nickName: {
        type: db.STRING(100),
        allowNull: true
    }, // 用户昵称
    contactWay: {
        type: db.INTEGER,
        defaultValue: 1
    }, // 联系方式， 1: QQ, 2: Wechat
    contactNum: {
        type: db.STRING(11)
    }, // 联系号码
    phone: {
        type: db.STRING(100),
        // allowNull: true
    }, // 手机号码
    sellerRemarks: {
        type: db.TEXT,
        allowNull: true
    }, // 卖家补充
    imgs: {
        type: db.ARRAY(db.TEXT),
        allowNull: true
    } // 多张图片
});
