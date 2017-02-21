// const db = require("../db");
//
// module.exports = db.defineModel('lottery', {
//     awardId: {
//         type: db.INTEGER(10),
//         unique: true
//     }, // 奖品的id
//     userName: {
//         type: db.STRING(100),
//         allowNull: true
//     }, // 姓名
//     phone: {
//         type: db.STRING(100),
//         allowNull: true
//     }, // 手机号码
//     award: {
//         type: db.STRING(100)
//     },  // 奖品名称
//     status: {
//         type: db.INTEGER(10),
//         allowNull: true
//     }, // 抽奖状态 1：不中奖；2：中奖未领奖；3：已领奖；
//     awardType: {
//         type: db.INTEGER(10)
//     },  // 奖品类型：1，通行证；2，背包
//     userToken: {
//         type: db.STRING(200),
//         // unique: true,
//         allowNull: true
//     } // 用户唯一标识，所有抽奖的用户都会产生一个token
// });
