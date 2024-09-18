function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return " Invalid Input";
  }
  let sum = 0;
  for (let number of waitingTimes) {
    // let sum = 0; vul eita loop er bahire hobe
    sum = sum + number
  }
  const count = waitingTimes.length; // !length is ok

//   const differance = serialNumber - count - 1; {vul hoyeche}

    let averageTime = sum / count 
    let totalTime = averageTime // ekhane time ta doshomik e ashbe tai eita ke round korte hobe
    
    let result = Math.round(totalTime) // ekhane round kora hoyeche tai apnar r doshomik ashbe na

    let serial = serialNumber -1 //eita bujhte hole PDF dekhen oi khane bole dise 
    // let herNumber = serial //

    let totalTimeCount = serial - count // ekhaen serial theke length badh dile,Israt er age koto jon ase ta jana jabe
    let time = totalTimeCount * result
  
//   const time = differance * 6; // vul 
  return time;
}



console.log(waitingTime([6], 4));
