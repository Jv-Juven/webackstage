var LotteryModel = require('../models/Lottery');
var fs = require('fs');
// 写入1000个数字
let setLotteryNums = async () => {
    let lotteryNums = [];
    let randomNums = [];
    let str = "";
    for (let i = 1; i <= 1000; i++) {
        lotteryNums.push(i);
    }
    for (let i = 0; i < 1000; i++) {
        let length = lotteryNums.length;
        // console.log("长度", length);
        let index = Math.floor(Math.random() * length);
        // console.log("索引", index);
        let num = lotteryNums.splice(index, 1)[0];
        // console.log("随机数", num);
        randomNums.push(num);
    }
    // console.log("结果数组：", randomNums);
    str = randomNums.join(",");
    // console.log("结果字符串：", str);
    await fs.writeFile(__dirname + "/../fs_data/lottery.txt", str, (err) => {
        console.log(err);
    });
}

async function fn () {
    // 生成通行证30个数据
    let baseNum = 3;
    for (let i = 0; i < 30; i++) {
        let awardId = 30 * i + baseNum;
        let searchResult = [];
        await LotteryModel.findAll({
            where: {
                awardId: awardId
            }
        }).then((res) => {
            searchResult = res;
            // console.log("searchResult", res);
        });
        if (searchResult.length == 0 ) {
            await LotteryModel.create({
                awardId: awardId,
                userName: "",
                phone: "",
                award: "通行证",
                status: 2,
                awardType: 1,
                userToken: ""
            });
        }
    }
    // 生成背包10个数据
    for (let i = 0; i < 10; i++) {
        let awardId = 90 * i + 2;
        let searchResult = [];
        await LotteryModel.findAll({
            where: {
                awardId: awardId
            }
        }).then((res) => {
            searchResult = res;
            // console.log("searchResult", res);
        });
        // console.log("awardId: " + (typeof searchResult));
        if (searchResult.length == 0 ) {
            await LotteryModel.create({
                awardId: awardId,
                userName: "",
                phone: "",
                award: "背包",
                status: 2,
                awardType: 2,
                userToken: ""
            });
        }
    }
    // 写入1000个数字
    await setLotteryNums().then((res) => {
        console.log("随机数字生成成功" + res);
    }).catch((err) => {
        console.log("随机数据生成失败" + err);
    });

    // process.exit(0);
};

module.exports = fn;
