// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');
// 导入controller middleware:
const controller = require(__dirname + '/controller');
// 引入koa-bodyparser来解析原始request请求
const bodyParser = require('koa-bodyparser');

// 创建一个Koa对象表示web app本身:
const app = new Koa();

// app配置信息
const appConfig = require(__dirname + "/config/app");

// 对于任何请求，app将调用该异步函数处理请求：
// app.use(async (ctx, next) => {
// 	console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
// 	await next();
// });

// 注册koa-bodyparser到app对象上
app.use(bodyParser());

// 添加路由中间件:
app.use(controller());

// 在端口3000监听
app.listen(appConfig.port);
console.log(`app started at port ${appConfig.port}...`);
