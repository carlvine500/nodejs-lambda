all: build

build:
	docker build --pull -t 304321233127.dkr.ecr.cn-northwest-1.amazonaws.com.cn/frontend/nodejs-lambda:v1 .
push:
	docker push 304321233127.dkr.ecr.cn-northwest-1.amazonaws.com.cn/frontend/nodejs-lambda:v1



.PHONY: all build push