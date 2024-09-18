function calculateTax(income, expense){
    
    let sum = income - expense;
    let tax = sum * 0.2
    if(income< expense || income <0|| expense <0){
        return "invallid input"
    }
    return tax

}

//! 2
function sendNotification(email) {
    if(typeof email  !== "string"){
        return "Invalid email"
    } if (email.includes("@")===false){
        return "Invalid Email"
    }
    let select = email.indexOf("@")

    let username =  []
    let domainName = []
    

    for (let i = 0; i<select; i++){
        username.push(email[i])
        result1 = username.join("")
        
    } 
    for ( let i = select+1; i<email.length; i++){
        domainName.push(email[i])
        result2= domainName.join("")


    }return result1+ " sent you an email from " + result2
    
}
//!3
function checkDigitsInName(name) {
    if(typeof name !== "string"){
        console.log("Invalid Input")
    }

    for( let i = 0; i<name.length; i++ ){
        if(!isNaN(name[i])){
            return true
        }

    
    }
    return false
    

}
console.log

function calculateFinalScore(obj) {
    if (typeof obj !== "object"){
        return "Invalid Object"
    }
    
    let marks = obj.schoolGrade + obj.testScore
    totalMarks = marks
    if(obj.testScore >= 50 || obj.schoolGrade >= 30){
        return false
    }
    if(obj.isFFamily){
      totalMarks += 20
    }if(totalMarks >= 80){
        return true
    }else{
        return false
    }
    
}

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




// console.log(calculateTax(34000, 1753))
// console.log(sendNotification("zihadgmail.com"))
// console.log(checkDigitsInName("Raju"))
// console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false }))
// console.log(waitingTime([13, 2], 6))