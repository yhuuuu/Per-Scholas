// First find the element from html
const submitBtn = document.getElementById("submitBtn");
const plantNameInput = document.getElementById("pname")
const plantTypeSelect = document.getElementById("ptype")
const pheight = document.getElementById("pheight");
const pwidth = document.getElementById("pwidth");
const conditionCheckBoxes = document.querySelectorAll("condition");
const problem = document.querySelectorAll("problem")
const preferenceCheckBox = document.querySelectorAll("problem")
const postDate = document.getElementById("pdate")
const swapListContainer = document.getElementsByClassName("swaplist-container")[0]

// // Get the input value from the form after clicking the button
submitBtn.addEventListener('click', handleClick);

//Plant class
class Plant {
    constructor(name, type, height, width, conditon, problem, exchang_method, postDate) {
        this.name = name
        this.type = type
        this.height = height
        this.width = width
        this.condition = conditon
        this.problem = problem
        this.exchang_method = exchang_method
        this.postDate = postDate
    }
}


function handleClick(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get values from each input
    const plantNameValue = plantNameInput.value;
    const plantTypeValue = plantTypeSelect.value;
    const plantHeightValue = pheight.value;

    // Create my first plant object
    const plant = new Plant(plantNameValue, plantTypeValue, plantHeightValue);

    // Log the plant object to check if values are captured correctly
    console.log(plant);

    // Create a new row and insert cells for each property of the plant object
    const newRow = infoTableBody.insertRow(infoTableBody.rows.length);

    for (const property in plant) {
        if (plant1.hasOwnProperty(property)) {
            const cell = newRow.insertCell();
            cell.innerHTML = plant[property];
        }
    }
}

//     //insert a row into an HTML table when a add button is cliked  
//     const infoTableBody = document.getElementById('info-tbody')

//     const newRow = infoTableBody.insertRow(infoTableBody.rows.length);

//     // Insert cells and set their content
//     const cell1 = newRow.insertCell(0);
//     const cell2 = newRow.insertCell(1);
//     const cell3 = newRow.insertCell(2)

//     cell1.innerHTML = plantNameValue
//     cell2.innerHTML = plantTypeValue
//     cell3.innerHTML = plantHeightValue


// }


