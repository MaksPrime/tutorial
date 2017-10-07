var Select = {};
Select.par = function () {
    var paragraphs = document.getElementsByTagName("p");
    for (i=0; i<paragraphs.length; i++) {paragraphs[i].style.border = "solid 1px black";}
}
document.getElementById('firstInp').onclick = Select.par;

Select.hrs = function () {
    var hrefs = document.getElementsByTagName("a");
    for (i=0; i<hrefs.length; i++) {hrefs[i].style.border = "solid 2px red";}
}
document.getElementById('secondInp').onclick = Select.hrs;

Select.block = function () {
    var div = document.getElementById("test_div");
    div.style.border = "solid 2px green";
}
document.getElementById('thirdInp').onclick = Select.block;

Select.reset = function () {
    var allElements = document.getElementsByClassName('content');
    for (i=0; i<allElements.length; i++) {allElements[i].style.border = 'none';}
}
document.getElementById('reset').onclick = Select.reset;