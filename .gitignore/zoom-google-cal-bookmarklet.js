javascript:function url() {
	var title = 'Catch-up b/t TBD & Michael';
	var zoomcode = '8613144223';
	var phonenumber = '+1 617 539 6072';

	var details = 'Location contains connection details. Call or SMS '+phonenumber+' for last-minute changes.\n\nDial in +16699006833,,'+zoomcode+'#,,,,,# or for India, 0008000014002,,'+zoomcode+'#,,,,,#';

	var date = new Date();
	var y = date.getFullYear();
	var m = date.getMonth() +1;
	if(m < 10){m = '0' + m;
	}  var d = date.getDate() +1;
	if(d < 10){d = '0' + d;
	}  var date = y + m + d;

	var title = encodeURIComponent(title);
	var details = encodeURIComponent(details);
	var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

	return 'https://calendar.google.com/calendar/r/eventedit?text='+title+'&location=https://axelerant.zoom.us/j/'+zoomcode+'&sf=true&output=xml&ctz='+timezone+'&dates=' + date + 'T100000/' + date + 'T103000'+'&details='+details;
}

window.open(url());
