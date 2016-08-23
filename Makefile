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

minify:
	java -jar ~/Library/Code/compiler.jar --js _site/js/gh-impact.js --js_output_file js/gh-impact.min.js
	python -m csscompressor -o css/gh-impact.min.css _site/css/gh-impact.css

publish:
	git commit -am "automatic publish"

server:
	JEKYLL_ENV=production jekyll serve

watermark:
	convert -size 300x50 xc:grey30 -font Arial -pointsize 20 -gravity center \
		-draw "fill grey70  text 0,0  'www.gh-impact.com'" \
		stamp_fgnd.png
	convert -size 300x50 xc:black -font Arial -pointsize 20 -gravity center \
		-draw "fill white  text  1,1  'www.gh-impact.com'  \
			text  0,0  'www.gh-impact.com'  \
			fill black  text -1,-1 'www.gh-impact.com'" \
		+matte stamp_mask.png
	composite -compose CopyOpacity  stamp_mask.png  stamp_fgnd.png  stamp.png
	mogrify -trim +repage stamp.png

	for i in media/*.png; do \
		composite -dissolve 25% -gravity southeast -geometry +5+5 stamp.png $$i out.png; \
		mv out.png $$i; \
	done
	rm stamp.png stamp_mask.png stamp_fgnd.png

.PHONY: depends publish favicon artwork minify server watermark
