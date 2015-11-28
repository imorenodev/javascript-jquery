//save parent ul element in position variable
var position = document.getElementsByTagName('ul')[0];
//save innerHTML code of ul in positionHTML variable
var positionHTML = position.innerHTML;

//add new item to start of ul 
position.innerHTML = '<li id="first" class="hot">kale</li>' + positionHTML;

//create new 'li' element and save in newEl variable
var newEl = document.createElement('li');
//create new text node to append to newEl element
var lastItem = document.createTextNode('potato');
//append lastItem text node to the newEl element
newEl.appendChild(lastItem);

//add new item to end of ul
position.appendChild(newEl);
var lastItem2 = position.lastChild;
lastItem2.className = 'cool';

//set class attribute of all li elements to 'cool'
//get list of li elements
var liList = document.getElementsByTagName('li');
//loop through every li element and update the className to 'cool'
for (i = 0; i < liList.length; i++) {
	liList[i].className = 'cool';
}

var startPosition = document.getElementsByTagName('ul')[0];

newH2El = document.createElement('h2');
newH2ElText = document.createTextNode(liList.length);
newH2El.appendChild(newH2ElText);

startPosition.innerHTML = '<h2><span>' + liList.length + '</span></h2>' + startPosition.innerHTML;



