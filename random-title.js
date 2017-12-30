"use strict";

var $ = document.querySelector.bind(document);

var randomChoice = function(l) {
  return l[Math.floor(Math.random() * l.length)];
}

var expand = function(term) {
  if (term[0] !== "@") {
    return term;
  }
  var subterms = randomChoice(grammar[term]).split(" ");
  var nonEmpty = function(x){return x!=""};
  return subterms.map(expand).filter(nonEmpty).join(" ")
}

var go = function() {
  $("#variation").textContent = expand("@TITLE");
  $("#again").textContent = expand("@AGAIN");
}
