var university = 'Daffodil International University '
console.log(university)  
console.log(university.toLocaleLowerCase())// lower-case
console.log(university.toUpperCase())// upper-case

var subject = 'Math'
var exam ='MAth'

if(subject.toLocaleLowerCase() == exam.toLocaleLowerCase()){
    console.log("We will take preparation")

}else{
    console.log("We will wait for exam routine")
}

let english = "Novel test"
let test = "novel test "  //!trim method for remove space,|trimEnd(),trimStart(),trim()

if(english.toUpperCase()==test.toUpperCase().trim()){
    console.log("let's Read for exam")

}else{
    console.log("Wait for notice")
}

var school="kamarjury yousuf ali heigh school"
// console.log(school.slice(0,8).toLocaleUpperCase()) //!slice( ) methods

console.log(school.split( " "))

var school_friend= ['rahim', 'karim','jasim','hamim','lamim']

 school_friend.push("hello")
//  console.log(school_friend)
console.log(school_friend.join('|'))
console.log(school_friend.join('-'))
console.log(school_friend.join('  '))

// //!Concat 
var firstName= "Abdullah"
var lastName="Al Mamun"

var fullName= firstName + " " +lastName;
console.log(fullName)

var FullName= firstName.concat(' ').concat(lastName)
console.log(FullName)

// //!Include is the way to find or search a number or value

console.log(firstName.includes('a'))
console.log(firstName.includes('y'))


var institute ="Daffodil International University "

for(var letter of institute  ){
    console.log(letter)
}

var revers = ''
var mySchool = "Kamarjury Yousuf Ali Heigh School "

for (var letter of mySchool){
    revers = letter + revers
}
console.log(revers)

