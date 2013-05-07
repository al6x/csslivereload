setInterval(function(){
  var links = document.querySelectorAll('head link')
  for(var i = 0; i < links.length; i++){
    var link = links[i]
    var href = link.getAttribute('href').split('#')[0]
    link.setAttribute('href', href + '#' + Math.random())
  }
}, 1000)