---
title: "Welcome to Public House"
bodyclass: "home"
layout: layouts/home.html
---

# Hello.

<nav>
<p>Here are the latest strips:</p>
{% set latestStrip = collections.strip | reverse %}
{% for strip in latestStrip.slice(0,2) %}
<p><a href=" {{ strip.url | url }}  ">{{ strip.data.title }}</a> - {{ strip.date.toDateString() }}</p>
{% endfor  %}
<p><a href="/strips/">Archive</a></p>
</nav>