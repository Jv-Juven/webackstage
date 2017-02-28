let qiniu = require("qiniu");

let bucket,
    key,
    token;

var getToken_fn,
    upload_fn;

//需要填写你的 Access Key 和 Secret Key
qiniu.conf.ACCESS_KEY = '_FphakKEQA8oK8EhGBzgvvf11bOY_mxtBMvBq9gK';
qiniu.conf.SECRET_KEY = 'sX-WX-5UFwkyB5Ukzz9L5OnI15-TRurTmVjdFbMf';

//要上传的空间
bucket = 'sjjxsm';
//上传到七牛后保存的文件名
key = 'weixin_pic.jpg';
//构建上传策略函数
function uptoken(bucket) {
  var putPolicy = new qiniu.rs.PutPolicy(bucket);
  return putPolicy.token();
}
//生成上传 Token
token = uptoken(bucket);

//要上传文件的本地路径
filePath = './ruby-logo.png'
//构造上传函数
function uploadFile(uptoken, key, localFile) {
  var extra = new qiniu.io.PutExtra();
    qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
      if(!err) {
        // 上传成功， 处理返回值
        console.log(ret.hash, ret.key, ret.persistentId);
      } else {
        // 上传失败， 处理返回代码
        console.log(err);
      }
  });
}

getToken_fn = async (ctx, next) => {
    ctx.body = {
        uptoken: token
    }
    // ctx.body = token;
}

upload_fn = async (ctx, next) => {

    //调用uploadFile上传
    uploadFile(token, key, filePath);
}

module.exports = {
    "GET /getToken": getToken_fn,
    "POST /upload": upload_fn
}
