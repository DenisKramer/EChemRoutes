JEKYLL_VERSION=stable

# Distribution target
S3_BUCKET_NAME=www.elchemroutes2018.events

# Application form targets
APPL_FORM_JS_FILES=main.bundle.js polyfills.bundle.js inline.bundle.js
APPL_FORM_CSS_FILES=styles.bundle.css
APPL_FORM_JS_DIR=html/js/apply
APPL_FORM_CSS_DIR=html/css/apply
APPL_FORM_FILES=$(addprefix ${APPL_FORM_JS_DIR}/,${APPL_FORM_JS_FILES})
APPL_FORM_FILES+=$(addprefix ${APPL_FORM_CSS_DIR}/,${APPL_FORM_CSS_FILES})
APPL_FORM_DIST_DIR=application-form/dist
APPL_FORM_SRC_DIR=application-form/src

.PHONY: build
build: .jekyllbuild ${APPL_FORM_FILES}
.jekyllbuild: html cache $(find content)
	@docker run --rm \
  					  --volume="$(shell pwd)/content:/srv/jekyll" \
							--volume="$(shell pwd)/cache:/usr/local/bundle" \
							--volume="$(shell pwd)/html:/srv/output" \
  						-it jekyll/jekyll:${JEKYLL_VERSION} \
  					  jekyll build
	touch .jekyllbuild

.PHONY: serve
serve:
	http-server ./html

publish: build
	aws s3 sync --region eu-west-2 html s3://${S3_BUCKET_NAME}

html:
	mkdir html

cache:
	mkdir cache

clean:
	rm -rf cache
	rm -rf html

# Angular application form copy rules
.PHONY: application-form
application-form: $(addprefix ${APPL_FORM_JS_DIR}/,${APPL_FORM_JS_FILES})
application-form: $(addprefix ${APPL_FORM_CSS_DIR}/,${APPL_FORM_CSS_FILES})

${APPL_FORM_JS_DIR} ${APPL_FORM_CSS_DIR}:
	mkdir -p $<

${APPL_FORM_JS_DIR}/%: ${APPL_FORM_DIST_DIR}/%
	mkdir -p $(@D) && cp -f $< $@

${APPL_FORM_CSS_DIR}/%: ${APPL_FORM_DIST_DIR}/%
	mkdir -p $(@D) && cp -f $< $@

${APPL_FORM_DIST_DIR}/%: $(shell find ${APPL_FORM_SRC_DIR})
	cd application-form && ng build --prod --aot --base-href=/apply/ --output-hashing none
