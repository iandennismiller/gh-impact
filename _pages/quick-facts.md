---
layout: page
title: Quick Facts
permalink: /facts/
menu: main
---

### 8% of GitHub accounts are active.

Of the **n=13,203,696** GitHub accounts in our data, there were **n=1,064,714** accounts (about **8%**) with a *gh-impact* score of 1 or higher (*ghi>=1*).

{% include image-zoom.html url="/media/with_score-1.png" width=300 %}

### 13.8% of active accounts belong to organizations.

Of accounts with a *gh-impact* score, **n=146,652** belong to organizations (about **13.8%**) and **n=918,061** belong to individuals.

{% include image-zoom.html url="/media/account_percent-1.png" width=300 %}

### Organizations have higher impact than Individuals.

Organizations (**mean(ghi)=1.86**) tend to have higher *gh-impact* scores than Individuals (**mean(ghi)=1.61**).

{% include image-zoom.html url="/media/comparison-1.png" width=400 %}

<!-- ![Comparison](/media/comparison-1.png) -->

### 10,266 accounts are in the 99th percentile.

The cumulative distribution of *gh-impact* rapidly tops out; the 10,266 accounts with scores above 8 are in the 99th percentile.

{% include image-zoom.html url="/media/area_99th_percentile_organizations-1.png" width=400 %}

### Further Reading

See <a class='internal' href="/report/">the first report</a> for a more detailed analysis.  More background information is also available in the [Questions and Answers](/answers/).

{% include promo-report-1.html %}

<script>
$($("div.image_frame img").zoomify());
</script>
