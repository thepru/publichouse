---
title: "Public House Strips"
bodyclass: "archive"
layout: layouts/home.html
permalink: "/strips/"
---

<ul>
{% for strip in collections.strip | reverse %}
<li><a href="{{ strip.url | url }}">{{ strip.data.title }}</a> - {{ strip.date.toDateString() }}</li>
{% endfor %}
</ul>
