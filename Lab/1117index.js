// // Part 1: Fizz Buzz
let num = 100
// Loop through all numbers from 1 to 100.
for(i=1; i<=num ;i ++){
    // If a number is divisible by 3, log “Fizz.”
    if(i%3===0 && i%5===0){
        console.log(`${i},Fizz Buzz`)
    }
    // If a number is divisible by 5, log “Buzz.”
    else if(i%5===0){
        console.log(`${i},Buzz`)
    }
   // If a number is divisible by both 3 and 5, log “Fizz Buzz.”
    else if(i%3===0){
        console.log(`${i},Fizz`)
    }
    // If a number is not divisible by either 3 or 5, log the number.
    else{
        console.log(`${i}`)
    }
}
// //Part 2: Prime Time
// Write a script that accomplishes the following:
// Declare an arbitrary number, n.

// Create a loop that searches for the next prime number, starting at n and incrementing from there.

let n = 38
while (true) {
    let isPrime = true;
    for (let i = 2; i <= n/2; i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime && n > 1) {
        console.log(`For n=${n}, the next prime number is: ${n}`);
        break;
    }
    n++;
}

//Part 3: Feeling Loopy

// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);

// let str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"





