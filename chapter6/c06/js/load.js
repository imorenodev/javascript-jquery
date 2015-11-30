function setup() {
	var textInput;
	textInput = document.getElementById('username');
	textInput.focus();
}

function notification() {
	document.getElementById('feedback').textContent = 'Please enter a username.';
}

function clearNotification() {
	document.getElementById('feedback').textContent = '';
}

function checkUsername() {
	username = document.getElementById('username').value;
	if (username.length < 1) {
		notification();
	} else if (username.length < 5) {
		document.getElementById('feedback').textContent = 'Username must be at least 5 characters long.';
	} else {
		clearNotification();
	}
}

window.addEventListener('load', setup, false);

var textInput = document.getElementById('username');
textInput.addEventListener('blur', checkUsername, false);
