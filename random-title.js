"use strict";

var $ = document.querySelector.bind(document);

var randomChoice = function(l) {
  return l[Math.floor(Math.random() * l.length)];
}

var expand = function(term) {
  if (Array.isArray(term)) {
    return term.map(expand).join("");
  }
  if (term[0] === "@") {
    return expand(randomChoice(grammar[term]));
  }
  return term;
}

var go = function() {
  $("#variation").textContent = expand("@TITLE");
  $("#again").textContent = expand("@AGAIN");
}
