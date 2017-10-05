var Select = {};
Select.par = function () {
    var paragraphs = document.getElementsByTagName("p");
    for (i=0; i<paragraphs.length; i++) {paragraphs[i].style.border = "solid 1px black";}
}
// document.getElementById(firstInp).onclick = Select.par();

Select.hrs = function () {
    var hrefs = document.getElementsByTagName("a");
    for (i=0; i<hrefs.length; i++) {hrefs[i].style.border = "solid 2px red";}
}

Select.block = function () {
    var div = document.getElementById("test_div");
    div.style.border = "solid 2px green";
}
