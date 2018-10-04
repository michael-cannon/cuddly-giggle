javascript: function url() {
	var base_purpose = "Catch-up b/t TBD & Michael";
	purpose = prompt("Event purpose?", base_purpose);
	if ( null == purpose ) {
		purpose = base_purpose;
	}

	var date = new Date();
	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	if (m < 10) {
		m = "0" + m;
	}
	var d = date.getDate() + 1;
	if (d < 10) {
		d = "0" + d;
	}

	var date = y + "" + m + "" + d;
	var base_timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	timezone = prompt("Which timezone?", base_timezone);
	if ( null == timezone ) {
		timezone = base_timezone;
	}

	var base_zoomcode = "8613144223";
	zoomcode = prompt("Which Zoom ID?", base_zoomcode);
	if ( null == zoomcode ) {
		zoomcode = base_zoomcode;
	}

	var base_phonenumber = "+1 617 539 6072";
	phonenumber = prompt("Backup phone number?", base_phonenumber);
	if ( null == phonenumber ) {
		phonenumber = base_phonenumber;
	}

	var details =
		"Location contains connection details. Call or SMS " +
		phonenumber +
		" for last-minute changes.\n\nDial in +16699006833,," +
		zoomcode +
		"#,,,,,# or from India 0008000014002,," +
		zoomcode +
		"#,,,,,#";

	var title = encodeURIComponent(purpose);
	var details = encodeURIComponent(details);

	return (
		"https://calendar.google.com/calendar/r/eventedit?" +
		"&text=" +
		title +
		"&location=https://axelerant.zoom.us/j/" +
		zoomcode +
		"&sf=true" +
		"&output=xml" +
		"&details=" +
		details +
		"&ctz=" +
		timezone +
		"&dates=" +
		date +
		"T100000/" +
		date +
		"T103000"
	);
}

window.open(url());
