function buttonRedirect(url) {
  if (url.toLowerCase().includes("apps")) {
    p1 = prompt("p1")
    p2 = prompt("p2")
    window.open(`https://${p1}.netlify.app/${p2}`,"_blank")
    return ;
  }
  window.location.href = `https://byte1001.github.io/${url}`;
}
function wopen(url) {
  var x = window.open(url,"_blank");
}
