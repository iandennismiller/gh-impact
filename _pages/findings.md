---
layout: page
title: Findings
permalink: /findings/
menu: main
---

**NOTICE: Draft.**  As of August 9, 2016 this analysis is ongoing.

The *gh-impact* dataset is currently being explored and results will be posted here.

{% include toc.html %}

## How does one score compare to the population?

First, be sure to read [these caveats regarding comparison](/answers/#are-gh-impact-scores-comparable-between-two-users-or-two-industries), because there are a few reasons why scores might not be directly comparable.

Nevertheless, it is easy to see where one score falls on the distribution.  Here is a histogram showing how many accounts have a certain number of stars.

![Histogram](/media/density_plot-1.png)

### Percentiles

Another way to think about this comparison is to ask the question: what percentage of accounts have fewer stars?

![Percentile Plot](/media/percentile_plot-1.png)

For all the individuals with a *gh-impact* score of 1, they have more stars than nobody; 1 is the lowest you can go and still have a *gh-impact* score.  All accounts on GitHub start with a *gh-impact* score. Unless accounts take some action, their score will remain 0, and on this basis all inactive accounts have been removed.

These data can also be visualized in a simple table so you don't have to estimate your exact percentile.

<style type="text/css">
table {
    margin: 0px auto;
}
td {
    border-top: 1px dotted black;
    padding: 1px;
    width: 5em;
}
</style>

{% include analysis_user_percentile.txt %}

## Is there a difference between individuals and organizations?

In this sample, organizations have a higher *gh-impact* on average.  There are many more users than organizations in the sample, but despite the difference in quantity, organizations also have higher absolute *gh-impact* scores.

First, a basic t-test confirms the average individual *gh-impact* score is significantly different from that of organizations.

{% highlight R %}
{% include analysis_test_user_org.txt %}
{% endhighlight %}

Then, a side-by-side visual comparison of the two classes of accounts hints at the faster relative decline in numbers of individual accounts achieving higher *gh-impact* scores.

![Fiddle Plot Comparison](/media/fiddle_comparison-1.png)

Individuals and Organizations can be visually compared in absolute terms, too.  It can be seen from this visualization that there are vastly more individual accounts than organization accounts.  However, as *gh-index* increases, the difference between individuals and organizations shrinks.

![Density Plot Comparison](/media/density_comparison-1.png)

## Stars Received

![Stars Received](/media/log_stars_received-1.png)

<!-- ## is there a relationship between **gh-impact** and number of followers? -->

<!-- ## is there any effect of language upon gh-impact? -->

<!-- ## is **gh-impact** predictive of the popularity of a users's projects? -->

## Organization Size and Impact

![Organization Size and Impact](/media/org_impact-1.png)

## Number of Projects and Impact

![Number of Projects and Impact](/media/impact_and_project_count-1.png)

Individuals are the narrow distribution, organizations are the wide distribution.

## Number of Followers and Impact

![Number of Followers and Impact](/media/impact_and_followers-1.png)

Individuals are the narrow distribution, organizations are the wide distribution.

## Popularity Penalty to Individuals

![Popularity Penalty to Individuals](/media/stars_penalty_plot-1.png)

- the 95% CI for organizations includes 0, it is not significant, and the estimate is slightly positive
- the 95% CI for individuals does not include 0, it is a robust small effect
- is it possible there are some individuals fronting as organizations?

## Max Stars and Impact

![Max Stars and Impact](/media/max_stars_impact-1.png)

## Total Stars and Impact

![Total Stars and Impact](/media/stars_received_impact-1.png)

## Reciprocity

### Give a Star Get a Star?

![Give a Star Get a Star](/media/give_star_get_star-1.png)

### Give a Follow Get a Follow?

![Give a Follow Get a Follow](/media/give_follow_get_follow-1.png)
