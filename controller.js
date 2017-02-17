// 引入js模块
var fs = require('fs');

// 每个controller的地址添加路由映射
function addMapping (router, mapping) {
	for (var url in mapping) { // 遍历属性名
		if (url.startsWith('GET ')) {
			var path = url.substring(4);
			router.get(path, mapping[url]);
			console.log(`register URL mapping: GET ${path}`);
		} else if (url.startsWith('POST ')) {
			var path = url.substring(5);
			router.post(path, mapping[url]);
			console.log(`register URL mapping: POST ${path}`);
		} else {
			console.log(`invalid URL: ${url}`);
		}
	}
}

// 遍历所有的controller
function addControllers (router) {
	// 获取所有的controllers
	var files = fs.readdirSync('./controllers');
	// 筛选出js文件
	var js_file = files.filter((f) => {
		return f.endsWith('.js');
	});
	// 映射路由
	for (var f of js_file) { // 遍历属性值
		console.log(`process controller: ${f}...`);
		let mapping = require(__dirname + '/controllers/' + f);
		addMapping(router, mapping);
	}
}

module.exports = function (dir) {
	let 
		controllers_dir = dir || 'controllers', // 如果不传参数，扫描目录默认为'controllers'
		router = require('koa-router')();
	addControllers(router);
	return router.routes();
}