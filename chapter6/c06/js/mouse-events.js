//hide the shape elements
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

//show and hide alert element

//Create HTML for message
var msg = '<div class=\"header\"><a id=\"close\" href="#">close X</a></div>';
msg += '<div><h2>System Maintenance</h2>';
msg += 'Our servers are being updated between 3 and 4 a.m. ';
msg += 'During this time, there may be minor disruptions to service.</div>';

var elNote = document.createElement('div');
elNote.setAttribute('id', 'note');
elNote.innerHTML = msg;
document.body.appendChild(elNote);

function dismissNote() {
	document.body.removeChild(elNote);
}

var elClose = document.getElementById('close');
elClose.addEventListener('click', dismissNote, false);