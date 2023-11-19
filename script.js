// ******************
// Module 4 Solution
// ******************

(function hello() {

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (name of names) {

    var firstLetter = name.charAt(0).toLowerCase()
    if (firstLetter == 'j')
      byeSpeaker(name)
    else
      helloSpeaker(name)
  }
}
)();
