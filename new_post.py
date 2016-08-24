#!/usr/bin/env python
# new_post.py
# derived from:
# - http://benjamincongdon.me/blog/2016/03/21/Jekyll-New-Post-Script/
# - http://github.com/pubgem/www-pubgem-org

from datetime import datetime

TEMPLATE = """\
---
layout:     post
title:      {0}
date:       {1}
tags:       {2}
image:      http://www.gh-impact.com/media/thumb-big.jpg
excerpt:    This blurb ends up in twitter and facebook cards.
published:  false
---

"""

if __name__ == "__main__":

    title = raw_input("Title:\n")
    tags = raw_input("tags:\n")

    timestamp = datetime.today().strftime("%Y-%m-%d %H:%M:%S")
    datestamp = datetime.today().strftime("%Y-%m-%d")

    file_name = datestamp + "-" + "-".join(title.split(" ")).lower() + ".markdown"

    with open("_posts/" + file_name, "w+") as file:
        file.write(TEMPLATE.format(title, timestamp, tags))
