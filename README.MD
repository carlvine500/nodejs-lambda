## aws lambda nodejs playwright simple test
### 运行方式1,上传aws lambda代码
1. npm install
2. zip
``` 
 rm -rf function;
 mkdir function;
 cp -r node_modules  ./function/;
 cp index.js ./function/;
 cd function;
 zip -r function.zip .;
 cd ../;
```
5. upload function.zip to aws lambda code,注意内存和超时时间选择大一些

### 运行方式二
1. make build;make push
2. aws lambda选择容器运行,注意内存和超时时间选择大一些

## refer:
依赖包playwright-aws-lambda代码打包执行, 自行弄兼容性问题多:
https://scrapingant.com/blog/how-to-run-playwright-on-aws-lambda
