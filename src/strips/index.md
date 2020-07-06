# Strips (archive)

<ul>
{% for strip in collections.strip | reverse %}
  <li>{{ strip.data.title }} - {{ strip.date.toDateString() }}</li>
{% endfor %}
</ul>
