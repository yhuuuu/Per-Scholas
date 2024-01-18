// // Count sown deom 10 to 1
// for(let i = 10; i>0; i--){
//     // console.log(i)
// }

// //Output add numbers from 1 to 10 
// for (let i = 1;i<10; i+=2){
//     // if(i%2 !==0){
//     //     console.log(i)
//     // }
// // console.log(i)
// }


// //Output even numbers from 1 to 10 
// for (let i = 0;i<=10; i+=2){
// //console.log(i)
// }

// //Output mutiples of 3, starting at 6 and ending at 60

// for(let i = 6; i <=60; i+=3)
// console.log(i)

// //Output an increasing numbr of # from 1 to 7
// let sym = "#"

// for(let i = 0; i<7; i++){
//     console.log(sym)
//     sym+='#'
// }

//write for look iterates from 1 to 20. The loop should:
//Print "prime" for all prime number
//Print "even" for all prime number
//Print "odd" for all prime number
//Treat 2 as an even number and 1&3 as odd, rather than prime

// for(let i = 1; i<=20; i++ ){
//     if(i ==1){
//         console.log(`${i} is odd`)
//     }
//     else if(1%2 ===0){
//         console.log(`${i} is even`)
//     }else if (1%3!==0 && i%2 !==0){
//         console.log(`${i} is Prime`)
//     }else{
//         console.log(`${i} is odd`)
//     }
// }



// Write while loops to accomplish the following tasks:

// Count down to 0 from a given number.
// let x = 10

// while (x>=0){
//     console.log(x)
//     x--;
// }
// Log integers in multiples of 3 as long as they are less than 35.
// let num = 5
// while (num<=35){

//     if (num%3===0){
//         console.log(num)
//     }
//     num++
// }
// Print integers in multiples of 5 as long as they are less than 100.

// let num =0
// while (num<100){

//     if (num%5===0){
//         console.log(num)
//     }
// num++
// }
// Print integers between 0 and 20 with the following conditions:

// All numbers divisible by 2 should be multiplied by 3 before they are output.
// All other integers should not be output.

// let num = 1
// //while num is less than 20
// while (num < 20) {
//     // console.log(num)

//     //if num is divisible by 2
//     if (num % 2 === 0) {
//         console.log(num,num*3)
//     }
//     //Iterate num +1
//     num++

//     //num+2
// }

// Print all prime numbers between 0 and 20.
// let num = 1

// while(num < 20){
//     if(num%2 !==0 && num%3 !==0){
//         console.log(`${i} is prime number`)    
//     }
//     num++
// }


//Romeo went to the vending machine to buy himself a cookie, which costs $4. 
//He paid with a $10 bill, and the vending machine gave him his change in quarters.
//Write a loop that outputs how many quarters Romeo received.

// let totalMoney = 10
// let cookie = 4
// let change = 0
// let remainder = totalMoney-cookie

// while(remainder >0){
//     change += 4;
//     remainder --;
// }
// console.log(change)



let sum = 0;

for (let i = 0; i < 5; i++) {

  if (i % 2 === 0) continue;

   sum += i;
 
}
console.log(sum)