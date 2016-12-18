const LotteryModel = require("../models/Lottery");

const jwt = require('koa-jwt');

var fs = require("fs");

let lottery = async () => {
    let readResult = "";
    let
        lotteryNum, // 奖品id(包括有奖、无奖)
        resArr,
        award,
        status,
        awardInfo;
    // 读取抽奖候选数据
    readResult = fs.readFileSync(__dirname + "/../fs_data/lottery.txt", "utf-8");
    if (readResult.length != 0) {
        resArr = readResult.split(",");
        lotteryNum = resArr.pop();
        // 写回数据
        fs.writeFile(__dirname + "/../fs_data/lottery.txt", resArr.join(","), (err) => {
            if (err) {
                console.log("再次写入文件出错", err);
            }
        });
        award = await LotteryModel.findAll({
            where: {
                awardId: lotteryNum
            }
        });

        if (award.length == 0) {
            status = 1;
        } else {
            status = 2;
        }
    } else {
        status = 1;
    }

    awardInfo = () => {
        if (award[0]) {
            return {
                award: award[0].award,
                awardType: award[0].awardType, // 奖品类型，1为通行证，2为背包；
                status: award[0].status
            }
        } else {
            return {}
        }
    }


    return {
        status: status,
        award: award[0] // awardInfo()
    };
}
var lottery_fn = async (ctx, next) => {
    let readResult = await lottery();
    let token = jwt.sign({
        awardId: readResult.award.awardId
    }, 'secret', { expiresIn: "60 days" });

    // 更新抽中奖品的数据
    if (readResult.status === 2) {
        LotteryModel.update({
            userToken: token
        }, {
            where: {
                awardId: readResult.award.awardId
            }
        });
    }

    ctx.body = {
        token: token,
        result: readResult
    }
    // await LotteryModel.create({
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


module.exports = {
    "GET /lottery": lottery_fn
}
