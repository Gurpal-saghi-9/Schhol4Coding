// Ladder  If Else : Ladder if...else is used to check multiple conditions one after another until one is true.

/*
 Input marks and print grade:
90+ → A,
80-89 → B,
70-79 → C,
60-69 → D,
else → F
*/

let marks = 85;

if (marks >= 90) {
  console.log("A Grade");
} else if (marks >= 80) {
  console.log("B Grade");
} else if (marks >= 70) {
  console.log("C Grade");
} else if (marks >= 60) {
  console.log("D Grade");
} else {
  console.log("Fail");
}

/*
Check if a number is:
Positive
Negative
Zero
*/
let number = -5778;

if (number > 0) {
  console.log("Positive");
} else if (number < 0) {
  console.log("Negetive");
} else if (number == 0) {
  console.log("Zero");
} else {
  console.log("Invalid number");
}

/*
Input age and print:
<13 → Child
13–19 → Teenager
20–59 → Adult
60+ → Senior
*/
let age = 60;

if (age < 13) {
  console.log("Child");
} else if (age >= 13 && age < 20) {
  console.log("Teenager");
} else if (age >= 20 && age <= 59) {
  console.log("Adult");
} else if (age >= 60) {
  console.log("Senior");
} else {
  console.log("Invalid age");
}

/*
Input temperature and print:
<0 → Freezing
0–15 → Cold
16–30 → Moderate
31+ → Hot
*/
let temperature = 16;

if (temperature < 0) {
  console.log("Freezing");
} else if (temperature >= 0 && temperature <= 15) {
  console.log("Cold");
} else if (temperature >= 16 && temperature <= 30) {
  console.log("Moderate");
} else if (temperature >= 31) {
  console.log("Hot");
} else {
  console.log("Invalid temperature");
}

/*
 Input a number 1–7 and print day:
1 → Monday, 2 → Tuesday, ... 7 → Sunday,
else → "Invalid day"
*/
let day = 6;
if (day == 1) {
  console.log("Monday");
} else if (day == 2) {
  console.log("Tuesday");
} else if (day == 3) {
  console.log("Wednesday");
} else if (day == 4) {
  console.log("Thursday");
} else if (day == 5) {
  console.log("Friday");
} else if (day == 6) {
  console.log("Saturday");
} else if (day == 7) {
  console.log("Sunday");
}else{
    console.log("Invalid number")
}

/*
Input units consumed and print rate:
<100 → ₹2/unit
100–199 → ₹3/unit
200–299 → ₹5/unit
300+ → ₹8/unit
*/
let elc = 157;
if(elc < 100){
    console.log("$2/unit");
}else if(elc >= 100 && elc <= 199){
    console.log("$3/unit");
}else if(elc >= 200 && elc <= 299){
    console.log("$5/unit");
}else if(elc >= 300){
    console.log("$8/unit");
}else{
    console.log("Invalid units")
}

/*
 Input a number and say:
Less than 10
Between 10 and 100
Between 101 and 999
1000 or more
*/
number = 5677;
if (number < 10) {
    console.log("Less than 10");
}else if(number >= 10 && number <= 100){
    console.log("Between 10 and 100");
}else if(number >= 101 && number <= 999){
    console.log("Between 101 and 999");
}else if(number >= 1000){
    console.log("1000 or more");
}else{
    console.log("Invalid number");
}

/*
 Input BMI value and show:

<18.5 → Underweight
18.5–24.9 → Normal
25–29.9 → Overweight
30+ → Obese
*/

let bmi = 25.3;  // You can change this or take input using prompt()

if (bmi < 18.5) {
    console.log("Underweight");
} else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Normal");
} else if (bmi >= 25 && bmi <= 29.9) {
    console.log("Overweight");
} else if (bmi >= 30) {
    console.log("Obese");
} else {
    console.log("Invalid BMI value");
}

/*
If score < 33 → Fail,
33–49 → Pass,
50–74 → Good,
75–89 → Very Good,
90+ → Excellent
*/
let score = 78; // Change the score to test different outputs

if (score < 33) {
    console.log("Fail");
} else if (score >= 33 && score <= 49) {
    console.log("Pass");
} else if (score >= 50 && score <= 74) {
    console.log("Good");
} else if (score >= 75 && score <= 89) {
    console.log("Very Good");
} else if (score >= 90) {
    console.log("Excellent");
} else {
    console.log("Invalid Score");
}

/*
Input color name, print:
"Red → Stop"
"Yellow → Get Ready"
"Green → Go"
Else → "Invalid color"
*/
let colour = "Red";

colour = colour.toLowerCase();  // Make it lowercase

if (colour === "red") {
    console.log("Stop");
} else if (colour === "yellow") {
    console.log("Get Ready");
} else if (colour === "green") {
    console.log("Go");
} else {
    console.log("Invalid colour");
}
