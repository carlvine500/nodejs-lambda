var fs=require("fs");
var path = require("path");

function main2(){
    // lambda只有在/tmp目录下有权限,或者可以挂载efs分布式文件系统来处理
    // node_modules放到/tmp下,确保脚本有依赖内容
    if(!fs.existsSync('/tmp/node_modules')){
        fs.symlinkSync(path.resolve('./node_modules'),'/tmp/node_modules','dir');
    }
    fs.copyFile('test.js', '/tmp/test1.js', (err) => {
        if (err) throw err;
        console.log('source.txt was copied to destination.txt');
        // 测试动态的依赖文件
        var test = require('/tmp/test1.js');
        test.main()
    });
}


main2()
