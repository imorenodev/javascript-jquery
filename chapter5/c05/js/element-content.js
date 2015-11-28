var itemTwo = document.getElementById('two');

itemTwo.firstChild.nodeValue = 'salami';

//save innerHTML of third item in list in string variable
var duplicateEl = document.getElementById('three').innerHTML;
//replace innerHTML of element 'one' with innerHTML of element 'three'
document.getElementById('one').innerHTML = '<a href=\"http://www.google.com\">' + duplicateEl + '</a>';