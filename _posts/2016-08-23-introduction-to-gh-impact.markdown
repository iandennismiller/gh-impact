---
layout:     post
category:   blog
title:      Introduction to gh-impact
date:       2016-08-23 20:11:55
tags:       video
image:      http://www.gh-impact.com/media/thumb-big.jpg
excerpt:    Introducing gh-impact.  gh-impact is a measure of influence on GitHub.  Accounts that publish lots of popular projects will have higher gh-impact scores.  In this video, I will discuss what exactly gh-impact is, where it comes from, who it applies to, why gh-impact matters at all, and how you can use gh-impact in your own work.
---

<div style="text-align: center;">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/RJ8pPZ4itcs" frameborder="0" allowfullscreen></iframe>
</div>

## Transcript

Introducing gh-impact.

gh-impact is a measure of influence on GitHub.  Accounts that publish lots of popular projects will have higher gh-impact scores.  gh-impact is not affiliated with GitHub.

So in this video, I will discuss what exactly gh-impact is, where it comes from, who it applies to, why gh-impact matters at all, and how you can use gh-impact in your own work.

So first, gh-impact is a number that is designed to capture both the breadth and depth of an account's project popularity on GitHub. The gh-impact score is a number "n" if there are the same number of projects with that number of stars. So, for example, if there are 3 projects, each with 1 star, then we have 1 project with 1 star, we do not have 2 projects with 2 stars, so we say that the gh-impact score is 1.  Now, if we have 3 projects: 1 with 1 star, 1 with 2 stars, and 1 with 3 stars, we say the score is 2 because, although there are 3 projects with 1 star, there is only 1 project with 3 stars, and there are 2 projects with 2 stars, so the best number here is 2.  So - a score of 1, a score of 2.  gh stands for "good and hot."  In other words, something has to be high quality and popular in order for it to contribute to the gh-impact score.

So gh-impact is inspired by a field of academic research known as bibliometrics, which looks at articles and citations of those articles to perform some calculations and figure out things like how influential an author is.  But, this specific work makes extensive use of the data that GitHub releases publicly.  The fine folks at GHTorrent are constantly scraping the public API and collecting that information into big data dumps that were actually used for this work.  And the once we had acquired the data, our own processing pipeline was used to actually calculate gh-impact.

So this work applies to all accounts on GitHub.  However, we found that there was an interesting difference between the accounts of individuals versus the accounts of organizations and so sometimes this score is, subdivided or reported differently according to the type of account we're talking about.  In order to appear in this data set, each account has to have at least 1 star.  And so this simple requirement has eliminated about 12 million GitHub accounts who, for all intents and purposes, are inactive; they have no stars whatsoever.  The remaining 1.1 million accounts have a score of at least 1, and so they appear in our database.  But, I would like to point out that GitHub contains more than just software.  So, the gh-impact score can also be influenced by the popularity of a website, or the quality of curated lists, or even scientific research that is increasingly published on GitHub.

So why does this number matter in the first place?  Well, just like bibliometrics in academia, this is a number that helps to assess the productive output of an account.  And again, like in academia, this number then can help authors get credit for the open source work that they do.  gh-impact is also an important number that I have built, in my own work, into developed analyses that go into all these different directions in open source analysis.  And, the net effect of all that is: now we have a lot of intelligence about the open source software industry, in general.

So how can you use gh-impact in your own work?  The easiest way is with the search interface that is available on our website.  This makes it really simple to look up the score for any of the 1.1 million accounts that have scores.  But, as I mentioned, I am also publishing the results of my analysis on the website on a regular basis.  And, the gh-impact data set can also be downloaded as raw JSON files.  All of these are available through the website: www.gh-impact.com.

So, in conclusion, gh-impact is a measure of influence on GitHub and it behaves similarly to how influence is calculated in academia.  gh-impact describes both individual and organization GitHub accounts, and this number is useful for gaining intelligence about the open source software industry as a whole.  Search, analysis, and data are available from the website: www.gh-impact.com.

Thank you very much for watching!
