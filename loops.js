/***
//! 1st file
"I will invest at least 6 hrs every single day for next 60 days!" 
this message 60 times. So display this.

 */

for( var i=1 ; i<=60;i++){
    console.log(i + " I will invest at least 6 hrs every single day for next 60 days!" );
}

let num=1;
while( num<=60 ){
    console.log(num + " I will invest at least 6 hrs every single day for next 60 days!" );
    num++;
}


//! 2nd file

/***

Subtask-1:

Find all the odd numbers from 61 to 100.*/
// !odd_numbers

    for (var i= 61; i<=100; i++){
        if( i%2!==0){
            console.log("odd numbers from 61 to 100 are = " + i)
        }
    }


    let evenNumbers = 61;

    while(evenNumbers<=100){
        if(evenNumbers%2!==0){
            console.log("odd numbers from 61 to 100 are = " + evenNumbers)
        }
        evenNumbers++
    }






/* Subtask-2:

Find all the even numbers from 78 to 98.

 */

//!even-numbers

var n = 78;

while(n<=98){
    if( n%2==0){
        console.log("even numbers from 78 to 98 are = " + n)
    }
    n++
}

for(var i = 78; i<=98; i++){
    if(i%2==0){
        console.log("even numbers from 78 to 98 are = " + i)
    }
}


// !file 3


/***
 Subtask-1:
 *! Display sum of all the odd numbers from 91 to 129.

 */
var oddNumbers=91; 
sum = 0;  

while(oddNumbers <= 129){  
    if(oddNumbers % 2 !== 0){ 
        console.log( "numbers = " +  oddNumbers);
        sum+=oddNumbers;
    }
      oddNumbers++
    }
    console.log( " total Numbers " + sum )

    sum=0
    for(var i = 91; i<=129;i++){
        if(i % 2 !== 0){
            sum=sum+i
        }
    }
    console.log(sum)



/**Subtask-2:

  *! Display sum of all the even numbers from 51 to 85.
  */

  var x=51;
  sum=0
  while( x <= 85){
    if(x % 2 == 0){
        console.log("even numbers = " +x)
        sum=sum+x

    }
    x++

  }
  console.log("total sum of even Number is  " + sum)

var sum=0
for(var i=51; i<=85;i++){
    if(i % 2 == 0){
        console.log("total even numbers = " + i);
        
        sum=sum+i
    }
}
console.log("total Sum of even numbers from 51 - 85 are " + sum)
