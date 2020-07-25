---
title: "Welcome to Public House"
bodyclass: "home"
layout: layouts/home.html
---

{% set latestStrip = collections.strip | reverse %}

{% for strip in latestStrip.slice(0,1) %}
{{ strip.templateContent | safe }}
{% endfor  %}

<p><a href="/strips/">Archive</a></p>
