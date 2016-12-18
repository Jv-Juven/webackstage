const LottryModel = require("../models/Lottery");
var info_fn = async (ctx, next) => {
    await LottryModel.create({
        awardId: 29,
        userName: '梁朝阳',
        phone: '18967309458',
        award: '通行证',
        status: '2',
        awardType: 1
    }).then((created) => {
        console.log(created);
        ctx.body = "抽奖结果info 成功" + created.dataValues.id;
    }).catch((err) => {
        ctx.body = "抽奖结果info 失败" + err;
    });

}

module.exports = {
    "GET /info": info_fn
}
