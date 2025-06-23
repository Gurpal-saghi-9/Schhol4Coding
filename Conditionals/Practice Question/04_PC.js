/*
Q.4- Check if Number is Divisible by 3 or 5 or Both. Print "Fizz" for multiples of 3,"Buzz" for multiples of 5, "FizzBuzz" for both
*/

let number = 45;

if (number % 3 == 0 && number % 5 == 0){
    console.log("FizzBuzz")
}else if(number % 3 == 0){
    console.log("Fizz");
}else if(number % 5 == 0){
    console.log("Buzz");
}else{
    console.log("Not divisible by both");
}