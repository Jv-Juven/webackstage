const LotteryModel = require("../models/Lottery");

const jwt = require('koa-jwt');
var info_fn = async (ctx, next) => {
    let jwtData; // token
    let token = ctx.request.header.token;
    console.log("token", token);
    try {
        let jwtData = jwt.verify(token, 'secret');
        let awardId = jwtData.awardId;
        let params = ctx.request.body;
        let data = LotteryModel.findAll({
            where: {
                awardId: awardId
            }
        });
        if (data.length == 0) {
            ctx.body = {
                errCode: 3,
                errMsg: "很遗憾，没中奖"
            }
            return;
        }

        // 验证姓名和手机号码
        if (!params.username || params.username.length == 0) {
            ctx.body = {
                errCode: 1,
                errMsg: "无效的姓名"
            }
            return;
        }
        if (!params.phone || params.phone.length < 7 || isNaN(parseInt(params.phone))) {
            ctx.body = {
                errCode: 2,
                errMsg: "无效的手机号"
            }
            return;
        }

        // console.log("token", jwtData);
        LotteryModel.update({
            userName: params.username,
            phone: params.phone,
            status: 3
        }, {
            where: {
                awardId: awardId
            }
        });
        ctx.body = {
            errCode: 0,
            errMsg: "提交成功"
        };

    } catch(err) {
        console.log("token出错：", err);
        ctx.body = "无效的用户标志token" + err;
    }
    // ctx.body = ctx.params;
}

module.exports = {
    "POST /info": info_fn
}
