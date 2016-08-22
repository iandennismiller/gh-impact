# Todo

## Analysis

- [ ] what is the significance of this work?
- [ ] how is this novel? fill related work (scan of arXiv, related works, etc)
- [ ] once somebody has searched, what do they do next?  read full report?
- [ ] how do we know gh-impact is valid?  because it correlates with popular projects, num stars, num followers
- [ ] why is gh-impact better than raw rankings?  because it is a single metric that combines both quantity and quality; no raw stat does that
- [ ] effect of project language upon gh-impact?  meh... lost interest...
- [ ] do accounts with lots of follows give stars more effectively (i.e. attach to high gh-impact projects more often)?

## Website and Data

- [ ] SQL pipeline for percentiles
- [ ] ability to link specific results via social
- [ ] minify javascript

## Report Enhancements

- [ ] use github API to retrieve other details about the user
- [ ] star count for most popular project
- [ ] organization size, for orgs
- [ ] average stars

## Audience

- [ ] write blog post about this on academic blog
- [ ] explanation powerpoint video
- [ ] promotion: /r/programming, HN, twitter
- [ ] latest blog post on front page?
- [ ] experiment: is leaderboard or report stickier?
- [ ] send notice to ghtorrent folks
- [ ] watermark images

# Completed Tasks

## Website and Data

- [x] hit enter to search
- [x] put the query in the location history
- [x] when loaded with location hash, perform search automatically
- [x] write about page
- [x] choose a few interesting defaults and make them clickable
- [x] focus input in text box
- [x] error response if name not found
- [x] bigger search box
- [x] google analytics
- [x] score should be bigger font
- [x] put username in title
- [x] able to tab to search button?
- [x] add license
- [x] need favicon
- [x] logo? basically...
- [x] add organizations
- [x] pages should be simple URLs: /about, etc
- [x] consolidate about and move items to answers
- [x] table of contents
- [x] remove search box from report
- [x] leader boards
- [x] google analytics tracks quantity of search queries
- [x] lowercase all names so case is insensitive
- [x] Shorten key names in json
- [x] split JSON database by hash buckets, not alpha
- [x] include account type in json
- [x] track certain outgoing links as goals/conversions
- [x] build leader boards dynamically from JSON lists
- [x] improve pipeline for leaders
- [x] evaluate https://github.com/jekyll/jekyll-assets; no dice
- [x] add some organizations to examples list
- [x] build examples dynamically from JSON inside gh-impact.js
- [x] search button is magnifying glass icon
- [x] new page: related work
- [x] link to report on home page
- [x] clean up old data files in _includes
- [x] track example clicks differently
- [x] track results - report as a special event or funnel
- [x] no event for showing examples; new event for clicking examples
- [x] new goal: click to report
- [x] twitter card
- [x] facebook opengraph
- [x] add robots.txt
- [x] mobile screen too wide: index
- [x] center landing page
- [x] search button should be on same line as query on small screens
- [x] index page examples wrap on small screens
- [x] mobile screen too wide: leaderboard
- [x] "quick facts" summary page
- [x] support image zooming or expanding
- [x] minify HTML

## Analysis

- [x] density plot of scores to answer question: how do I compare?
- [x] is there a substantial difference between individuals and organizations?
- [x] who/which are the top users and organizations?
- [x] improve aesthetic for plots
- [x] ensure all plots have titles and axes are labeled
- [x] is there a relationship between gh-impact and number of followers?
- [x] does quantity of projects predict impact factor?
- [x] what drives star-giving behavior?
- [x] is gh-impact predictive of the popularity of an accounts's projects?
- [x] does organization size predict impact factor?

## Report Enhancements

- [x] display account type on report
- [x] report percentiles corresponding to scores based on a table lookup
- [x] arrange report as a table or something
- [x] percentiles for organizations
- [x] format leader board side-by-side
- [x] some users get 100th percentile...  99 is max

## Audience

- [x] get a domain, probably
- [x] submit to HCOMP 2016 before August 15 at 5pm PST
- [x] register alternate domain names?
- [x] add Disqus to blog posts
- [x] contact mechanism: added disqus
