---
title: "Welcome to Public House"
bodyclass: "home"
layout: layouts/home.html
---

<a href="{% set latestStrip = collections.strip | reverse %}{% for strip in latestStrip.slice(0,1) %}{{ strip.url | url }}{% endfor  %}">
    <img class="hero" src="http://placehold.it/1024x512/999999/333333&text=example+image" alt="Piggins and Newt enjoying some drinks">
</a>

## Latest Strips

{% set latestStrip = collections.strip | reverse %}
    <ul>
        {% for strip in latestStrip.slice(0,2) %}
            <li><a href=" {{ strip.url | url }}  ">{{ strip.data.title }}</a> - {{ strip.date.toDateString() }}</li>
        {% endfor  %}
    <li><a href="/strips/">Archive</a></li>
</ul>
