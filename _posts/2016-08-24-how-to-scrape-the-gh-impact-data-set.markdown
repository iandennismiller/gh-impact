---
layout:     post
title:      How to scrape the gh-impact data set
date:       2016-08-24 15:25:01
tags:       howto
---

The *gh-impact* score data are available from this website, and this post will explain how to obtain a CSV file.  I used this procedure to create a CSV file that is current as of 2016-08-24, [which can be downloaded here](/media/gh-impact-2016-08-24.csv.gz).  To obtain fresh data, keep reading this post.

The data stored on the website are optimized for online search, so they use the JSON file format.  Most researchers would probably prefer a CSV, which is much easier to load into R or Excel.

The following Python script will download the entire gh-impact database, which is stored in 256 separate JSON files, and assemble a single CSV file called `gh-impact.csv`.

{% highlight python %}

#!/usr/bin/env python

from __future__ import print_function
import requests  # pip install requests
import time
import csv

full_data = dict()

for i in range(0, 256):
    # determine URL to download
    bucket = hex(i)[2:]
    if len(bucket) == 1:
        bucket = "0" + bucket
    url = 'http://www.gh-impact.com/data/json/{0}.json'.format(bucket)

    print("request url {0}".format(url))
    response = requests.get(url)
    full_data = dict(full_data.items() + response.json().items())

    print("{0}/256: {1} accounts retrieved.".format(i+1, len(full_data)))
    time.sleep(2)  # keep it under 30 requests per minute

print("writing CSV")
f = csv.writer(open("gh-impact.csv", "wb+"))
f.writerow(["login", "gh_impact_score"])
for account in full_data.values():
    f.writerow([account["l"], account["s"]])

{% endhighlight %}

This [script can be downloaded](/media/download-gh-impact.py) to run on your own machine.  Be sure to install the requests library by running `pip install requests`.  Finally, run `python download-gh-impact.py` and wait about 9 minutes for the CSV to be created.
