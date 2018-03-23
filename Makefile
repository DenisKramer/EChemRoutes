JEKYLL_VERSION=3.5

build: html cache
	docker run --rm \
  					  --volume="$(shell pwd)/content:/srv/jekyll" \
							--volume="$(shell pwd)/cache:/usr/local/bundle" \
							--volume="$(shell pwd)/html:/srv/output" \
  						-it jekyll/jekyll:${JEKYLL_VERSION} \
  					  jekyll build

serve:
	docker run --rm \
							--volume="$(shell pwd)/content:/srv/jekyll" \
							--volume="$(shell pwd)/cache:/usr/local/bundle" \
							--volume="$(shell pwd)/html:/srv/output" \
							-p 4000:4000 \
							-it jekyll/jekyll:${JEKYLL_VERSION} \
							jekyll serve

html:
	mkdir html

cache:
	mkdir cache

publish:
