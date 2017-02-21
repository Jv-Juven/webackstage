let qiniu = require("qiniu");

let bucket,
    key,
    token;

//需要填写你的 Access Key 和 Secret Key
qiniu.conf.ACCESS_KEY = '_FphakKEQA8oK8EhGBzgvvf11bOY_mxtBMvBq9gK';
qiniu.conf.SECRET_KEY = 'sX-WX-5UFwkyB5Ukzz9L5OnI15-TRurTmVjdFbMf';

//要上传的空间
bucket = 'weplatform';
//上传到七牛后保存的文件名
key = 'my-nodejs-logo.png';
//构建上传策略函数
function uptoken(bucket, key) {
  var putPolicy = new qiniu.rs.PutPolicy(bucket+":"+key);
  return putPolicy.token();
}
//生成上传 Token
token = uptoken(bucket, key);
