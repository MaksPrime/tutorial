/*Напишите программу, которая будет рассчитывать и выводить на экран количество возможных вариантов доставки товара.
 Для решения задачи, используйте факториал N!, рассчитываемый с помощью цикла do-while. */

var counter = prompt("Введите число");
var factorial = 1;

document.write("Факториал числа: " + counter + "! = ");

do {

    if (counter == 0) {
        factorial = 1;
        break;
    }

    factorial = factorial * counter;
    counter = counter - 1;
}
while (counter > 0);

document.write(factorial);