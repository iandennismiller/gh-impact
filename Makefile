# gh-impact
# CC 2016 Ian Dennis Miller

favicon:
	cd _artwork && convert logo.png -resize 16x16 favicon.ico
	mv _artwork/favicon.ico .

artwork:
	cd _artwork && convert logo.png -resize 256x256 thumb-big.jpg
	mv _artwork/thumb-big.jpg media

depends:
	curl -L -o _js/20_jekyll_toc.js https://raw.githubusercontent.com/ghiculescu/jekyll-table-of-contents/master/toc.js
	curl -L -o _js/10_jquery.md5.js https://github.com/placemarker/jQuery-MD5/raw/master/jquery.md5.js

js:
	cat _js/*.js > js/gh-impact.js
	@echo "Done"

publish: js
	git commit -am "automatic publish"

.PHONY: depends js publish favicon artwork
