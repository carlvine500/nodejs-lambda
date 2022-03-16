all: build

build:
	docker build --pull -t 350716731080.dkr.ecr.cn-northwest-1.amazonaws.com.cn/frontend/playwright-serverless-dev-run-tests:v2 .
push:
	docker push 350716731080.dkr.ecr.cn-northwest-1.amazonaws.com.cn/frontend/playwright-serverless-dev-run-tests:v2


.PHONY: all build push