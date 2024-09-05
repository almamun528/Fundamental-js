var students =["Jony","Rony","Tony"]

console.log(students)


console.log("--------------------------------")
 
students.push("Tina", "Hena" , "Joya", "Mamun")

console.log( students)

console.log("--------------------------------")

students.pop("Mamun")


console.log(  students)




console.log("--------------------------------")


// //! Single Line of reversed array 
var newArray= ['rahim', 'karim', 'jamil', 'rony','jony' ]

let ulta =newArray.reverse()
console.log(ulta)

var NUMBERS = [1,2,3,4,5,6,7,8,9]

let rev_numbers= NUMBERS.reverse()
console.log(NUMBERS)


// //! for loop reverse the array 

var NumBers = [1 , 2, 3, 5, 6, 7, 8, 9]

let rev=[]

for ( ulta_Numbers of NumBers){

    rev.unshift(ulta_Numbers)
}
console.log(rev)

for(let i =0 ; i<NumBers.length; i++ ){
   let Rev = NumBers[i]
    rev.unshift(Rev)
}
console.log(rev)


for( var i = 0; i<NumBers.length; i++ ){
    const x_number = NumBers[i]
    rev.unshift(x_number)
}
console.log(rev)

var NEWNUMBERS= [1,2,3,4,5,6,7]
let reversed = []

for( let i= NEWNUMBERS.length-1; i>=0; i-- ){

    const num = NEWNUMBERS[i]
    reversed.push(num)
}
console.log(reversed)

var values = [9,8,7,6,5,4,3,2,1]

let empty = []
for( numbers of values ){
    values.reverse()
}
console.log(values)

for ( let i= 0; i<values.length; i++ ){

    const store = values[i]
    empty.unshift(store)
}
console.log(empty)

for ( let i = values.length-1; i>=0 ; i-- ){

    const memory = values[i]
    console.log(memory)
    empty.push(memory)

}
console.log(empty)

/*
// !Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']
*/

var colors = ['red', 'blue', 'green', 'yellow', 'orange']

var reversedColor= []
for( let i = 0; i<colors.length; i++ ){

    const changed = colors[i]
    reversedColor.unshift(changed)

}
console.log(reversedColor)


/*** 
 //!Task 2
 * Write a JavaScript code to get the "//!even numbers"  from an array using any looping technique.

Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

Output:

[12, 98, 76, 46]


 * 
 */

var numbers  = [12, 98, 5, 41, 23, 78, 46];

var emptyStore =[]


for( let i = numbers.length-1; i>=0;i-- ){
    const store = numbers[i]
    

    if( store % 2 == 0){
        emptyStore.push(store)
    }
}
console.log(emptyStore)

/**
//! Task 3
Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:

'TomTimTinTik'
*/

var arr = ['Tom', 'Tim', 'Tin', 'Tik']

var newarr=[]
for(chr of arr){
    
}
for ( let i=0; i<arr.length; i++){
    const store = arr[i]
    newarr.push(store)
}
console.log(newarr.join(''))
for (let chr of arr){
   
    newarr.push(chr)
    
}
console.log(newarr.join(""))

/**
 //!Task 4 (Hard)
 Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
 
 Input: const statement = 'I am a hard working person'
 
 Output:
 
 'person working hard a am I'
 * 
 * 
*/
const statement = 'I am a hard working person'

var emptyarray=[]
 
let newStatement = statement.split(' ')

console.log(newStatement)

for( let i = newStatement.length-1; i>=0; i--){
    const addValue = newStatement[i]
    emptyarray.push(addValue)
}
console.log(emptyarray.join(' '))