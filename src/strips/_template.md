---
title: "title"
name: "000000"
# date: 2024-01-06T10:10:00
filetype: png
transcript: true
eleventyExcludeFromCollections: true # remove to publish
---

{% include "partials/nav-strips.html" %}

{% include "partials/strip.html" %}


<details open>
<summary>Transcript</summary>

## {{ title }}
<small>*Published on {{ page.date.toDateString() }}*</small>

### Panel One 
Description…  

**PIGGINS ([about Piggins][p]):**  
…The problem with the world is peeps think’n they gotta be big.

 **NEWT ([about Newt][n]):**  
…

**PIGGINS:**  
…

### Panel Two
Description…  

…

<!--FOOTNOTES-->
<!-- [^1]: foo "bar" -->

</details>

{% include "partials/reference-links.html" %}