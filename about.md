---
layout: page
title: About
permalink: /about/
---

*gh-impact* is a measure of influence on GitHub.

## Influence

One particular index of influence known as the *H-Index* combines the *quantity* and *quality* of an individual's work to create a single number that basically captures the idea of *influence* (Hirsch, 2005).

> A scientist has index *h* if *h* of his/her *Np* papers have at least *h* citations each, and the other *(Np − h)* papers have no more than *h* citations each.

A more direct way to say it comes from [Wikipedia H-Index](https://en.wikipedia.org/wiki/H-index):

> a scholar with an index of *h* has published *h* papers each of which has been cited in other papers at least *h* times.

## Academia and GitHub

In Academia there are citations, which are a direct reference to another author's work. On GitHub there are stars, watchers, followers, forks, and even other potential metrics that work like citations.  I propose the following typical uses for those GitHub mechanisms:

1. projects are *starred* by people who use those projects
2. projects are *starred* by people who are likely to use those projects in the future
3. projects tend to be *watched* by project owners and others who build the project
4. projects tend to be *forked* by developers who are building part of a project
5. users accounts on GitHub are *followed* for many reasons

GitHub *stars* are therefore the best measure of actual project use. On that basis, *gh-impact* currently substitutes project *stars* for citations in the H-Index computation.

## Data Sources

Researchers at [GHTorrent](http://ghtorrent.org) provide MySQL database dumps on a regular basis (Gousios, 2013).  The **2016-07-19** database dump (approximately 41.3GB) was downloaded and the *users* (~13M rows), *projects* (~34M rows), and *watchers* (~49M rows) tables were extracted as CSV files.  The *watchers* table is named for historical reasons, but it actually contains stars - not watchers.

## Computation

Data were imported into Postgres directly from the MySQL dumps. All subsequent computation was performed in Postgres using SQL, which provides powerful query planning tools.  The basic idea for an H-Index SQL query (Linoff, 2013) was adapted for this project.  A series of Postgres Views stored intermediate computations.

## Web Application

[Flask-Diamond](http://flask-diamond.org) was used to model the databases and to export *gh-impact* computation results as JSON.  This dynamic backend was adapted to work with GitHub Pages by batch-exporting all JSON results (~10MB) to the filesystem for static operation.  The search interface is then able to request a JSON file to fulfill a search request without the need for a persistent Python application process.

## References

Gousios, G. (2013). The GHTorrent dataset and tool suite. In Proceedings of the 10th Working Conference on Mining Software Repositories (pp. 233–236). Piscataway, NJ, USA: IEEE Press. Retrieved from http://dl.acm.org/citation.cfm?id=2487085.2487132

Hirsch, J. E. (2005). An index to quantify an individual’s scientific research output. Proceedings of the National Academy of Sciences of the United States of America, 102(46), 16569–16572.

Linoff, Gordon. (2013). Answer to SQL for computing ... h-index.  Retrieved from http://stackoverflow.com/a/18787390/1146681.
