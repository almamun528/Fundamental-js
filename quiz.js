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
//     if(obj.testScore >= 50 || obj.schoolGrade >= 30){
//         return false
//     }
//     if(obj.isFFamily){
//       totalMarks += 20
//     }if(totalMarks >= 80){
//         return true
//     }else{
//         return false
//     }
    
// }

// console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }


// ))





// function sendNotification(email) {

//     if(typeof email !== "string") {
//         return "Invalid Email"
//     }else if(email.includes('@')== false  )  {
//         return "Invalid  email"
//     } 

//     let dhori = email.indexOf("@")
    
//     let tumarName = []
//     let DomainErName=[]

//     //!for username
//     for( let i = 0; i<dhori ; i++){
//         tumarName.push(email[i])
        
//         result = tumarName.join("")
//     }
//     //! get domain name
//     for( let i = dhori+1; i <= email.length; i++ ){
//         DomainErName.push(email[i])
//         result2 = DomainErName.join("")
//     }

//     return result + " sent you an email from " + result2


// }

// console.log(sendNotification("mamun@gmail.com"))



// ফাংশন টি যাদের ভাইভা হয়ে গেছে তাদের সময়ের একটা এভারেজ বের করবে এবং বর্তমান সিরিয়ালের পর থেকে  ইসরাতের আর কত সময় লাগবে সেটা বের করবে এবং আউটপুট হিসেবে রিটার্ন করবে।  

// let   times = [ 3, 5, 7, 11, 6 ]
// let serialNumber =  10
// function  waitingTime(waitingTimes  , serialNumber) {
//     let sum =0
// for( let i =0; i<times.length; i++){
//     sum= sum+times[i]
// }
// let average = sum / times.length
// let result = average
// let resultx=  Math.round(result) 

// let SerialOFISrat = serialNumber-1
// let myserial = SerialOFISrat 

// let baki_ase_koyjon =myserial - times.length 

// let mywaitingTime = baki_ase_koyjon * resultx
//     return mywaitingTime
// }
// console.log(waitingTime(times,serialNumber))



function  waitingTime(waitingTimes  , serialNumber) {
    
    if(!Array.isArray(waitingTimes)|| typeof serialNumber !=="number") {
        return "Invalid Input"
    }
    let sum = 0
    for(let i =0; i<waitingTimes.length; i++){
        sum = sum + waitingTimes[i]
    }
    let averageTimeOfCandidate = sum / waitingTimes.length
    let totalTime = averageTimeOfCandidate
    let result = Math.round(totalTime)
    
    let serialOFIsrat = serialNumber -1
    let herNumber = serialOFIsrat
    let totalCandidates = herNumber - waitingTimes.length
    let expectedTime = totalCandidates * result
    return expectedTime


}
console.log(waitingTime([7, 8, 3, 4, 5], "9"))