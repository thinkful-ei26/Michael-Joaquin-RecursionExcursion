'use strict';
var allAnagrams = function(string) {
  if (string.length === 0) {
    return [''];
  }
  var result = {};

  string.split('').forEach(function(letter, i) {
    var remainingLetters = string.slice(0, i) + string.slice(i + 1);

    allAnagrams(remainingLetters).forEach(function(anagram) {
      result[letter + anagram] = true;
    });
  });
  return Object.keys(result);
};

console.log(allAnagrams('mary'));
