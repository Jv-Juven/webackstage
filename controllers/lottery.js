// const LottryModel = require("../models/Lottery");
var lottery_fn = async (ctx, next) => {
    let token = ctx.csrf;
    ctx.body = {
        token: token
    }
    // await LottryModel.create({
    //     awardId: 87,
    //     userName: '陈良华',
    //     phone: '13567309458',
    //     award: '背包',
    //     status: '3',
    //     awardType: 2
    // }).then((created) => {
    //     ctx.body = "抽奖结果created" + created;
    // }).catch((err) => {
    //     ctx.body = "抽奖结果err" + err;
    // });

}

let lottery = () => {}

module.exports = {
    "GET /lottery": lottery_fn
}
