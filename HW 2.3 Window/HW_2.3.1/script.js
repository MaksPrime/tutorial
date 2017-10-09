window.onload = function () {
var counter = 0;
var interval;

function count() {
    get ('seconds').innerHTML = counter;
    counter++;
}

get('start').onclick = function () {
    interval = setInterval(count, 2000);
}

get('stop').onclick = function () {
    clearInterval(interval);
}
}

var get = function (id) {
    return document.getElementById(id);
}
