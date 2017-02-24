var Validator = require("../utils/validator");
var IssueModel = require("../models/Issues");
var postIssueInfo_fn = async (ctx, next) => {
    let params = ctx.request.body;

    // 实例化一个验证对象
    let validator = new Validator();
    validator.valid(params.goodsName, "minLength:1", "请输入物品名称");
    validator.valid(params.goodsName, "maxLength:40", "请输入不多于40个字符的物品名称");
    validator.valid(params.intro, "minLength:1", "请输入物品简介");
    validator.valid(params.price, "isNumber", "请输入数字价格");
    validator.valid(params.nickName, "minLength:1", "请输入昵称");
    if (this.contactWay == "1") {
        validator.valid(params.contactNum, "isNumber", "请输入数字QQ号码");
        validator.valid(params.contactNum, "minLength:1", "请输入QQ号码");
    } else {
        validator.valid(params.contactNum, "minLength:1", "请输入微信号");
    }
    validator.valid(params.phone, "isPhone", "手机号码有误，请重新填写");
    validator.start();

    if (!validator.errors[0]) {
        try {
            // 数据库对象函数调用之后不反回Promise对象
            let create = await IssueModel.create({
                goodsName: params.goodsName,
                intro: params.intro,
                price: params.price,
                nickName: params.nickName,
                contactWay: params.contactWay,
                contactNum: params.contactNum,
                phone: params.phone,
                sellerRemarks: params.sellerRemarks,
                imgs: params.imgs.join(",")
            });

            ctx.body = {
                errCode: 100,
                errMsg: "发布信息成功"
            }
        } catch (error) {
            ctx.body = {
                errCode: 660,
                errMsg: "数据插入失败"
            }
        }

    } else {
        ctx.body = {
            errCode: 600,
            errMsg: validator.errors[0]
        }
    }

}

module.exports = {
    "POST /postIssueInfo": postIssueInfo_fn
}
