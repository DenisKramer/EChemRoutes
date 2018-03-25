JEKYLL_VERSION=3.5
S3_BUCKET_NAME=www.elchemroutes2018.events

.PHONY: build
build: html cache
	@docker run --rm \
  					  --volume="$(shell pwd)/content:/srv/jekyll" \
							--volume="$(shell pwd)/cache:/usr/local/bundle" \
							--volume="$(shell pwd)/html:/srv/output" \
  						-it jekyll/jekyll:${JEKYLL_VERSION} \
  					  jekyll build

.PHONY: serve
serve:
	@	docker run --rm \
							--volume="$(shell pwd)/content:/srv/jekyll" \
							--volume="$(shell pwd)/cache:/usr/local/bundle" \
							--volume="$(shell pwd)/html:/srv/output" \
							-p 4000:4000 \
							-it jekyll/jekyll:${JEKYLL_VERSION} \
							jekyll serve

publish: build
	aws s3 sync --region eu-west-2 html s3://${S3_BUCKET_NAME}

html:
	mkdir html

cache:
	mkdir cache

clean:
	rm -rf cache
	rm -rf html
