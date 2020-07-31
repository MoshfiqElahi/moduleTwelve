//1
var number1 = 25;
var number2 = "15.5";
number2 = parseFloat(number2) //parsing a float string to number.
console.log(number1 + number2)

//2
var number1 = 35;
var number2 = "15.5";
number2 = parseInt(number2) //parsing a integer string to number. It will cut the float number. Such, it will display 50.5 to 50
console.log(number1 + number2)

//3
var number1 = 35;
var number2 = "15.5";
number2 = +number2; //parsing a string to number by using + sign.
console.log(number1 + number2)

//4 convert a number to string by using empty string
var number1 = 25;
var number2 = 15.5;
number1 = "" + number1 //Now it is a string
console.log(typeof number1)

//5 a confusing item in many programming language
var number1 = 0.1;
var number2 = 0.2
var total = (number1 + number2)
total = total.toFixed(3); //if u comment this line you will see the change
console.log(total)
