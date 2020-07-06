# Strips (archive)

<ul>
{% for strip in collections.strip | reverse %}
  <li>{{ strip.data.title }} - {{ strip.data.date }}</li>
{% endfor %}
</ul>
