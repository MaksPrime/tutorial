/*
 Дано два числа A и B где (A<B).
 Выведите на экран суму всех чисел расположенных в числовом промежутке от А до В.
 Выведите на экран все нечетные значения, расположенные в числовом промежутке от А до В.
 */

var a = parseInt(prompt("Enter number A"));
var b = parseInt(prompt("Enter number B"));

if (a < b) {var A = a; var B = b;}
else {var A = b; var B = a;}

var AsumB = 0;
for (var i = A; i <= B; i++ ) {
    AsumB = AsumB + i;}
document.write("Sum of numbers in the interval = " + AsumB + "<br>");
document.write("Odd numbers in the interval:" + "<br>");
for (var i = A; i <= B; i++ ) {
    if (i%2 != 0) {
        document.write (i + "<br>");}
}