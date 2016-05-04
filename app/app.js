/*
This is a JS file
*/

console.group('START APP');

var message = 'Hello World!';
console.log('message: ',message);

var printMsg = function (msg) {

  var msgbox = document.getElementById("id98457");
  console.log('msgbox: ',msgbox);

  msgbox.innerHTML = '<p>'+msg+'</p>';

}

console.groupEnd();
