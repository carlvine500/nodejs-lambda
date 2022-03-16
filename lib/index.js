// const {handler} = require("./app");
// // 转为base64
// var strToBase64 = new Buffer('aaabbbccc').toString('base64');
// // base64反解析为字符串
// var base64ToStr = new Buffer(str , 'base64').toString();
var crypto = require('crypto');
const fs = require("fs");
const path = require("path");

function md5(password) {
    var md5 = crypto.createHash('md5');
    return md5.update(password).digest('hex');
}
exports.handler = async (event, context) => {
    try {
        console.log('make link')
        fs.symlinkSync(path.resolve('./node_modules'),'/tmp/node_modules','dir');
        const params = JSON.parse(event.body);
        let script = new Buffer(params.scriptBase64 , 'base64').toString();
        console.log('receive script'+script);
        let filePath = '/tmp/' + params.scriptName ;
        fs.writeFile(filePath, script, (err) => {
            console.log('write file success')
        });
        var dynModule = require(filePath);
        dynModule.main();
    } catch (error) {
        throw error;
    } finally {

    }
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};

// handler;