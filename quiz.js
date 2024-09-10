//!Doing here 
// function calculateTax(income, expense){
    
//     let sum = income - expense;
//     let tex = sum * 0.2
//     if(income< expense || income <0|| expense <0){
//         return "invallid input"
//     }
//     return tex

// }

// console.log(calculateTax(income,expense))




// function sendNotification(email) {
//     if(typeof email  !== "string"){
//         return "Invalid email"
//     } if (email.includes("@")===false){
//         return "Invalid Email"
//     }
//     let select = email.indexOf("@")

//     let username =  []
//     let domainName = []
    

//     for (let i = 0; i<select; i++){
//         username.push(email[i])
//         result1 = username.join("")
        
//     } 
//     for ( let i = select+1; i<email.length; i++){
//         domainName.push(email[i])
//         result2= domainName.join("")


//     }return result1+ " sent you an email from " + result2
    
// }
// console.log(sendNotification("sadia8icloud.com"))

// function checkDigitsInName(name) {
//     if(typeof name !== "string"){
//         console.log("Invalid Input")
//     }

//     for( let i = 0; i<name.length; i++ ){
//         if(!isNaN(name[i])){
//             return true
//         }
//     }
//     return false
    

// }

// console.log(checkDigitsInName("Raj0"))


// const person1= { name: "Rajib", 
//     testScore: 40,  
//     schoolGrade: 39, 
//     isFFamily : true 
// }

// function calculateFinalScore(obj) {
//     if (typeof obj !== "object"){
//         return "Invalid Object"
//     }
//     let marks = obj.schoolGrade + obj.testScore
//     totalMarks = marks
//     if(obj.isFFamily){
//       totalMarks += 20
//     }if(totalMarks >= 80){
//         return true
//     }else{
//         return false
//     }
    
// }

// console.log(calculateFinalScore({ name: "Rajib", testScore: 30,  schoolGrade: 40, isFFamily : false  }

// ))

