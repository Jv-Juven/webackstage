var LotteryModel = require("../models/Lottery");
var getInfo_fn = async (ctx, next) => {
	let readData = await LotteryModel.findAll();
	ctx.body = readData;
};

module.exports = {
	'GET /getInfo': getInfo_fn
}
