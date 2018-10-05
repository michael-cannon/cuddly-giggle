// Google Calendar bookmarklet to create an event with pre-filled Zoom.info call information
javascript: function url() {
  // default event title
  var base_purpose = "Catch-up b/t TBD & Michael";

  // default days to delay event; 1, tomorrow; 7, same day next week; 14, two weeks from now
  var base_day_advance = 1;

  // HHMM 10 am
  var base_time_start = "1000";
  var base_time_end = "1030";

  // Michael's personal default Zoom.info code
  var base_zoomcode = "8613144223";

  // Michael's global number
  var base_phonenumber = "+1 617 539 6072";

  var purpose = prompt("Event purpose?", base_purpose);
  if (null == purpose) {
    purpose = base_purpose;
  }

  var date = new Date();
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  if (m < 10) {
    m = "0" + m;
  }
  var d = date.getDate() + base_day_advance;
  if (d < 10) {
    d = "0" + d;
  }

  // Combine date components as string to prevent math operations
  var base_event_date = y + "" + m + "" + d;
  var event_date = prompt("Event date? YYYYMMDD", base_event_date);
  if (null == event_date) {
    event_date = base_event_date;
  }

  // It blows my mind that regular expressions don't need string encapsulation. A surprisingly hard concept for me to overcome.
  var reg_ymd = /\d{8}/g;
  event_date = encodeURIComponent(event_date).match(reg_ymd);
  if (null == event_date) {
    event_date = base_event_date;
  }

  var time_start = prompt("Start time? HHMM", base_time_start);
  if (null == time_start) {
    time_start = base_time_start;
  }

  var reg_hhmm = /\d{4}/g;
  time_start = encodeURIComponent(time_start).match(reg_hhmm);
  if (null == time_start) {
    time_start = base_time_start;
  }

  var time_end = prompt("End time? HHMM", base_time_end);
  if (null == time_end) {
    time_end = base_time_end;
  }

  time_end = encodeURIComponent(time_end).match(reg_hhmm);
  if (null == time_end) {
    time_end = base_time_end;
  }

  var base_timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var timezone = prompt("Which timezone?", base_timezone);
  if (null == timezone) {
    timezone = base_timezone;
  }

  // set true if you want to ask about changing normally left alone details
  var zoomcode = null;
  var phonenumber = base_phonenumber;
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
    zoomcode = base_zoomcode;
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
  details = encodeURIComponent(details);

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
