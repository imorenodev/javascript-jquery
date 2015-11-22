//select elements by class name

// var el = document.getElementsByClassName('hot');

// for (var i = 0; i <= el.length+1; i++) {
// 	el[0].className = 'cool';
// 	alert(i);	
// }

//select element by css selector

var el = document.querySelector('li.hot');
el.className = 'cool';

var els = document.querySelectorAll('li.hot');

els[1].className = 'cool';

var el2 = document.getElementById('four');
el2.className = 'hot';