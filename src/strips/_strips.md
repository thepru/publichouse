---
title: "Archive of Selected Strips"
bodyClass: "archive"
layout: layouts/home.html
permalink: /strips/
eleventyExcludeFromCollections: true
---

## {{ title }}&hellip;

<ul>
  {% for strip in collections.strip | reverse %}
  <li><a href="{{ strip.url | url }}" title="Originally published on: {{ strip.date.toDateString() }}">{{ strip.data.title }}</a></li>
  {% endfor %}
</ul>