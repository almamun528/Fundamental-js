var students =["Jony","Rony","Tony"]

console.log(students)


console.log("--------------------------------")
 
students.push("Tina", "Hena" , "Joya", "Mamun")

console.log( students)

console.log("--------------------------------")

students.pop("Mamun")


console.log(  students)




console.log("--------------------------------")


//! Single Line of reversed array 
var newArray= ['rahim', 'karim', 'jamil', 'rony','jony' ]

let ulta =newArray.reverse()
console.log(ulta)

var NUMBERS = [1,2,3,4,5,6,7,8,9]

let rev_numbers= NUMBERS.reverse()
console.log(NUMBERS)


//! for loop reverse the array 

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
