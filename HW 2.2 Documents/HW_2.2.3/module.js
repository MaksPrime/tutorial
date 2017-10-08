var myQ = {};

myQ.findClass = function (className) {
    this.className = className;
    var elements = document.body.children;

    var elemArray = [];
    for (i=0;i<elements.length;i++){
        if(elements[i].getAttribute("class") === this.className){
        elemArray.push(elements[i]);
        }
    }

    return elemArray;
}

alert('Узлы с классом redButton: ' + myQ.findClass('redButton'));