## aws lambda nodejs simple test
1. npm install
2. cp -r nodejs-lambda function;
3. cd function;rm -rf .idea; zip -r function.zip ./ (可能包大于50M不让上传aws,删除一些不相关的);
4. upload function.zip to aws lambda code


## refer:
依赖包playwright-aws-lambda代码打包执行, 自行弄兼容性问题多:
https://scrapingant.com/blog/how-to-run-playwright-on-aws-lambda
