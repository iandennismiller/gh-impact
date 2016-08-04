---
layout: page
title: Q&A
permalink: /answers.html
---

## What is the significance of knowing somebody's **gh-impact** score?

*gh-impact* can provide a rough estimate of a GitHub account's overall productivity and influence.  There may be circumstances under which *gh-impact* is useful for making comparisons, but this is an area of ongoing research and it is generally not advised.  You can [read more about the project](about.html) on this site.

## What about users who star their own projects?

*gh-impact* will not be significantly impacted by users who star their own projects.  Consider a user who stars all of their own projects.  This user cannot attain a *gh-impact* score above 1 through this method alone because each user has just one star to give.

## Is this robust against manipulation/distortion?

Under usage conditions that would not violate GitHub's terms of service, *gh-impact* is probably robust.  However, this is the Internet.  On that basis it's naive to presume that all users will adhere to GitHub's terms.

The authors uncovered multiple accounts that appeared to have inflated *gh-impact* scores on the basis of some strange project usage behavior.  In one situation we observed, it appears a network of accounts were automatically generating and starring projects - presumably as part of research into git usage itself.  These accounts have not been removed from the results.

## Why does this number not match my expectation?

If we consider GitHub's data to be "perfect," then in comparison *gh-impact* can be influenced by several sources of error.

### Source Data

An important influence is the data source used for this research, which is itself an ambitious project that is still working to improve the timescale mirrored in the project.

### Project Ownership

Another influence is that only project ownership is considered during the calculation.  In practical terms, only one user account may be the owner of a project despite the possibility that several individuals may contribute to that project.

### Organizations and Individuals

A project is owned by an account, and that account may belong to either an individual or to an organization.  *gh-impact* will under-estimate influence in cases where individuals are most productive through their contributions to organization-owned projects.

### Original Repositories

Forks are not currently considered during *gh-impact* computation, so any authors of popular forks will not receive full credit for those contributions.

## Are **gh-impact** scores comparable between two users or two industries?

Maybe, but be careful.  H-Index, from which *gh-impact* is derived, has been found to vary systematically between academic fields.  As a result, it is not possible to compare the productivity of academics in different fields on the basis of H-Index.

We suspect the same cross-field comparisons will be dangerous on GitHub, just as with academia.  For example, some programming languages encourage the creation of many little packages, which may lead to slightly higher *gh-impact* scores for developers who use such languages.  Whether *gh-impact* is stratified by industry or by another facet like language is a future research direction.

## Will the authors help me with my project?

Are you an academic researcher?  If so, then please get in touch.  I am also looking for post-doctoral research opportunities for Fall 2017.

Are you in the industry?  Premium consulting services are available. DM [@iandennismiller](https://twitter.com/iandennismiller) to set up an initial consultation.

<!-- ## is there a substantial difference between individuals and organizations? -->

<!-- ## is there a relationship between **gh-impact** and number of followers? -->

<!-- ## is there any effect of language upon gh-impact? -->

<!-- ## is **gh-impact** predictive of the popularity of a users's projects? -->

<!-- ## density plot of scores to answer question: how do I compare? -->
