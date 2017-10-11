window.onload = function () {
var counter = 3537;
var minutes = 0;
var hours = 0;
var interval;
var button = get('start'); 

//мигалка
setInterval(function(){
    get('colon').innerHTML = ".";
        setTimeout(function(){
             get('colon').innerHTML = ":";}, 500)
}, 1000)

//алгоритм вывода времени:
function count() {
    get ('seconds').innerHTML = ('0' + (counter%60)).slice(-2);
    counter++;
    
    	if ((counter%60)==1){
    		minutes = ((counter - counter%60)/60);
    		get ('minutes').innerHTML = ('0' + (minutes%60)).slice(-2);
    	}

    		if((counter%3600)==1&&(minutes!=0)){
				hours +=1;
    			get ('hours').innerHTML = ('0' + hours).slice(-2);
    		}
    	}

//поведение стартовой кнопки:    
    button.onclick = startFunction;
	function startFunction() {
        if (button.getAttribute('id')=='start') {
    interval = setInterval(count, 1000);
    button.setAttribute('value', 'Stop');
    button.setAttribute('id', 'stop');
    } else {
            clearInterval(interval);
            button.setAttribute('id', 'start');
            button.setAttribute('value', 'Start');}
        }

//поведение кнопки сброса:    
get('clear').onclick = function () {
	counter = 0;
	minutes = 0;
	hours = 0;
	get('seconds').innerHTML = '00';
    get('minutes').innerHTML = '00';
    get('hours').innerHTML = '00';
}

}

//упрощение получения элемента по id:
var get = function (id) {
    return document.getElementById(id);
}
