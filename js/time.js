var inow = new Date();
var ihour = inow.getHours();

if (ihour >= 7 && ihour >= 19)

  {
document.write('<link rel="stylesheet" href="/css/night.css" media="screen, projection" /' + '>');
}

if (ihour <= 6 && ihour >= 0)

  {
document.write('<link rel="stylesheet" href="/css/night.css" media="screen, projection" /' + '>');
}