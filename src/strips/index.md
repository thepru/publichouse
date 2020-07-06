# Strips (archive)

{% if postListItems.length %}
      <ol>
        {% for item in postListItems %}
          {% if item.date.getTime() <= global.now %}
            <li>
              <h3>
                <a href="{{ item.url }}">{{ item.data.title }}</a>
              </h3>
              <p>
                <time datetime="{{ item.date | w3DateFilter }}">{{ item.date | dateFilter }}</time>
              </p>
            </li>
          {% endif %}
        {% endfor %}
      </ol>
    </div>
{% endif %}
