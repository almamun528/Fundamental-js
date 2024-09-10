function calculateTax(income, expense){
    
    let sum = income - expense;
    let tex = sum * 0.2
    if(income< expense || income <0|| expense <0){
        return "invallid input"
    }
    return tex

}


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


function checkDigitsInName(name) {
    if(typeof name !== "string"){
        console.log("Invalid Input")
    }
    let hasNumber = true
    let noNumber = false


    for( let i = 0; i<name.length; i++ ){
        if(!isNaN(name[i])){
            return true
        }

    
    }
    return false
    

}


function calculateFinalScore(obj) {
    if (typeof obj !== "object"){
        return "Invalid Object"
    }
    let marks = obj.schoolGrade + obj.testScore
    totalMarks = marks
    if(obj.isFFamily){
      totalMarks += 20
    }if(totalMarks >= 80){
        return true
    }else{
        return false
    }
    
}
