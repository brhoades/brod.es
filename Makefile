default: build

build:
	yarn build

upload:
	yarn upload
	@# Won't work for you
	@echo "invalidating cloudfront" cache
	aws cloudfront create-invalidation --distribution-id E2Q873K59W0JAZ --paths "/*" | jq
