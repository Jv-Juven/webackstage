var LotteryModel = require("../models/Lottery");
var getInfo_fn = async (ctx, next) => {
	let params = ctx.request.body;
	if (params.pubKey != "20170131") {
		ctx.body = {
			errCode: 1,
			errMsg: "口令错误!"
		}
		return;
	}
	let resData = [];
	let readData = await LotteryModel.findAll({
		where: {
			status: {
				$gte: 3
			}
		}
	});

	readData.forEach((data) => {
		resData.push({
			username: data.userName,
			phone: data.phone,
			award: data.award
		});
	});
	ctx.body = resData;
};

module.exports = {
	'POST /getInfo': getInfo_fn
}
