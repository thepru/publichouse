---
title: "Public House Strips"
bodyclass: "archive"
layout: layouts/home.html
permalink: "/strips/"
---

<h2>Archive:</h2>

<ul>
    {% for strip in collections.strip | reverse %}
        <li><a href="{{ strip.url | url }}">{{ strip.data.title }}</a>&ensp;&middot;&ensp;{{ strip.date.toDateString() }}</li>
    {% endfor %}
</ul>
