function hideElement(el) {
	el.style.visibility = "hidden";
}

var invader = document.getElementById('space-invader');
var circle = document.getElementById('circle');

invader.addEventListener('click', function(){
		hideElement(invader);
	}, false);

circle.addEventListener('click', function(){
		hideElement(circle);
	}, false);