#!/usr/bin/env python
# new_post.py
# derived from:
# - http://benjamincongdon.me/blog/2016/03/21/Jekyll-New-Post-Script/
# - http://github.com/pubgem/www-pubgem-org

from datetime import datetime
import sys

BLOG_TEMPLATE = """\
---
layout:     post
category:   blog
title:      {0}
date:       {1}
tags:       {2}
image:      http://www.gh-impact.com/media/thumb-big.jpg
excerpt:    This blurb ends up in twitter and facebook cards.
published:  false
---

"""

REPORT_TEMPLATE = """\
---
layout:     page
category:   reports
title:      {0}
date:       {1}
tags:       {2}
image:      http://www.gh-impact.com/media/thumb-big.jpg
excerpt:    This blurb ends up in twitter and facebook cards.
published:  false
---

"""

if __name__ == "__main__":

    category = raw_input("Which category? [blog] or [report]: ")
    if category not in ["blog", "report"]:
        print("the category is not recognized")
        sys.exit(1)
    title = raw_input("Title: ")
    tags = raw_input("Tags: ")

    timestamp = datetime.today().strftime("%Y-%m-%d %H:%M:%S")
    datestamp = datetime.today().strftime("%Y-%m-%d")

    file_name = datestamp + "-" + "-".join(title.split(" ")).lower() + ".markdown"

    if category == "blog":
        with open("_posts/blog/" + file_name, "w+") as file:
            file.write(BLOG_TEMPLATE.format(title, timestamp, tags))
    elif category == "report":
        with open("_posts/reports/" + file_name, "w+") as file:
            file.write(REPORT_TEMPLATE.format(title, timestamp, tags))
