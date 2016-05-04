/*
This is a JS file
*/

console.group('START POLL');

var message = 'Let\'s take a poll!';
console.log('message: ',message);

var printMsg = function (msg) {

  var msgbox = document.getElementById("id6457389");
  console.log('msgbox: ',msgbox);

  msgbox.innerHTML = '<p>'+msg+'</p>';

}

console.groupEnd();