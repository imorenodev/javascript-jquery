var msg;
var level = 3;

// Determine message based on level

switch (level) {
	case 1:
		msg = 'Good luck on the first test!';
		break;
	case 2:
		msg = 'Second of three - keep going!';
		break;
	case 3:
		msg = 'Final round, almost there!';
		break;
	default:
		msg = 'Good luck!';
		break;
}

var el = document.getElementById('answer');
el.textContent = msg;

for (var i = 1; i < 100; i++) {
	if (i % 15 == 0) {
		document.write('FizzBuzz, ');
	} else if (i % 3 == 0) {
		document.write('fizz, ');
	} else if (i % 5 == 0) {
		document.write('buzz, ');
	} else {
		document.write(i + ', ');
	}
}