---
layout: page
title: Strips
group: "navigation"
---


<nav class="navArchive">
	<ul>
		<li>Go to Year:</li>
		<li><a href="#2017">2017</a></li>
		<li><a href="#2016">2016</a></li>
		<li><a href="#2015">2015</a></li>
		<li><a href="#2014">2014</a></li>
		<li><a href="#2013">2013</a></li>
		<li><a href="#2010">2010</a></li>
		<li><a href="#2008">2008</a></li>
		<li><a href="#2007">2007</a></li>
		<li><a href="#2006">2006</a></li>
		<li><a href="#2005">2005</a></li>
		<li><a href="#2004">2004</a></li>
		<li><a href="#2003">2003</a></li>
	</ul>
</nav>

<ul class="archiveList">
  {% for post in site.posts %}

    {% unless post.next %}
      <h3 id="{{ post.date | date: '%Y' }}">{{ post.date | date: '%Y' }} <a href="#main">&uarr;</a></h3>
    {% else %}
      {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
      {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
      {% if year != nyear %}
        <h3 id="{{ post.date | date: '%Y' }}">{{ post.date | date: '%Y' }} <a href="#main">&uarr;</a></h3>
      {% endif %}
    {% endunless %}

    <li>
	<a href="{{ post.url }}">{{ post.title }}</a><br /><span>{{ post.date | date: "%B %e, %Y" }}</span>
      </li>
  {% endfor %}
</ul>

<a href="#main">&uarr; Back to Top</a>