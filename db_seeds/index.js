require('babel-core/register')({
    presets: ['stage-3']
});

let lottery = require("./lottery");
lottery().then(() => {
    console.log("奖品数据插入成功...");
}).catch((err) => {
    console.log(err);
});
