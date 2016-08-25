---
layout:     post
category:   blog
title:      Building a web resource to share gh-impact with the world
date:       2016-08-02 14:00:00
tags:       update
image:      http://www.gh-impact.com/media/thumb-big.jpg
excerpt:    One of the coolest parts about a project like gh-impact is the potential for interaction.  The first question that comes to my mind is - what's my gh-impact score?  In order to enable online users to easily answer that question for themselves, we're going to need a search interface...
---

One of the coolest parts about a project like *gh-impact* is the potential for interaction.  The first question that comes to my mind is: what's my *gh-impact* score?  In order to enable online users to easily answer that question for themselves, we're going to need a search interface.

My first thought was to create a massive, static website using GitHub Pages.  I wrote a Python script to export the top 50,000 results as individual Markdown files.  I checked these into GitHub and waited for their Jekyll engine to render my site.  It never did.  I don't know why not, but I don't blame GitHub.

The solution I ended up with uses JSON to store large dictionaries of *gh-impact* scores.  When a particular name is searched for, the web interface simply downloads the JSON file corresponding to the first letter of the username. If the user has a score, then it will be in that JSON file.  Because the largest of these result JSON files is still under 1MB, it amounts to a very snappy interface.
