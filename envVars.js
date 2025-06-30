var body = document.body,
  html = document.documentElement;

var cwidth = Math.max(body.scrollWidth, body.offsetWidth,
  html.clientWidth, html.scrollWidth, html.offsetWidth);

var cheight = Math.max(body.scrollHeight, body.offsetHeight,
  html.clientHeight, html.scrollHeight, html.offsetHeight);