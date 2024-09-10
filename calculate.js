//! Find the biggest number from an input

// function maxNum(num1,num2,num3){
//     if(num1>num2 && num1>num3){
//         console.log("number One is big "  , num1)
//     }else if(num2>num1 && num2>num3){
//         console.log("number 2 is bigger " , num2)
//     }else{
//         console.log("num 3 is biggest of all " , num3)
//     }
//     return num1,num2,num3
// }
// const num1=1
// const num2 =2
// const num3=3
// const chechIt = maxNum(num1,num2,num3)
// console.log(chechIt)

//! Find the lowest number from an array
// let height = [993, 9, 934, 44, 23, 455, 64, 999];

// function minHeight(height) {
//   let minnumber = height[0];

//   for (const numb of height) {
//     if (numb < minnumber) {
//       minnumber = numb;
//     }
//   }
//   return minnumber;
// }

// const heightRequer = minHeight(height);
// console.log(heightRequer);

/**
 
function getHeight(height){

        let minmum = height[0]
        // [
        //     993,   9, 934, 44,
        //      23, 455,  64,999
        //   ]
    for(let elements of height){
        if( elements > minmum ){
            minmum=elements
        }

    }
    return minmum
}

const heightRequerment = getHeight(height)
console.log(heightRequerment)
 */

//! Market Products Price calculate

/**
 * ShirtPrice = 500
 * JinsPent= 800
 * Shoes = 900
 */

// function shoppingPrice(shirtQuantity,pentQuantity,JinsPentQuantity){

//     const per_Shirt= 500
//     const per_JinsPent=800
//     const per_Shoes =900

//     const allShirts= per_Shirt * shirtQuantity
//     const allJinsPent=per_JinsPent * pentQuantity
//     const allShoes = per_Shoes * JinsPentQuantity

//     const netPayment = allJinsPent+allShirts+allShoes
//     return netPayment
// }

// const payment = shoppingPrice(1,2,1)
// console.log("Your bill is : ", payment)

//! Height value of object output

// let mobiles = [
//   {
//     Brand: "Samsung",
//     Price: 30000,
//     Camera: "120mpx",
//     Ram: "3gb",
//     color: "Purple",
//   },
//   { Brand: "Oppo", Price: 20000, Camera: "41mpx", Ram: "3gb", color: "Purple" },
//   {
//     Brand: "Pocco",
//     Price: 22000,
//     Camera: "20mpx",
//     Ram: "3gb",
//     color: "Purple",
//   },
//   {
//     Brand: "Iphone",
//     Price: 130000,
//     Camera: "15mpx",
//     Ram: "3gb",
//     color: "Purple",
//   },
//   {
//     Brand: "OnePlug",
//     Price: 30000,
//     Camera: "20mpx",
//     Ram: "3gb",
//     color: "Purple",
//   },
// ];

// function highestPrice(mobiles) {
//   let maximumPrice = mobiles[0];

//   for (let mobile of mobiles) {
//     if (mobile.Price > maximumPrice.Price) {
//       maximumPrice = mobile;
//     }
//   }
//   return maximumPrice;
// }

// const valueForMoney = highestPrice(mobiles);
// console.log("Mobile value for money : ", valueForMoney);

//! Shopping cart calculate

// const allProducts = [
//     {productName:'brush', Price : 100, Quantity:2},
//     {productName:'oil', Price : 400, Quantity:1},
//     {productName:'sunglass', Price : 350, Quantity:2},
//     {productName:'watch', Price : 550, Quantity:1},
//     {productName:'shocks', Price : 300, Quantity:3},
// ]

// function wallet(allProducts) {
//   let payableBill = 0;
//   for (product of allProducts) {
//     const totalBill = product.Quantity * product.Price;
//     payableBill = payableBill + totalBill;
//   }
//   return payableBill;
// }

// const totalBill = wallet(allProducts);
// console.log(totalBill);
