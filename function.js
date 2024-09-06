//!Function into String Length size is even or Odd

function  oddEvenStr (str){
    const size = str.length
    if( size % 2 === 0){
     console.log("even Size")
     return true
    }else{
        console.log("Odd size")
        return false
    }

}


//! Odd or Even Checker into function by condition  
// function isEven(number){
//     if(number % 2===0){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(isEven(4))
// //! Short way 
// function isOdd (number){
//     if (number % 2 === 0){
//         return true;
//     }
//     return false
// }
// let check_number = isOdd(4)

// console.log(check_number)

/***
  //!Task-1
  Take four parameters. Multiply the four numbers and then return the result
 */
//   function multiply (num1,num2,num3,num4){
//             sum = num1*num2*num3*num4;
//             return sum;
//   }
//   const keep =  multiply(2,3,4,5);
//   console.log(keep)

/**
     //!Task-2
    Take a number if the number is odd multiply it by 2 and return the result. 
    If the number is even divide it by two and return the result.
 */

    // function oddOREven  (number){
    //     if(number % 2 == 1){
    //         result = number*2;
    //     }else if (number % 2 ==0) {
    //         result = number/2;
    //     } 
    //     return result;
    // }

    // const evencheck = oddOREven(10)
    // console.log(evencheck)


/**
     //!Task-3
    Write a function called make_avg() which will take an array of integers and 
    the size of that array and return the average of those values.
*/

    // function make_avg (numbers){

    //     let sum = 0;

    //     for( number of numbers ){
    //         sum = sum + number;
    //     }
    //     const average = sum/ numbers.length
    //     return average;
    // }

    // const numbers=[5,10,15]

    // const ave = make_avg(numbers)
    // console.log("average numbers of your array : ", ave)

/**
 
    //!Task-5
    Write a function called odd_even() which takes an integer value and tells 
    whether this value is even or odd. If even return Even. If odd return Odd
 */


    // function odd_even (number){
    //     if( number % 2 ===0  ){
    //         console.log("Even")
    //     }else{
    //         console.log("Odd")
    //     }
    //     return number
    // }

    // function odd_even (number){
    //     if( number % 2 ===0  ){
    //         return "even"
    //     }else{
    //         return "odd"
    //     }
    // }

    // let number = 12;
    // const check = odd_even(number)
    // console.log(check)