
/**
 * Any of the examples below will accomplish the
 * same task: reversing a string.
 * 
 * Which of these examples is best? Why?
 * Note that there is no "correct" answer.
 * 
 * !!!!!
 * I like reverseString2 because it is the shortest and cleanest code.
 * It's easier to read and understand
 * 
 */

//     function reverseString(str) {
//     const strArray = str.split("");
//     const revArray = strArray.reverse();
//     const revString = revArray.join("");
//     return revString;
//   }

// function reverseString2(str) {
//     return str.split("").reverse().join("");
// }

//   function reverseString3(str) {
//     let revString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//       revString += str[i];
//     }
//     return revString;
//   }

//   function reverseString4(str) {
//     if (str === "") return "";
//     else return reverseString4(str.substr(1)) + str.charAt(0);
//   }

//   function reverseString5(str) {
//     return (str === "") ? "" : reverseString5(str.substr(1)) + str.charAt(0);
//   }

//   console.log(reverseString("!dlroW olleH"))
// console.log(reverseString2("!dlroW olleH"))
//   console.log(reverseString3("!dlroW olleH"))
//   console.log(reverseString4("!dlroW olleH"))
//   console.log(reverseString5("!dlroW olleH"))

console.log("-----------Part 1: Thinking Functionally---------------")
let array = [1, 2, 3, 4, 5]

//Take an array of numbers and return the sum
function sumOfArray(arrayList) {
    let sum = 0
    for (index = 0; index < arrayList.length; index++) {
        sum += arrayList[index]
    }
    return sum
}
console.log(`The sum of the array is ${sumOfArray(array)}`)

//Take an array of numbers and return the average
function avgOfArray(arrayList) {
    let sum = sumOfArray(array)
    let average = sum / arrayList.length
    return average
}
console.log(`The average of the array is ${avgOfArray(array)}`)

//Take an array of strings and return the longest string

let str = ["apple", "orange", "watermelon", "peach", "pineapple"]

function longestString(strList) {
    // Let the first world become the longest word
    let longestWord = strList[0]

    // Comapre it with the current long string
    for (index = 1; index < strList.length; index++) {

        if (strList[index].length > longestWord.length) {
            longestWord = strList[index]
        }
    }
    return longestWord
}

console.log(`The longest word is ${longestString(str)}`)


//Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
//For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"]

function stringsLongerThan(strList, num) {
    let newArray = []
    for (index = 0; index < strList.length; index++) {

        if (strList[index].length > num) {
            newArray.push(strList[index])
        }
    }
    return newArray

}
console.log(`Words that are longer than given number are: ${stringsLongerThan(str, 5)}`)

//Take a number, n, and print every number between 1 and n without using loops. Use recursion.
function printNumbersRecursive(n) {
    if (n >= 1) {
        printNumbersRecursive(n - 1); // Recursive call
        console.log(n);
    }
}
printNumbersRecursive(5);

console.log("-----------Part 2: Thinking Methodically---------------");

const data = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

// Sort the array using a callback function

let mySortFn = function (a, b) {
    // Convert age strings to numbers for proper numeric comparison
    let ageA = parseInt(a.age);
    let ageB = parseInt(b.age);

    //console.log(`a: ${a.id}; b: ${b.id}`);
    //console.log(ageA - ageB)
    return ageA - ageB
};

const sortedArray = data.sort(mySortFn);

console.log("--- Sort the arry by age ---")
console.log(sortedArray)

//Filter the array to remove entries with an age greater than 50
const filteredArray = data.filter((person) => {
    return person.age <= 50;

});
console.log("--- Filter the array to remove entries with an age greater than 50 ---")
console.log(filteredArray)

//Map the array to change the “occupation” key to “job” and increment every age by 1.

const reformattedArray = filteredArray.map((person) => {

    return {
        id: person.id,
        name: person.name,
        job: person.occupation,
        age: parseInt(person.age) + 1
    }
});
console.log("--- Map the array to change the “occupation” key to “job” and increment every age by 1 ---")
console.log(reformattedArray)

//Use the reduce method to calculate the sum of the ages.
const initialValue = 0;
const sumOfAge = reformattedArray.reduce(
    (accumulator, currentValue) => accumulator + parseInt(currentValue.age),
    initialValue
)
console.log("--- The sum of the ages----")
console.log(sumOfAge)



//Average age
const avgAge = sumOfAge / reformattedArray.length
console.log("--- Average age----")

console.log(avgAge)


console.log("-----------Part 3: Thinking Critically---------------")

let originalObj = [
    { id: '57', name: 'Bob', job: 'Fry Cook', age: 20 },
    { id: '48', name: 'Barry', job: 'Runner', age: 26 },
    { id: '42', name: 'Bruce', job: 'Knight', age: '' }
]

function incrementAge(newObj) {
    if (newObj.age === undefined || newObj.age === '') {
        newObj.age = 0
    }
    else {
        newObj.age += 1;

    }
    newObj.updated_at = new Date();
    return newObj;
}

console.log(originalObj)
const modifiedObj = originalObj.map(incrementAge);

console.log(modifiedObj)