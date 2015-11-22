var startItem = document.getElementById('two');
var prevItem = startItem.previousSibling;
var nextItem = startItem.nextSibling;

nextItem.className = 'cool';

var parentItem = document.getElementsByTagName('ul')[0];
var firstChildItem = parentItem.firstChild;
var lastChildItem = parentItem.lastChild;

//Change the values of the first li 
//and the last li in the unordered list

firstChildItem.className = 'cool';
lastChildItem.className = 'cool';