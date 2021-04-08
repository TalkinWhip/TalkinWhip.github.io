---
title:  "University Forum and Lemmy contributions"
date:   2021-04-05 12:31:23
categories: [Projects]
tags: [federation, selfhosting, foss]
---

# Preamble

I strongly believe Google and Facebook have no place in a University or any other public institution.  
As I started my somewhat-technical master, it was disappointing to find out that the students were organized around a loose connection of WhatsApp groups and a very stale Google Drive folder.   

This was unacepptable and I started to look for something new.
I didn't think a bunch of 20-somethings would be partial to something in the style of phpBB or vBulletin, so I went with something more modern - a link aggregator. Later on I added a Nextcloud shared folder and an Etherpad (to replace the stale GDrive) 

Lemmy, in version 0.9.9 as I hosted it seemed to be simple and clean but sleek(-enough) and very functional. 

# What is Lemmy

[Lemmy](join.lemmy.ml) is a link aggregator for the Fediverse (an interconnected, open source alternative to mainstream social networks, in this case reddit). But it also offers many improvements over classical commercial link-aggregators.

# Hosting it

I went with a docker solution. The UI is separated from the backend, so it can be modified and deployed separately. This is exactly what I did. Touched up the themeing lightly, added a noindex meta tag, since it was a closed community and deployed it on my own. It was a fun exploring this, as I've previously only been on the consuming end when it comes to docker.  
I got a domain, set up nginx and an SSL certificate and [we were off to the races](https://fau-iis.space).  
![](https://molaliyski.com/images/fauiis1.png)  
If it catches on, the federation functionality allows for creating similar communities for other programms in my university and interconnecting those. This is a bit of a pipedream though...

# Beyond the university website

After spending days getting "my hands dirty" with Lemmy's code, I felt really involved with the project, even though I had very little idea of RUST and my efforts were mostly on configuration, deployment and community management.  
Nevertheless I wanted to help, got very involved in the community, helped wherever I could - translations, donations, issues, user support, moderation. And am now trying to also contribute code towards the project. You've got to start somewhere, right?
