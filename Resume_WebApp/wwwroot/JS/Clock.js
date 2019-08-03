function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var don = dayOrNight(h);

    m = checkTime(m);
    s = checkTime(s);
    h = notTwentyFour(h);

    document.getElementById('theTime').innerHTML =
        h + ":" + m + ":" + s + " " + don;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

function notTwentyFour(h) {
    if (h > 12) { h = "0" + (h - 12) };
    return h;
}

function dayOrNight(i) {
    if (i > 12) {
        i = "PM"
    }
    else {
        i = "AM"
    }
    return i;
}