# Strips (archive)

<ul>
{%- for strip in collections.strip -%}
  <li>{{ strip.data.title }}</li>
{%- endfor -%}
</ul>
