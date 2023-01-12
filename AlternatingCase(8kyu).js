//
//
//


String.prototype.toAlternatingCase = function () {
  return this.split("").map(item => item === item.toUpperCase()? item.toLowerCase(): item.toUpperCase()).join('');
}

// Another way is:

String.prototype.toAlternatingCase = function () {
  return this.split('').map(function(x){
    if(x >= 'A' && x <= 'Z') return x.toLowerCase();
    if(x >= 'a' && x <= 'z') return x.toUpperCase();
    return x;
  }).join(''); 
}
