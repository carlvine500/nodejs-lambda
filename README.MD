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

## 本地测试
docker run -p9000:8080 -it 304321233127.dkr.ecr.cn-northwest-1.amazonaws.com.cn/frontend/nodejs-lambda:v1
# 参数通过test-base64.js生成
```
curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{"scriptName":"test2.js","scriptBase64":"CmNvbnN0IHBsYXl3cmlnaHQgPSByZXF1aXJlKCdwbGF5d3JpZ2h0LWF3cy1sYW1iZGEnKTsKZXhwb3J0cy5tYWluID0gYXN5bmMgKCkgPT4gewogICAgYnJvd3NlciA9IGF3YWl0IHBsYXl3cmlnaHQubGF1bmNoQ2hyb21pdW0oe2hlYWRsZXNzOnRydWV9KTsKICAgIGNvbnN0IGNvbnRleHQgPSBhd2FpdCBicm93c2VyLm5ld0NvbnRleHQoKTsKICAgIHZhciBwYWdlID0gYXdhaXQgYnJvd3Nlci5uZXdQYWdlKCk7CiAgICBhd2FpdCAgcGFnZS5nb3RvKCJodHRwOi8vdnBuLW5pbmd4aWEuc3VjY2Vzc2NoYW5uZWwudGVjaD90aW5nZmVuZyIpOwogICAgY29uc29sZS5sb2coJ1BhZ2UgdGl0bGU6ICcsIGF3YWl0IHBhZ2UudGl0bGUoKSk7CiAgICBhd2FpdCBwYWdlLnNjcmVlbnNob3Qoe3BhdGg6Jy90bXAvZWcucG5nJ30pCiAgICBhd2FpdCBicm93c2VyLmNsb3NlKCk7Cn07Cg=="}
```

## 快速制作docker镜像
适用于只改index.js的场景
make -f Makefile.patch