// ******************
// Module 4 Solution
// ******************

(function (window) {
  var helloSpeaker = {};
  var speakWord = "Hello"

  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }
  window.helloSpeaker = helloSpeaker.speak;
}
)(window);

