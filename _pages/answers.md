---
layout:     page
title:      Q&A
permalink:  /answers/
menu:       main
image:      http://www.gh-impact.com/media/thumb-big.jpg
excerpt:    This page contains questions and Answers about gh-impact, such as - How is influence calculated? Can gh-impact be manipulated? gh-impact is a measure of influence on GitHub.
---

{% include toc.html %}

## How is influence calculated?

One particular index of influence known as the *H-Index* combines the *quantity* and *quality* of an individual's work to create a single number that basically captures the idea of *influence* (Hirsch, 2005).

> A scientist has index **h** if **h** of his/her **Np** papers have at least **h** citations each, and the other **(Np − h)** papers have no more than *h* citations each.

A more direct way to say it comes from [Wikipedia H-Index](https://en.wikipedia.org/wiki/H-index):

> a scholar with an index of **h** has published **h** papers each of which has been cited in other papers at least **h** times.

## How is GitHub like Academia?

In Academia there are citations, which are a direct reference to another author's work. On GitHub there are stars, watchers, followers, forks, and even other potential metrics that work like citations.  I propose the following typical uses for those GitHub mechanisms:

1. projects are *starred* by people who use those projects
2. projects are *starred* by people who are likely to use those projects in the future
3. projects tend to be *watched* by project owners and others who build the project
4. projects tend to be *forked* by developers who are building part of a project
5. users accounts on GitHub are *followed* for many reasons

GitHub *stars* are therefore the best measure of actual project use. On that basis, *gh-impact* currently substitutes project *stars* for citations in the H-Index computation.

## What is the significance of knowing somebody's **gh-impact** score?

*gh-impact* can provide a rough estimate of a GitHub account's overall productivity and influence.  There may be circumstances under which *gh-impact* is useful for making comparisons, but this is an area of ongoing research and it is generally not advised.  You can [read more about the project](/about/) on this site.

## What about users who star their own projects?

*gh-impact* will not be significantly impacted by users who star their own projects.  Consider a user who stars all of their own projects.  This user cannot attain a *gh-impact* score above 1 through this method alone because each user has just one star to give.

## Is this robust against manipulation/distortion?

Under usage conditions that would not violate GitHub's terms of service, *gh-impact* is probably robust.  However, this is the Internet.  On that basis it's naive to presume that all users will adhere to GitHub's terms.

The authors uncovered multiple accounts that appeared to have inflated *gh-impact* scores on the basis of some strange project usage behavior.  In one situation we observed, it appears a network of accounts were automatically generating and starring projects - presumably as part of research into git usage itself.  These accounts have been removed from the results.

## Why does this number not match my expectation?

If we consider GitHub's data to be "perfect," then in comparison *gh-impact* can be influenced by several sources of error.

### Source Data

An important influence is the data source used for this research ([GHTorrent](http://ghtorrent.org)) which is itself an ambitious project that is still working to improve the timescale mirrored in the project.

### Project Ownership

Another influence is that only project ownership is considered during the calculation.  In practical terms, only one user account may be the owner of a project despite the possibility that several individuals may contribute to that project.

### Organizations and Individuals

A project is owned by an account, and that account may belong to either an individual or to an organization.  *gh-impact* will under-estimate influence in cases where individuals are most productive through their contributions to organization-owned projects.

### Original Repositories

Forks are not currently considered during *gh-impact* computation, so any authors of popular forks will not receive full credit for those contributions.

## Are **gh-impact** scores comparable between two users or two industries?

Maybe, but be careful.  H-Index, from which *gh-impact* is derived, has been found to vary systematically between academic fields.  As a result, it is not possible to compare the productivity of academics in different fields on the basis of H-Index.

We suspect the same cross-field comparisons will be dangerous on GitHub, just as with academia.  For example, some programming languages encourage the creation of many little packages, which may lead to slightly higher *gh-impact* scores for developers who use such languages.  Whether *gh-impact* is stratified by industry or by another facet like language is a future research direction.

We can now say with confidence that Individual and Organization accounts behave differently, and are not directly comparable.  As a result, these two account types are analyzed and presented differently throughout the *gh-impact* work.

## Where do the data come from?

Researchers at [GHTorrent](http://ghtorrent.org) provide MySQL database dumps on a regular basis (Gousios, 2013).  The **2016-07-19** database dump (approximately 41.3GB) was downloaded and the *users* (~13M rows), *projects* (~34M rows), and *watchers* (~49M rows) tables were extracted as CSV files.  The *watchers* table is named for historical reasons, but it actually contains stars - not watchers.

## How is **gh-impact** actually computed?

Data were imported into Postgres directly from the MySQL dumps. All subsequent computation was performed in Postgres using SQL, which provides powerful query planning tools.  The basic idea for an H-Index SQL query (Linoff, 2013) was adapted for this project.  A series of Postgres Views stored intermediate computations.

## How is the web application constructed?

[Flask-Diamond](http://flask-diamond.org) was used to model the databases and to export *gh-impact* computation results as JSON.  This dynamic backend was adapted to work with GitHub Pages by batch-exporting all JSON results (~14MB) to the filesystem for static operation.  The search interface is then able to request a JSON file to fulfill a search request without the need for a persistent Python application process.

## Will the authors help me with my project?

**Academics**: [please get in touch](http://imiller.utsc.utoronto.ca/page/contact.html). I am also looking for post-doctoral research opportunities starting Winter 2017.

**Industry**: Premium consulting services are available. DM [@iandennismiller](https://twitter.com/iandennismiller) to set up an initial consultation.

## References

Gousios, G. (2013). The GHTorrent dataset and tool suite. In Proceedings of the 10th Working Conference on Mining Software Repositories (pp. 233–236). Piscataway, NJ, USA: IEEE Press. Retrieved from http://dl.acm.org/citation.cfm?id=2487085.2487132

Hirsch, J. E. (2005). An index to quantify an individual’s scientific research output. Proceedings of the National Academy of Sciences of the United States of America, 102(46), 16569–16572.

Linoff, G. (2013). Answer to SQL for computing ... h-index.  Retrieved from http://stackoverflow.com/a/18787390/1146681.
