var IssueModel = require("../models/Issues");

var getGoodsInfo_fn = async (ctx, next) => {
    let params = ctx.params;
    let limit = parseInt(params.limit) || 20; // 每行数据数量
    let offset = parseInt(params.offset) || 0; // 行号
    try {
        // 获取已审核通过的物品信息
        let goodsInfo = await IssueModel.findAndCount({
            where: {
                goodsStatus: 1
            },
            limit: limit, // 每行的数据
            offset: offset // 从0开始算起的行数
        });
        ctx.body = {
            errCode: 100,
            errMsg: "数据获取成功",
            data: goodsInfo
        };
    } catch (error) {
        ctx.body = {
            errCode: 660,
            errMsg: "数据查询失败"
        };
    }
}

module.exports = {
    "GET /getGoods/:offset?/:limit?": getGoodsInfo_fn
}
