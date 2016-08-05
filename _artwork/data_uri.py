#!/usr/bin/env python

# gh-impact
# CC 2016 Ian Dennis Miller

with open("logo.png") as f:
    print("data:image/png;base64," + f.read().encode('base64').replace('\n', ''))
