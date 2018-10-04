javascript: function url() {
	var base_purpose = "Catch-up b/t TBD & Michael";
	var base_event_advance = 1;
	var base_time_start = "1000";
	var base_time_end = "1030";
	var base_zoomcode = "8613144223";
	var base_phonenumber = "+1 617 539 6072";

	purpose = prompt("Event purpose?", base_purpose);
	if (null == purpose) {
		purpose = base_purpose;
	}

	var date = new Date();
	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	if (m < 10) {
		m = "0" + m;
	}
	var d = date.getDate() + base_event_advance;
	if (d < 10) {
		d = "0" + d;
	}

	var base_event_date = y + "" + m + "" + d;
	event_date = prompt("Event date? YYYYMMDD", base_event_date);
	if (null == event_date) {
		event_date = base_event_date;
	}

	var reg_ymd = /\d{8}/g;
	event_date = encodeURIComponent(event_date).match(reg_ymd);
	if (null == event_date) {
		event_date = base_event_date;
	}

	time_start = prompt("Start time? HHMM", base_time_start);
	if (null == time_start) {
		time_start = base_time_start;
	}

	var reg_hhmm = /\d{4}/g;
	time_start = encodeURIComponent(time_start).match(reg_hhmm);
	if (null == time_start) {
		time_start = base_time_start;
	}

	time_end = prompt("End time? HHMM", base_time_end);
	if (null == time_end) {
		time_end = base_time_end;
	}

	time_end = encodeURIComponent(time_end).match(reg_hhmm);
	if (null == time_end) {
		time_end = base_time_end;
	}

	var base_timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	timezone = prompt("Which timezone?", base_timezone);
	if (null == timezone) {
		timezone = base_timezone;
	}

	if (false) {
		zoomcode = prompt("Which Zoom ID?", base_zoomcode);
		if (null == zoomcode) {
			zoomcode = base_zoomcode;
		}

		phonenumber = prompt("Backup phone number?", base_phonenumber);
		if (null == phonenumber) {
			phonenumber = base_phonenumber;
		}
	} else {
		var zoomcode = base_zoomcode;
		var phonenumber = base_phonenumber;
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
		event_date +
		"T" +
		time_start +
		"00/" +
		event_date +
		"T" +
		time_end +
		"00"
	);
}

window.open(url());
