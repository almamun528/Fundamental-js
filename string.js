var university = "Daffodil International University ";
console.log(university);
console.log(university.toLocaleLowerCase()); // lower-case
console.log(university.toUpperCase()); // upper-case

var subject = "Math";
var exam = "MAth";

if (subject.toLocaleLowerCase() == exam.toLocaleLowerCase()) {
  console.log("We will take preparation");
} else {
  console.log("We will wait for exam routine");
}

let english = "Novel test";
let test = "novel test "; //!trim method for remove space,|trimEnd(),trimStart(),trim()

if (english.toUpperCase() == test.toUpperCase().trim()) {
  console.log("let's Read for exam");
} else {
  console.log("Wait for notice");
}

var school = "kamarjury yousuf ali heigh school";
// console.log(school.slice(0,8).toLocaleUpperCase()) //!slice( ) methods

console.log(school.split(" "));

var school_friend = ["rahim", "karim", "jasim", "hamim", "lamim"];

school_friend.push("hello");
//  console.log(school_friend)
console.log(school_friend.join("|"));
console.log(school_friend.join("-"));
console.log(school_friend.join("  "));

// //!Concat
var firstName = "Abdullah";
var lastName = "Al Mamun";

var fullName = firstName + " " + lastName;
console.log(fullName);

var FullName = firstName.concat(" ").concat(lastName);
console.log(FullName);

// // //!Include is the way to find or search a number or value

console.log(firstName.includes("a"));
console.log(firstName.includes("y"));

var institute = "Daffodil International University ";

for (var letter of institute) {
  console.log(letter);
}

var revers = "";
var mySchool = "Kamarjury Yousuf Ali Heigh School ";

for (var letter of mySchool) {
  revers = letter + revers;
}
console.log(revers);

var scl = "Kamarjury Yousuf Ali High school";
var rev = "";

// //!DETAILES HOW IT WORKS Initial Setup:

// You have a string scl with the value "Kamarjury Yousuf Ali High school".
// You initialize an empty string rev which will be used to build the reversed string.
// Loop Through Each Character:

// The for loop goes through each character in the string scl, starting from the first character (index 0) to the last character (index scl.length - 1).
// Reverse Building:

// In each iteration of the loop, you get the current character letter from scl using scl[i].
// You then prepend this letter to the rev string. This means you add the current letter at the beginning of the rev string.
// Example to Understand:

// Suppose scl is "abc".
// On the first iteration (i = 0), letter is "a", so rev becomes "a".
// On the second iteration (i = 1), letter is "b", so rev becomes "ba".
// On the third iteration (i = 2), letter is "c", so rev becomes "cba".
// Result:

// After the loop finishes, rev contains the reversed version of scl.
// console.log(rev) outputs the reversed string.

var rev = "";
for (var i = 0; i < scl.length; i++) {
  const letter = scl[i];
  rev = letter + rev;
}
console.log(rev);

let scl2 = "a b c d e f g";
let rev = "";
for (letter of scl2) {
  rev = letter + rev;
}
console.log(rev);

//! //////////////

var numberS = "1,2,3,4,5,6,7,8,9";
let ulta = "";
// for(items of numberS){
//     ulta= items + ulta
// }
for (i = 0; i < numberS.length; i++) {
  let letter = numberS[i];
  ulta = letter + ulta;
}
console.log(ulta);

// ! let abc = numberS.split(',').reverse().join('|')
// console.log(abc)
