---
title: "Archive of Selected Strips"
bodyClass: "archive"
layout: layouts/home.html
permalink: /strips/
eleventyExcludeFromCollections: true
---

<img class="hero" src="/img/piggins.png?version={{ site.time }}" alt="Piggins sleeping lakeside">
<br/>

## {{ title }}&hellip;



<ul>
  {% for strip in collections.strip | reverse %}
  <li><a href="{{ strip.url | url }}" title="Originally published on: {{ strip.date.toDateString() }}">{{ strip.data.title }}</a> {% if strip.data.thread %}<em>(starts a thread)</em>{% endif %}</li>
  {% endfor %}
</ul>