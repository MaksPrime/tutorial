/*
Задание 4. Используя циклы нарисуйте в браузере с помощью пробелов и звездочек:
- прямоугольник -done
- прямоугольный треугольник
- равносторонний треугольник  -done
- ромб 
*/
function tripleSpace () {for (s=0; s<3; s++) {document.write ("&nbsp");}}  
function doubleSpace () {for (s2=0; s2<2; s2++) {document.write ("&nbsp");}} 

//RECTANGLE
function rectangle () {
var recWidth = prompt("Enter rectangle width");
var recHeight = prompt("Enter rectangle height");

if (recHeight <= 1) {for (i=0; i < recWidth; i++) {document.write ("*"); tripleSpace ();}document.write ("<br>");}
else {
for (w=0; w < recWidth; w++) {document.write ("*"); tripleSpace ();}document.write ("<br>"); //upside of rectangle
for (h=0; h < recHeight-2; h++) {
document.write ("*");                                                                       //element of the left side 
for (i=0; i<recWidth-2; i++) {tripleSpace (); doubleSpace ();} tripleSpace ();
document.write ("*");                                                                       //element of the right side 
document.write ("<br>");}
for (i=0; i < recWidth; i++) {document.write ("*"); tripleSpace ();}document.write ("<br>");}}//downside of rectangle

//EQUILATERAL TRIANGLE
function equilateralTriangle ()
{
    var triangleLenght = prompt ("Enter the length of the  triangle side", "Enter an integer not less than 2");
    var k = 3;
    var ind = (triangleLenght-1)*3;
    function indent () {for (p=0; p < ind; p++){document.write ("&nbsp")};ind = ind-3;}

    if (triangleLenght <= 1){equilateralTriangle ();}
    else if (triangleLenght == "2"){tripleSpace (); document.write ("*"+"<br>");for (i=0; i < triangleLenght; i++){document.write ("*"); tripleSpace ();document.write ("&nbsp");}}
    else {
        indent (); document.write ("*"+"<br>");                                                   //vertex of a triangle

    var stringNumber = 2;
    do {indent ();
        document.write ("*");
        for (i=0; i<=k; i++)
        {document.write ("&nbsp");}
        document.write ("*"+"<br>");
        k = k+6;
        stringNumber++;} while (stringNumber < triangleLenght)

    for (i=0; i < triangleLenght; i++)
    {document.write ("*"); tripleSpace ();document.write ("&nbsp");}document.write ("<br>");}} //downside of triangle

rectangle ();
equilateralTriangle();
