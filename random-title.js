"use strict";

var $ = document.querySelector.bind(document);

var randomValue = function(len) {
  return Math.floor(Math.random() * len);
}

var randomChoice = function(l) {
  return l[randomValue(l.length)];
}

var first = function(l) {
  return l[0];
}

var total = function(l) {
  var result = 0;
  for (var i in l) {
    result += l[i];
  }
  return result;
}

var weightedChoice = function(l) {
  var totalWeight = total(l.map(first));
  var target  = randomValue(totalWeight);
  var cumulative = 0;
  for (var i in l) {
    console.log(target, cumulative);
    cumulative += first(l[i]);
    if (cumulative >= target) {
      return l[i].slice(1);

    }
  }
  throw "Weight calculation went wrong!";
}

var expand = function(term) {
  if (Array.isArray(term)) {
    return term.map(expand).join("");
  }
  if (typeof term == "string") {
    if (term[0] === "@") {
      return expand(weightedChoice(grammar[term]));
    }
    return term
  }
  return term;
}

var go = function() {
  $("#variation").textContent = expand("@PLACE_TYPE");
  $("#again").textContent = expand("@AGAIN");
}
