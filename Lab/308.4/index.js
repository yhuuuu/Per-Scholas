//R-ALAB 308.4.1:
// This is the base data from previos lab

// CSV Data we are working with
let str ='ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26'

// Slipt the string into row based on line break
let rows = str.split('\n');

// Create an array to store the  data
let data = []

// Loop through each row
for (currentRow= 1; currentRow<rows.length; currentRow++){
    // Split each row into cells besed on commas
    let cells = rows[currentRow].split(',')
  
    //Create an object to represent the current row
    let rowData = {
        ID:cells[0],
        Name:cells[1],
        Occupation:cells[2],
        Age:cells[3]
    }

    data.push(rowData)

}
console.log(data)

// console.log('------------ Part 2: Expanding Functionality ------------ ')

// let str = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26'

// //Spliting the string by \n, that will break down 5 rows in this case
// let row = str.split('\n')

// //console.log(row)

// // //Declare a variable that stores the number of columns in each row of data within the CSV
// let numberOfColumns;
// let headerRow
// if (row.length > 0) {
//     //Split the first row into an array of columns
//     headerRow = row[0].split(',')
//     //Assign the number of clumns
//     numberOfColumns = headerRow.length
// }
// else {
//     //No rows, set the number of the column to 0
//     numberOfColumns = 0;
// }
// console.log("The number of columns in each row of data within the CSV is " + numberOfColumns)


// //Store your results in a two-dimensional array.
// let rowDataArray = []

// for (i = 0; i < row.length; i++) {
//     rowDataArray.push([row[i]])
// }
// console.log(rowDataArray)


// console.log('------------ Part 3: Transforming Data------------ ')

// let rowDataObjects = []

// for (currentRow = 1; currentRow < row.length; currentRow++) {

//     let dataRow = row[currentRow].split(',') //data exclude the header
//     //console.log(row[1].split(','))

//     if (dataRow.length === numberOfColumns) { //if number of column header and value are match

//         let rowDataObject = {}

//         // Iterate over the columns and assign each column value to the corresponding header key
//         for (index = 0; index < numberOfColumns; index++) {

//             rowDataObject[headerRow[index]] = dataRow[index]

//         }
//         // Store the current row object in the array
//         rowDataObjects.push(rowDataObject);
//     }
// }
// console.log(rowDataObjects)


// console.log('------------ Part 4: Sorting and Manipulating Data ------------ ')
// console.log("1.Remove the last element from the sorted array.")

// rowDataObjects.pop()
// console.log(rowDataObjects)

// console.log("2.Insert object at index 1:.")

// let newData = { id: "48", name: "Barry", occupation: "Runner", age: "25" }
// rowDataObjects.splice(1,0,newData)
// console.log(rowDataObjects)

// console.log("3.Add object at the end of the array")
// let secondNewData = { id: "7", name: "Bilbo", occupation: "None", age: "111" }
// rowDataObjects.push(secondNewData)
// console.log(rowDataObjects)

// //Convert all object properties to lowercase
// let rowDataObjectsLowerCase = rowDataObjects.map(obj => {
//     let newObj = {};
//     for (let key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         newObj[key.toLowerCase()] = obj[key];
//       }
//     }
//     return newObj;
//   });

// console.log("Covert all object properties to lowercase: ")
// console.log(rowDataObjectsLowerCase)



// let avgAge = 0

// let sumOfAge = 0

// for( i = 0 ; i <rowDataObjectsLowerCase.length; i ++){
//    let age = parseInt(rowDataObjectsLowerCase[i].age)
//    sumOfAge += age
 
// }

// avgAge= sumOfAge/ rowDataObjectsLowerCase.length
// console.log("The average age is: " +avgAge)

