/***
 * !fil 1

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

var burger = 600;

if (burger > 500) {
  console.log("You get a free coke ");
} else {
  console.log(" coke 30 tk you have to pay");
}

//!fil 2
/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    // - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

var bmi = 25;

if (bmi < 18.5) {
  console.log("you are underweight");
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log("you are normal");
} else if (bmi >= 25 && bmi <= 29.9) {
  console.log("You are OverWeight");
} else {
  console.log("You are Obese");
}

//!fil 3
/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

var result = 0;

if (result >= 90) {
  console.log("A");
} else if (result >= 80) {
  console.log("B");
} else if (result >= 70) {
  console.log("C");
} else if (result >= 60) {
  console.log("D");
} else if (result <= 59) {
  console.log("Fail");
}

// ! fil 4

/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

var marks = 93;

if (marks > 80) {
  console.log("Let's go For a Lunch");
} else if (marks <= 80 && marks >= 60) {
  console.log("Good Luck For Next Time");
} else if (marks <= 60 && marks >= 40) {
  console.log("Unseen His Massage");
} else if (marks < 40) {
  console.log("Block");
}

//! Fil 5

/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

var age = 50;
var ticket = 800;

var isStudent = true;

if (age < 10) {
  console.log("Free Ticket");
} else if (age >= 60) {
  var payment = ticket * 0.15;
  console.log("You Have to pay 15% = " + payment);
} else if (isStudent) {
  var studentPayment = (ticket * 500) / 100;
  console.log("Student off 50% = " + studentPayment);
} else {
  console.log("Regular ticket fare 800 tk");
}
