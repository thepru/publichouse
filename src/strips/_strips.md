---
title: "Public House Strips"
bodyclass: "archive"
layout: layouts/home.html
permalink: "/strips/"
---

## {{ title }}

<ul>
{% for strip in collections.strip | reverse %}
  <li>{{ strip.data.title }} - {{ strip.date.toDateString() }}</li>
{% endfor %}
</ul>
