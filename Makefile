# gh-impact
# CC 2016 Ian Dennis Miller

depends:
	curl -L -o _js/20_jekyll_toc.js https://raw.githubusercontent.com/ghiculescu/jekyll-table-of-contents/master/toc.js
	curl -L -o _js/10_jquery.md5.js https://github.com/placemarker/jQuery-MD5/raw/master/jquery.md5.js

js:
	cat _js/*.js > js/gh-impact.js
	@echo "Done"

.PHONY: depends js
