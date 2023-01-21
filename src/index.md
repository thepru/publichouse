---
title: "Welcome to Public House"
bodyClass: "home"
layout: layouts/home.html
---

<a href="{% set latestStrip = collections.strip | reverse %}{% for strip in latestStrip.slice(0,1) %}{{ strip.url | url }}{% endfor  %}">
  <img class="hero" src="/img/hero.png?version={{ site.time }}" alt="Piggins and Newt at the bar. Newt says: Tough day? Piggins: Join the Club">
</a>

## Latest Strips

{% set latestStrip = collections.strip | reverse %}
<ul>
  {% for strip in latestStrip.slice(0,5) %}
  <li><a href=" {{ strip.url | url }}  ">{{ strip.data.title }}</a> - {{ strip.date.toDateString() }}</li>
  {% endfor  %}
  <li><a href="/strips/" title="view all strips">More&hellip;</a></li>
</ul>
