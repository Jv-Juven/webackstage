const db = require("../db");

module.exports = db.defineModel('Issues', {
    goodsId: {
        type: db.INTEGER,
        unique: true,
        autoIncrement: true
    }, // 发布物品id
    goodsName: {
        type: db.STRING(100)
    }, // 发布物品名称
    intro: {
        type: db.STRING(100),
        allowNull: true
    }, // 物品简介
    price: {
        type: db.DOUBLE,
        defaultValue: 0.00
    }, // 价格
    nickName: {
        type: db.STRING(100),
        // allowNull: true
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
        type: db.STRING(1000000),
        allowNull: true
    }, // 多张图片
    goodsStatus: {
        type: db.INTEGER,
        defaultValue: 0
    } // 上传信息的物品状态 0: 未处理, 1: 通过审核, 2: 不通过审核；3: 过期下架；4：已售；5：违规；
});
