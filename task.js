// !Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

function temperature(C){
    fahr = 1.8*C+32
    return fahr;
}
let Celsius = temperature(37)
console.log(fahr)

// both are correct
// function temperature(C) {
//     let fahr = 1.8 * C + 32;
//     return fahr;
// }
// let Celsius = 37;
// let fahrenheit = temperature(Celsius);
// console.log(fahrenheit);

/**
 
//!Task-2:
 You are given an array of numbers.
 Count how many times the a number is repeated in the array.
sample-input:
numbers = [5,6,11,12,98, 5]
find: 25
output: 0
 */

function find(input) {
  const dataStore = [];
  for (number of numbers) {
    if (number === input) {
      dataStore.push(numbers);
    }
  }
  if (dataStore.length>0){
    return dataStore.length
  }else{
    return 0
  }
}

let numbers = [5, 6, 11, 12, 98, 5];
console.log(find(11));


/**
    //!Task-3:
    Write a function to count the number of vowels in a string.

    //! Extra task // Input: "hello I am learning js"
    // Output: 12 (h, l, l, m, l, r, n, n, g, j, s)
   //!Advance concept 
    function countConsonant(input2) {
    const vowels = "aeiou";  // String of vowels
    let count = 0;  // Counter for consonants

    // Loop through each character in the input string
    for (let letter of input2.toLowerCase()) {
        // Check if the letter is not a vowel and is between 'a' and 'z'
        if (!vowels.includes(letter) && letter >= 'a' && letter <= 'z') {
            count++;  // Increase the count for consonants
        }
    }

    return count;  // Return the total number of consonants
}

let input2 = "hello I am learning js";
console.log(countConsonant(input2));  // This will print the number of consonants



 */
    function countVowels(input){
        const vowels = "aeiou"
        let count =0
        for(let letter of input.toLowerCase()){
            if(vowels.includes(letter)){
                count++
            }
        }return count
    }
    let input = "hello I am learning js";
    console.log(countVowels(input)); 

    function countConsonent(input2){
        const consonent ='bcdfghjklmnpqrstvwxyz'
        let count =0
        for (let letter of input2.toLowerCase()){
            if(consonent.includes(letter)){
                count++
            }
        }return count
    }

    // let input2 = "hello I am learning js";
    //  console.log(countConsonent(input2)); 



//! // Input: "My number is 1234 and my age is 24."
// Output: 6 (digits are: 1, 2, 3, 4, 2, 4)
// Tips:
// You can use a similar approach as you did for counting consonants.
// Instead of checking for consonants, check if each character is a number.


    function checkDigit(input3){
        const number = '0123456789'
        let count =0
        for(let digit of input3){
            if(number.includes(digit)){
                count++
            }
        }return count
    }

     let input3 = "My number is 1234 and my age is 24";
     console.log(checkDigit(input3)); 


// Task-4:
// Write a function to find the longest word in a given string.






// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

// Task-5:
// Generate a random number between 10 to 20.








