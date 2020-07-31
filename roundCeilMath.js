//See absolute number, though it is positive (5) or negative (-5)
var number = -5
var absoluteNumber = Math.abs(number)  //abs is the short form of Absolute
console.log(absoluteNumber)

//Make a round number. If it is 5.499 it will show 5. if more, will show 6
var number = 5.5567;
var result = Math.round(number);
console.log(result);

//Make price up
var number = 8.12;
var result = Math.ceil(number);
console.log(result);

//Make price down
var number = 8.99;
var result = Math.floor(number);
console.log(result);

//show a random number
var number = Math.random() *100; //it will show a random fraction number.
var result = Math.round(number); //it will convert fraction number to integer.
console.log(result);