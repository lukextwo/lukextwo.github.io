// Current Time and Date Display

"use strict"

setTD();
setInterval(setTD, 1000);

function setTD() {
    var td = new Date();
    var currentTime = td.toLocaleTimeString();
    var currentDate = td.toLocaleDateString();
    var tElem = document.getElementById("time");
    var dElem = document.getElementById("date");

    if (tElem) tElem.textContent = currentTime;
    if (dElem) dElem.textContent = currentDate;
}