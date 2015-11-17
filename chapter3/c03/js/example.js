/* The script is places inside an IIFE to protect the scope of the variables */

(function() {
	// PART ONE: CREATE HOTEL OBJECT AND WRITE OUT THE OFFER DETAILS

	// Create a hotel object using object literal syntax
	var hotel = {
		name: 'Park',
		roomRate: 240,
		discount: 15,
		offerPrice: function() {
			var offerRate = this.roomRate * ((100 - this.discount) / 100); // Multiply roomRate by decimal version of discount rate
			return offerRate;
		}
	};

	// Write out the hotel name, standard rate, and the special rate
	var hotelName, roomRate, specialRate;

	hotelName = document.getElementById('hotelName'); // Get elements
	roomRate = document.getElementById('roomRate');
	specialRate = document.getElementById('specialRate');

	hotelName.textContent = hotel.name; // Write hotel name to document
	roomRate.textContent = '$' + hotel.roomRate.toFixed(2); // Write roomRate to document
	specialRate.textContent = '$' + hotel.offerPrice(); // Write specialRate to document

	// PART TWO: CALCULATE AND WRITE OUT THE EXPIRY DETAILS FOR THE OFFER
	var expiryMsg; // Message to display to users
	var today; // Today's date
	var elEnds; // Element displaying the offer end date

	function offerExpires(today) {
		// Declare variables within the function for local scope
		var weekFromToday, day, date, month, year, dayNames, monthNames; 
		// Create variable containing new date 7 days from current time by adding (in milliseconds) a week's time to current system time
		weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
		// Arrays for day and month names
		dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
		monthNames = ['January','Februrary','March','April','May','June','July','August','September','October','November','December'];

		day = dayNames[weekFromToday.getDay()]; // Get string name of day 7 days from now
		date = weekFromToday.getDate(); // Get day's date 7 days from now
		month = monthNames[weekFromToday.getMonth()]; // Get string name of month 7 days from now
		year = weekFromToday.getFullYear(); // Get year 7 days from now
		// Message to user displaying offer details
		expiryMsg = 'Offer expires next ' + day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
		return expiryMsg;
	}

	today = new Date(); // Create new date object with current date/time
	elEnds = document.getElementById('offerEnds'); // Get offerEnds element
	elEnds.innerHTML = offerExpires(today); // Add expiryMsg to document element
// Finish the immediately invoked function expression IIFE
}());