var IssueModel = require("../models/Issues");
var changeStatus_fn = async (ctx, next) => {
    let params = ctx.request.body;
    // token验证
    //
    //
    try {
        let update = await IssueModel.update({
            goodsStatus: params.goodsStatus || 0
        }, {
            where: {
                goodsId: params.goodsId
            }
        });
        ctx.body = params;
        // ctx.body = {
        //     errCode: 100,
        //     errMsg: "修改状态成功"
        // }
    } catch (error) {
        ctx.body = {
            errCode: 660,
            errMsg: "修改状态失败"
        }
    }
}

module.exports = {
    "POST /editStatus": changeStatus_fn
}
