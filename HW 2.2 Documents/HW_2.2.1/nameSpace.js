var Space = {};

Space.start = function () {
    var par = document.getElementsByTagName('p');
    for (i=0;i<par.length;i++){par[i].innerHTML = 'PARAGRAPH'}
}

setTimeout(Space.start, 2000);