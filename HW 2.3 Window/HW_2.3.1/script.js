window.onload = function () {
var counter = 3597;
var minutes = 0;
var hours = 0;
var interval;

function count() {
    get ('seconds').innerHTML = ('0' + (counter%60)).slice(-2);
    counter++;
    
    	if ((counter%60)==1){
    		minutes = ((counter - counter%60)/60);
    		get ('minutes').innerHTML = ('0' + (minutes%60)).slice(-2);
    	}

    		if((counter%3600)==1){
				hours +=1;
    			get ('hours').innerHTML = ('0' + hours).slice(-2);
    		}
    	}

get('start').onclick = function () {
    interval = setInterval(count, 1000);
}

get('stop').onclick = function () {
    clearInterval(interval);
}

get('clear')
}

var get = function (id) {
    return document.getElementById(id);
}
