# gh-impact
# CC 2016 Ian Dennis Miller

favicon:
	cd _artwork && convert logo.png -resize 16x16 favicon.ico
	mv _artwork/favicon.ico .

artwork:
	cd _artwork && convert logo.png -flatten -resize 256x256 thumb-big.jpg
	mv _artwork/thumb-big.jpg media

depends:
	pip install csscompressor
	curl -L -o _js/_lib/jekyll_toc.js https://raw.githubusercontent.com/ghiculescu/jekyll-table-of-contents/master/toc.js
	curl -L -o _js/_lib/jquery.md5.js https://github.com/placemarker/jQuery-MD5/raw/master/jquery.md5.js
	curl -L -o _js/_lib/zoomify.min.js https://github.com/indrimuska/zoomify/raw/master/dist/zoomify.min.js
	curl -L -o _sass/_zoomify.min.scss https://github.com/indrimuska/zoomify/raw/master/dist/zoomify.min.css

css:
	python -m csscompressor -o css/gh-impact.min.css _site/css/gh-impact.css

js:
	java -jar ~/Library/Code/compiler.jar --js _site/js/gh-impact.js --js_output_file js/gh-impact.min.js

minify: js css
	@echo "done"

publish:
	git commit -am "automatic publish"

serve:
	bundle exec jekyll serve

production:
	JEKYLL_ENV=production bundle exec jekyll serve

rubygems:
	bundle install --path vendor/bundle

.PHONY: depends publish favicon artwork minify server js css
