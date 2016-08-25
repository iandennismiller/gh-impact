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
