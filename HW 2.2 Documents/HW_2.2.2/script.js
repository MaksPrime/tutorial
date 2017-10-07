var paragraph = {};
paragraph.i = 1;
paragraph.add = function () {

    var div = document.getElementById('div');
    var button = document.getElementById('button');

    function adding() {
        var par = document.createElement("p");
        par.innerHTML = ("Свежесозданный параграф " + paragraph.i);
        div.appendChild(par);
        paragraph.i+=1;
    } //Функция добавления нового параграфа

    if (paragraph.i<10){
        adding();
    } else if (paragraph.i==10){
        adding();
        button.setAttribute('value', 'Очистить все');
    } else {
        var allPar = document.getElementsByTagName("p");
        do {
            div.removeChild(allPar[0]);
           } while (allPar.length>0)
        button.setAttribute('value', 'Добавить параграф');
        paragraph.i = 1;
    }
}
document.getElementById("button").onclick = paragraph.add;
