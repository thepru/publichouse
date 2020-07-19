---
title: "Welcome to Public House"
bodyclass: "home"
layout: layouts/home.html
---

<h2>Here are the latest strips:</h2>

<nav>

{% set latestStrip = collections.strip | reverse %}
<ul>
{% for strip in latestStrip.slice(0,2) %}
<li><a href=" {{ strip.url | url }}  ">{{ strip.data.title }}</a> - {{ strip.date.toDateString() }}</li>
{% endfor  %}
<li><a href="/strips/">Archive</a></li>
</ul>

</nav>